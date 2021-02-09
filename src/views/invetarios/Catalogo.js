import React, { useState, useEffect } from 'react'
import { 
    CImg,
    CInput,
    // CFormGroup,
    // CForm,
    CRow,
    CCol,
    CContainer,
    CButton,
    CCard,
    CCardHeader,
    // CTextarea,
    // CSelect,
    CLabel
} from '@coreui/react'

// state 
import { useMachine } from '@xstate/react'
import { useHistory } from 'react-router-dom'
import { useInvetario } from '../../context/useInventario'

// import { useForm, Controller } from 'react-hook-form'
import ModalFromInventario from '../notifications/modals/ModalFormInventario'
import ModalFotografia from '../notifications/modals/ModalFotografia'


// TODO integrar la caputura de fotografia
const imgInv = "https://www.gensetcomponents.com/WebRoot/Store/Shops/GeneratorParts/5AD4/5108/5A34/4881/86C2/AC11/0006/8D88/interruptor_magnetotermico_400amp_abb_breaker_web_price.jpg"

const Catalogo = ({ match }) => {

    const [ done, setDone ] = useState(false)
    const [ state, send ] = useMachine(useInvetario)

    const handleImgChange = () =>{
        return(
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        </div>
        )
    }

    const [ modal, setModal ] = useState(false)    
    const [ modalFoto, setModalFoto ] = useState(false)    

    const { id } = match.params
    let history = useHistory()
    
    useEffect(() => {
        if(done === false ){
            send('SEARCH', { id: id })
        }
        return () => {
            setDone(true)
        }
    }, [done, id, send])

    const { prodInventario } = state.context

    return(

        <CContainer fluid className="mt-2">
        
        <CButton className="btn-ghost-info" onClick={() => history.goBack()}>
        <h5>Regresar</h5>
        </CButton>
        {state.matches('search') && <div>Cargando producto...</div>} 
        {/* cabezera */}
        {state.matches('search_success') && (
            <div>
        <CCard>

        </CCard>

        <CCol className="d-flex justify-content-center mt-2 mb-5">
                <CButton className="btn-danger ml-1" onClick={() => setModal(true)}>Modificar</CButton>
                <CButton className="btn-success ml-1">Inventario</CButton>
                <CButton className="btn-warning ml-1">Añadir</CButton>
        </CCol>

        <div>
            <CRow className="col-12 col-sm-12 align-items-center">
                {/* TODO hay que implementar la carga de la fotografia directo a la base de datos */}
                {/* <CCol className="col-6">
                    <CLabel htmlFor="image-upload">
                    <CImg className="img-fluid" src={imgInv} />
                    </CLabel>
                <CInput type="file" className="image-upload" id="image-upload" />    
                </CCol> */}
                <CCol className="">
                    <CImg onLoad={handleImgChange} className="img-fluid img-thumbnail" src={ prodInventario?.img ? prodInventario.img : imgInv } onClick={() => setModalFoto(true)}/>
                </CCol>
                <CCol className="col-12 col-sm-6">

                <CCardHeader className="bg-info">
                    { prodInventario.nombre }
                </CCardHeader>
                <CRow className="d-flex">
                    <CCol className="col-12 col-sm-6">
                        <CLabel>Inventario</CLabel>
                            <CInput className="form-color form-control-lg col-5 col-sm-10 mb-2" disabled={true} defaultValue={prodInventario.inventario}></CInput>
                        <CLabel>Ubicación</CLabel>
                            <CInput className="mb-2 col-12 from-color" disabled={true} defaultValue={prodInventario.ubicacion}></CInput>
                        <CLabel>Almacén</CLabel>
                            <CInput className="mb-2 col-12 form-control" disabled={true} defaultValue={prodInventario.almacen}></CInput>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol className="col-12 col-sm-12 mt-2 align-content-center">
                    <CLabel>Código</CLabel>
                            <CInput className="mb-2" readOnly={true} defaultValue={prodInventario.ean}></CInput>
                    <CLabel>Alterno</CLabel>
                        <CInput className="mb-2" readOnly={true} defaultValue={prodInventario.alterno}></CInput>
                    <CLabel>Nombre</CLabel>
                        <CInput className="mb-2" readOnly={true} defaultValue={prodInventario.nombre}></CInput>
                    </CCol>
                </CRow>
                </CCol>
            </CRow>
        </div>

        <ModalFromInventario modal={modal} setModal={setModal} payload={ prodInventario } /> 
        <ModalFotografia modalFoto={modalFoto} setModalFoto={setModalFoto} payload={prodInventario} />   

        </div>    
        )
        }

        </CContainer>
    )
}


export default Catalogo