<CForm>

<CCol className="d-flex col-10 justify-content-center">
    <CFormGroup>
    <CLabel htmlFor="image-upload">
    <CImg className="img-thumbnail custom--inv--img col-6" src={imgInv} alt="muesta de producto"/>
    </CLabel>
    <CInput type="file" className="image-upload" id="image-upload" />
    </CFormGroup>
</CCol>
<CCol>

<CFormGroup>
    <CLabel>Codigo</CLabel>
    <Controller 
    name="codigo"
    control={ control }
        render={({ onChange, value }) => 
        <CInput 
            className="form-control-lg mb-1"
            disabled="true" 
            type="text" 
            id="codigo" 
            placeholder="Codigo"
            name="codigo" 
            onChange={onChange}
            value={value}
            />    
        }
    />
</CFormGroup>

<CFormGroup>
    <CLabel>Codigo Alterno</CLabel>
    <Controller 
    name="codigo"
    control={ control }
        render={({ onChange, value }) => 
        <CInput 
            className="form-control-lg mb-1"
            disabled="true" 
            type="text" 
            id="codigo" 
            placeholder="Codigo"
            name="codigo" 
            onChange={onChange}
            value={value}
            />    
        }
    />
</CFormGroup>
<CFormGroup>
    <CLabel>Nombre</CLabel>
    <Controller 
    name="codigo"
    control={ control }
        render={({ onChange, value }) => 
        <CInput 
            className="form-control-lg mb-1"
            disabled="true" 
            type="text" 
            id="codigo" 
            placeholder="Codigo"
            name="codigo" 
            onChange={onChange}
            value={value}
            />    
        }
    />
</CFormGroup>

<CFormGroup>
    <CLabel>Existencias</CLabel>
    <Controller 
    name="codigo"
    control={ control }
        render={({ onChange, value }) => 
        <CInput 
            className="form-control-lg mb-1"
            disabled="true" 
            type="text" 
            id="codigo" 
            placeholder="Codigo"
            name="codigo" 
            onChange={onChange}
            value={value}
            />    
        }
    />
</CFormGroup>

<CFormGroup>
    <CTextarea className="form-control-lg mb-1" disabled="true" type="text" id="error" placeholder="Comentarios" name="error" />
</CFormGroup>
</CCol>

<CCol className="d-flex justify-content-center mb-5">
    <CButton className="btn-info ml-1">Modificar</CButton>
    <CButton className="btn-success ml-1">Inventario</CButton>
    <CButton className="btn-warning ml-1">Añadir</CButton>
</CCol>
</ CForm>