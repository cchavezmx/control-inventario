import React from 'react'
import {
    CContainer,
} from '@coreui/react'

import { Switch, Route } from 'react-router-dom'

import CapturaInventario from './CaputraInventario'
import Catalogo from '../views/invetarios/Catalogo'
import BeoInvTabla from '../views/invetarios/BeoInvTabla'


const BeoContainer = ({ match }) => {

    return(
    <CContainer fluid>            
    
    {/* agregar un componente donde se vean los ultimos movimientos de inventario */}
    { match.isExact && <h1>BeoContainer Bienvenido</h1>}

    <Switch>
        <Route path={`/catalogo/caputura`} render={(props) => <CapturaInventario {...props}/> } />
        <Route path={`/producto/:id`} render={(props) => <Catalogo {...props} /> } />
        <Route path={`/progreso/captura/:slug`} render={(props) => <BeoInvTabla {...props} />} />
        <Route path={`/inventario/busqueda/:selectValue/:queryText`} render={(props) => <BeoInvTabla {...props} />} />
    </Switch>    
    
    </CContainer>
    )
}


export default BeoContainer