import React, { useState } from 'react'
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

// import { useForm, Controller } from 'react-hook-form'
import ModalFromInventario from '../notifications/modals/ModalFormInventario'

const imgInv = "https://www.gensetcomponents.com/WebRoot/Store/Shops/GeneratorParts/5AD4/5108/5A34/4881/86C2/AC11/0006/8D88/interruptor_magnetotermico_400amp_abb_breaker_web_price.jpg"

const Catalogo = ({ prodInventario }) => {

    // const { register, handleSubmit, control } = useForm();
    const [ inventario, setInventario ] = useState(prodInventario.inventario)
    const [ ubicacion, setUbicacion ] = useState(prodInventario.ubicacion)
    const [ almacen, setAlmacen ] = useState(prodInventario.almacen)

    const [ modal, setModal ] = useState(false)    
    // TODO: añadir useState para cambiar codigo, nombre y alterno

    const handleInventario = ( e ) => {
        setInventario(e.target.vale)    
    }
    const handleUbicacion = ( e ) => {
        setUbicacion(e.target.value)
    }
    const handleAlmacen = ( e ) => {
        setAlmacen(e.target.value)
    }

    return(
        <CContainer fluid className="mt-2">

        <ModalFromInventario modal={modal} setModal={setModal} payload={ prodInventario } />

        {/* cabezera */}
        <CCard>
        <CCardHeader className="bg-info">
            {prodInventario.nombre}
        </CCardHeader>
        </CCard>

        <CCol className="d-flex justify-content-center mt-2 mb-5">
                <CButton className="btn-danger ml-1" onClick={() => setModal(true)}>Modificar</CButton>
                <CButton className="btn-success ml-1">Inventario</CButton>
                <CButton className="btn-warning ml-1">Añadir</CButton>
        </CCol>

        <CRow className="d-flex">
            <CCol className="col-6">
                <CLabel htmlFor="image-upload">
                <CImg className="img-fluid" src={imgInv} />
                </CLabel>
                <CInput type="file" className="image-upload" id="image-upload" />
            </CCol>
            <CCol className="col-6 col-sm-4">
                <CLabel>Inventario</CLabel>
                    <CInput className="form-color form-control-lg col-6 col-sm-4 mb-2" disabled={true} onChange={handleInventario} value={inventario}></CInput>
                <CLabel>Ubicación</CLabel>
                    <CInput className="mb-2 from-color" disabled={true} onChange={handleUbicacion} value={ubicacion}></CInput>
                <CLabel>Almacén</CLabel>
                    <CInput className="mb-2 form-control" disabled={true} onChange={handleAlmacen} value={almacen}></CInput>
            </CCol>
        </CRow>
        <CRow>
            <CCol className="col-12 col-sm-6 mt-2 align-content-center">
            <CLabel>Código</CLabel>
                    <CInput className="mb-2" defaultValue={prodInventario.ean}></CInput>
            <CLabel>Alterno</CLabel>
                <CInput className="mb-2" defaultValue={prodInventario.alterno}></CInput>
            <CLabel>Nombre</CLabel>
                <CInput className="mb-2" defaultValue={prodInventario.nombre}></CInput>
            </CCol>
        </CRow>

        </CContainer>
    )
}


export default Catalogo