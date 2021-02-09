import React from 'react'

import {
    CCol,
    CContainer,
    CRow,
} from '@coreui/react'

import Card from '../views/Card'
import BuscadorInv from '../views/invetarios/BuscadorInv'

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

    return(
    <CContainer fluid>
    
    <div className="mb-5 mt-5">
    { match.isExact  && <BuscadorInv /> }
    </div>

    { match.isExact && 
    <CRow>       
        <CCol className="mb-3 mt-2 text-center">
        <div className="bg-vk">Progreso de captura por unidad de negocio</div>
        </CCol>
        <div className="w-100"></div>
        {mapContainerInventarios.map((item, index) => <Card  key={`/inv/search/captura/${item.title}${index}`} props={item} /> )}

    </CRow>
    }

    </CContainer>
    )
}


export default CapturaInventario