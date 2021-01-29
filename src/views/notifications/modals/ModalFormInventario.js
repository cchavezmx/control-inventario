import React, { useState, useMemo } from 'react'
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
    CForm

} from '@coreui/react'
import classNames from 'classnames'

const ModalFormInventario = ({ modal, setModal, payload }) => {

    const dateMongo = useMemo(() => {

        const dateUpdate = new Date(payload?.updatedAt)
        const countDays = new Intl.RelativeTimeFormat('es', { style: 'narrow' })
        const hoy = new Date()

        if(payload?.updatedAt){
            const dateMongo =  new Intl.DateTimeFormat('es-MX', { day: "2-digit" }).format(dateUpdate) 
            const dateHoy =  new Intl.DateTimeFormat('es-MX', { day: "2-digit" }).format(hoy)
            return countDays.format(dateMongo - dateHoy, 'day')

        }else{
            // para que no de error
            return new Date()
        }
    })

    // TODO cambiar por from hook y validation

    const [ error, setError ] = useState(undefined)

    const [ ubicacion, setUbicacion ] = useState(payload.ubicacion)
    const handledUbicacion = ( e ) => {
        setUbicacion(e.target.value)
    }

    const [ almacen, setAlmacen ] = useState(payload.almacen)
    const handeledAlmacen = ( e ) => {
        setAlmacen(e.target.value)
    }

    const [ suma, setSuma ] = useState(0)
    const handledSuma = (e) => {
        if(e.target.value < 0 ){
            setError({ error: true, suma: 'El número debe ser mayor a CERO'})
        }else {
            setSuma(e.target.value)
        }
    }

    const handledSaveBtn = () => {
        if(!ubicacion && !almacen ){
            setError({ error: true, ubicacion: 'proporcione la ubicación y el almacén'})
        }else{
            console.log('algun momento', ubicacion, almacen, suma )
        }
    }

    
    return(
        <div>
        <CForm>
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
                    <CInput id="ean" value={payload.ean} disabled />
                    </CFormGroup>
                    <CFormGroup>
                    <CLabel htmlFor="inventario col">Inventario</CLabel>
                    <small 
                        id="passwordHelpBlock" 
                        className="form-text text-muted">
                        <div className="conteo">{`Ultimo conteo: ${payload.inventario} piezas ${dateMongo}`}</div>
                        </small>
                    <CInput 
                        type="number" 
                        id="sumaInv" 
                        className={classNames('col-5', { 'form-control is-invalid' : error?.suma  })} 
                        value={suma} 
                        onChange={handledSuma}/>
                    { error?.suma && <p>{error.suma} </p>}
                    </CFormGroup>
                    <CFormGroup>
                    <CLabel htmlFor="ubicacion">Ubicación</CLabel>
                    <CInput id="ubicacion" value={ubicacion} onChange={handledUbicacion} />
                    </CFormGroup>
                    <CFormGroup row className="my-0">
                    <CCol col="12">
                        <CFormGroup>
                        <CLabel htmlFor="almacen">Almacén</CLabel>
                        <CInput id="almacen" value={almacen} onChange={handeledAlmacen}/>
                        </CFormGroup>
                    </CCol>
                    </CFormGroup>
                    </CCardBody>
                    {/* </CCard> */}
                    </CCol>
            </CModalBody>
            <CModalFooter className="justify-content-center">
            <CButton className="btn-danger" onClick={handledSaveBtn}>Guardar</CButton>
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