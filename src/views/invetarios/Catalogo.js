import React from 'react'
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

const imgInv = "https://www.gensetcomponents.com/WebRoot/Store/Shops/GeneratorParts/5AD4/5108/5A34/4881/86C2/AC11/0006/8D88/interruptor_magnetotermico_400amp_abb_breaker_web_price.jpg"

const Catalogo = ({ prodInventario }) => {

    // const { register, handleSubmit, control } = useForm();

    return(
        <CContainer fluid className="mt-2">


        {/* cabezera */}
        <CCard>
        <CCardHeader className="bg-info">
            {prodInventario.nombre}
        </CCardHeader>
        </CCard>

        <CCol className="d-flex justify-content-center mt-2 mb-5">
                <CButton className="btn-info ml-1">Modificar</CButton>
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
                    <CInput className="form-color form-control-lg col-6 col-sm-4 mb-2" value={prodInventario.inventario}></CInput>
                <CLabel>Ubicación</CLabel>
                    <CInput className="mb-2"></CInput>
                <CLabel>Almacén</CLabel>
                    <CInput className="mb-2"></CInput>
            </CCol>
        </CRow>
        <CRow>
            <CCol className="col-12 col-sm-6 mt-2 align-content-center">
            <CLabel>Código</CLabel>
                    <CInput className="mb-2" value={prodInventario.ean}></CInput>
            <CLabel>Alterno</CLabel>
                <CInput className="mb-2" value={prodInventario.alterno}></CInput>
            <CLabel>Nombre</CLabel>
                <CInput className="mb-2" value={prodInventario.nombre}></CInput>
            </CCol>
        </CRow>

        </CContainer>
    )
}


export default Catalogo