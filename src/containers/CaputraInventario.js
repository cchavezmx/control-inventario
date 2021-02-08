import React, { useState } from 'react'

import {
    CCol,
    CContainer,
    CRow,
    CInput,
    CSelect,
    CLink,
} from '@coreui/react'

import Card from '../views/Card'

const date = new Date()

// Componentes
const mapContainerInventarios = [
    {
        slug: 'lerma',
        title: 'Lerma',
        start: date.toDateString(),
        end: date.toDateString(),
        img: "/img/fachadaita.PNG"
    },
    {
        slug: '1225',
        title: '1225 - A',
        start: date.toDateString(),
        end: date.toDateString(),
        img: "/img/fachadaita.PNG"
    },  
    {
        slug: 'codi',
        title: 'Codi',
        start: date.toDateString(),
        end: date.toDateString(),
        img: "/img/fachadaita.PNG"
    },  
    {
        slug: 'mediatension',
        title: 'Media Tensión',
        start: date.toDateString(),
        end: date.toDateString(),
        img: "/img/fachadaita.PNG"
    }   
]


const CapturaInventario = ( props ) => {
    
    const { match } = props

    const [ queryText, setQueryText ] = useState(undefined)
    const [ selectValue, setSelectValue ] = useState('nombre')

    const handleInputChange = ( e ) => {
        setQueryText(e.target.value)
    }
    
    const handleSelectChange = ( e ) => {
        setSelectValue(e.target.value)
    }
    
    console.log(queryText)

    return(
    <CContainer fluid>

    { match.isExact  && 
    (
    <CRow className="row-cols-1 justify-content-center mb-3 mt-2 col-12">
                <CInput className="col-8 col-sm-6" placeholder="Buscar productos" id="search" onChange={handleInputChange} value={queryText}/>
                <CSelect className="custom-select-lg col-2 ml-1 d-none d-sm-flex" onChange={handleSelectChange} value={selectValue}>
                    <option value="nombre">Nombre</option>
                    <option value="ean">EAN</option>
                    <option value="alterno">Alterno</option>
                </CSelect>
                <CLink to={`/inventario/busqueda/${selectValue}/${queryText}`} className="col-sm-1 col-2 btn-github ml-1 text-center p-1 rounded">Buscar</CLink>
    </CRow>
    )}
    
    { match.isExact && 
    <CRow>       
        <CCol className="mb-3 mt-2 text-center">
        <h4>Progreso de captura por unidad de negocio</h4>
        </CCol>
        <div className="w-100"></div>
        {mapContainerInventarios.map((item, index) => <Card  key={`${item.title}${index}`} props={item} /> )}

    </CRow>
    }

    </CContainer>
    )
}


export default CapturaInventario