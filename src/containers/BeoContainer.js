import React, { useState } from 'react'

import {
    CCol,
    CContainer,
    CCard,
    CCardHeader,
    CCardBody,
    CDataTable,
    CRow,
    CButton,
    CLink,
    CInput,
    CSelect
} from '@coreui/react'

import { Switch, Route } from 'react-router-dom'
import { useMachine } from '@xstate/react'
import { useInvetario } from '../context/useInventario'
import Catalogo from 'src/views/invetarios/Catalogo'

// import Catalogo from '../views/invetarios/Catalogo'
// import MongoCarga from '../context/MongoData'

const fields = ['ean','alterno', 'nombre', 'inventario', 'acciones']

const BeoContainer = ( props ) => {

    const [ queryText, setQueryText ] = useState(undefined)
    const [ selectValue, setSelectValue ] = useState('nombre')


    const [ prodInventario, setProdInventario ] = useState([])
    const [ state, send ] =useMachine(useInvetario)
    const { userDataSearch } = state.context
    const { match } = props

    // TODO: use effect para leer toda la base de datos con los productos
    // useEffect(() => {
    //     let done = false
    //     if(!done, match.isExact){
    //         send('LOAD_INVENTARIO')
    //         done = true
    //     }
    //     return () => done = false
    // },[])

    const handleInputChange = ( e ) => {
        setQueryText(e.target.value)
    }

    const handleSelectChange = ( e ) => {
        setSelectValue(e.target.value)
    }

    const handleSearchButton = () => {
        if(selectValue === 'nombre'){
            send('QUERY_TEXT', { query: queryText })
        }else if(selectValue === 'ean'){
            send('QUERY_EAN', { query: queryText })
        }else if(selectValue === 'alterno'){
            send('QUERY_ALTERNO', { query: queryText })
        }
    }

    return(
    <CContainer fluid>            
    
    <CRow className="row-cols-1 justify-content-center mb-3 mt-2 col-12">
                <CInput className="col-8 col-sm-6" placeholder="Buscar productos" id="search" onChange={handleInputChange} value={queryText}/>
                <CSelect className="custom-select-lg col-2 ml-1 d-none d-sm-flex" onChange={handleSelectChange} value={selectValue}>
                    <option value="nombre">Nombre</option>
                    <option value="ean">EAN</option>
                    <option value="alterno">Alterno</option>
                </CSelect>
                <CButton className="col-sm-2 col-3 ml-1 btn-github" onClick={handleSearchButton} >Buscar</CButton>
    </CRow>
    
    {state.matches('idle') && (
        <div>
            <div className="text-lg-center">Puedes realizar tu busqueda por palabras clave, codigo Alterno o EAN</div>
        </div>)
        }

    {state.matches('querySuccess') && match.isExact ? (
    <CRow>
    <CCol>
        <CCard>
        <CCardHeader>
            {`Estos son los resultados para tu busqueda`}
            {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
        <CDataTable
            items={userDataSearch}
            fields={fields}
            itemsPerPage={10}
            pagination
            size="lg"
            scopedSlots = {{
            'acciones':
                (item)=>(
                <td>
                <CLink to={`/productos/${item._id}`} onClick={() => setProdInventario(item)} >
                <CButton className="btn-success">Ver</CButton> 
                </CLink>
                </td>
                )

            }}
        />
        </CCardBody>
        </CCard>
    </CCol>
    </CRow>
        ) : null }

    <Switch>
        <Route path={`/productos/:id`} render={(props) => <Catalogo {...props} prodInventario={prodInventario} /> } />
    </Switch>    
    
    </CContainer>
    )
}


export default BeoContainer