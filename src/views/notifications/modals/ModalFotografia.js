import React, { Fragment, useEffect } from 'react'
import {
    CButton,
    CForm,
    CInput,
    CLabel,
    CModal,
    CModalBody,
    CModalFooter
} from '@coreui/react'

import { useMachine } from '@xstate/react'
import { useInvetario } from '../../../context/useInventario'

import { useForm, Controller } from 'react-hook-form'

const ModalFotografia = ( props ) => {

    const { modalFoto, setModalFoto, payload } = props

    const { handleSubmit, control } =useForm()
    const [ current, send ] = useMachine(useInvetario)

    const onSubmit = (e) => {
        send('UPDATE', { _id: payload._id, data: e })    
    }

    useEffect(() => {
        if(current.matches('querySuccess')){
            setModalFoto(false)
            window.location.reload()
        }
    })

    return(
        <Fragment>
            <CForm onSubmit={handleSubmit(onSubmit)}>
            <CModal
                show={modalFoto}
                onClose={setModalFoto}
            >
                <CModalBody>
                    <CLabel>Agrega el link de la foto</CLabel>
                    <Controller 
                        name="img"
                        control={control}
                        render={({ onChange, value }) => 
                        <CInput 
                            type="text" 
                            id="img"
                            value={value}
                            onChange={onChange}
                            placeholder="ejemplo: https:/sitio/foto.png.?sfvrsn=d395e17_1" />
                    }
                    />

                    
                </CModalBody>
                <CModalFooter>
                    <CButton className="btn-danger" type="submit">Guardar</CButton>
                    <CButton className="btn-dark" onClick={() => setModalFoto(false)}>Cerrar</CButton>
                </CModalFooter>
            </CModal>
            </CForm>
        </Fragment>
    )
}

export default ModalFotografia