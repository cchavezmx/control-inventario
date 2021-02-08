import React, { useMemo, useEffect } from 'react'
import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CCardBody,
    CCardHeader,
    CCol,
    CFormGroup,
    CInput,
    CLabel,
    CForm,

} from '@coreui/react'

import classNames from 'classnames'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useMachine } from '@xstate/react'
import { useInvetario } from '../../../context/useInventario'


const schemaValidation = yup.object().shape({
    addInventario: yup.number().moreThan(-1).integer().optional(),
    ubicacion: yup.string().required(),
    almacen: yup.string().required()
})

const ModalFormInventario = ({ modal, setModal, payload }) => {

    const [ state, send ] = useMachine(useInvetario)
    
    useEffect(() => {
        let done = false
        if(!done && state.matches('querySuccess')){
            setModal(false)
            // history.push('/')
            window.location.reload()
            done = true
        }
        return () => done = false
    })

    
    const dateMongo = useMemo(() => {

        const dateUpdate = new Date(payload?.updatedAt)
            
        const countDays = new Intl.RelativeTimeFormat('es', { style: 'narrow' })
        const hoy = new Date()

        const dateMongo =  new Intl.DateTimeFormat('es-MX', { day :"2-digit" }).format(dateUpdate) 
        const dateHoy =  new Intl.DateTimeFormat('es-MX', { day: "2-digit" }).format(hoy)


        const dayDif = dateMongo - dateHoy
        if(payload?.updatedAt && Number(dayDif) > 5 ){
            const day = new Intl.DateTimeFormat('es-MX', { dateStyle: 'long' }).format(dateUpdate)
            return `desde el ${day}`

        }else if( dayDif === 0){
            return `contado hoy: por Usuario`

        }else if(payload?.updatedAt && Number(dayDif) < 5 ){
            const dateMongo =  new Intl.DateTimeFormat('es-MX', { day :"2-digit" }).format(dateUpdate) 
            const dateHoy =  new Intl.DateTimeFormat('es-MX', { day: "2-digit" }).format(hoy)
            return countDays.format(dateMongo - dateHoy, 'day')

        }else if( !payload.inventario || !payload?.updatedAt ){
            // para que no de error
            return 'No existe datos de registros anteriores'
        }
    })

    // TODO cambiar por from hook y validation
    const { handleSubmit, control, errors } =useForm({
        resolver: yupResolver(schemaValidation),
        defaultValues: { almacen: payload.almacen, ubicacion: payload.ubicacion, addInventario: 0 }
    })
    const onSubmit = ( e ) => {

        const updateData = {
            almacen: e.almacen,
            ubicacion: e.ubicacion,
            inventario: Number(payload.inventario) + Number(e.addInventario)
        }
        
        send('UPDATE', { _id: payload._id, data: updateData })
    }

    // TODO: Cuando updateTermina regresar a la raiz 
    
    return(
        <div>
        <CForm onSubmit={handleSubmit(onSubmit)}>
        <CModal 
        show={modal} 
        onClose={setModal}
        >
            <CModalHeader closeButton>
            <CModalTitle>Cambiar datos</CModalTitle>
            </CModalHeader>
            <CModalBody>
            <CCol xs="12" sm="12">
                {/* <CCard> */}
                <CCardHeader className="bg-success">
                    {payload.nombre}
                </CCardHeader>
                <CCardBody>
                    <CFormGroup>
                    <CLabel htmlFor="ean">EAN</CLabel>
                    <CInput id="ean" defaultValue={payload.ean} disabled />
                    </CFormGroup>

                    <CFormGroup>
                    <CLabel htmlFor="inventario col">Inventario</CLabel>
                    <small 
                        id="diasdHelpBlock" 
                        className="form-text text-muted">
                        <div 
                            className="textRedColor">{ payload?.inventario === null 
                            ? `No hay registro de un conteo anterior` 
                            : `Ultimo conteo: ${payload.inventario} piezas ${dateMongo}`}
                            </div>
                        </small>
                    <Controller 
                        name="addInventario"
                        control={ control }
                        render={({ onChange, value }) => 
                        <CInput 
                            type="number" 
                            name="addInventario"
                            id="invetario" 
                            className={classNames('col-5', { 'form-control is-invalid' : errors?.inventario  })} 
                            value={ value } 
                            onChange={ onChange }/>
                    }
                    />
                    { errors?.addInventario && <p className="textRedColor">*Valor requerido</p>}            
                    </CFormGroup>

                    <CFormGroup>
                    <CLabel htmlFor="ubicacion">Ubicación</CLabel>
                    <Controller 
                        name="ubicacion"
                        control={control}
                        render={({ onChange, value }) => 
                        <CInput 
                            id="ubicacion" 
                            value={value} 
                            className={classNames('col-5', { 'form-control is-invalid' : errors?.ubicacion  })} 
                            onChange={onChange} />
                    }
                    />
                    { errors?.ubicacion && <p className="textRedColor">*Valor requerido</p>} 
                    </CFormGroup>

                    <CFormGroup row className="my-0">
                    <CCol col="12">
                        <CFormGroup>
                        <CLabel htmlFor="almacen">Almacén</CLabel>
                    <Controller 
                        name="almacen"
                        control={control}
                        render={({ onChange, value }) => 
                        <CInput 
                            id="almacen" 
                            className={classNames('col-5', { 'form-control is-invalid' : errors?.almacen  })} 
                            value={ value } 
                            onChange={ onChange }/>
                    }
                    />
                    { errors?.almacen && <p className="textRedColor">*Valor requerido</p>} 
                        </CFormGroup>

                    </CCol>
                    </CFormGroup>
                    </CCardBody>
                    {/* </CCard> */}
                    </CCol>
            </CModalBody>
            <CModalFooter className="justify-content-center">
            <CButton className="btn-danger" type="onSubmit">Guardar</CButton>
            <CButton 
                className="btn-facebook"
                onClick={() => setModal(false)}
                >Cancel</CButton>
            </CModalFooter>
        </CModal>
        </CForm>
        </div>
    )
}

export default ModalFormInventario