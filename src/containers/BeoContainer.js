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
    
    { match.isExact && <h1>BeoContainer Bienvenido</h1>}


    <Switch>
        <Route path={`/catalogo/caputura`} render={(props) => <CapturaInventario {...props}/> } />
        <Route path={`/producto/:id`} render={(props) => <Catalogo {...props} /> } />
    </Switch>    
    
    </CContainer>
    )
}


export default BeoContainer