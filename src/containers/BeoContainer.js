import React from 'react'
import {
    CContainer,
} from '@coreui/react'

import { Switch, Route } from 'react-router-dom'

import CapturaInventario from './CaputraInventario'
import Catalogo from 'src/views/invetarios/Catalogo'


const BeoContainer = ({ match }) => {

    return(
    <CContainer fluid>            
    
    {/* agregar un componente donde se vean los ultimos movimientos de inventario */}
    { match.isExact && <h1>BeoContainer Bienvenido</h1>}

    <Switch>
        <Route path={`/catalogo/caputura`} render={(props) => <CapturaInventario {...props}/> } />
        <Route path={`/producto/:id`} render={(props) => <Catalogo {...props} /> } />
    </Switch>    
    
    </CContainer>
    )
}


export default BeoContainer