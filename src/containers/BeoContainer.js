import React from 'react'
import {
    CCol,
    CContainer, CRow,
} from '@coreui/react'

import { Switch, Route } from 'react-router-dom'

import CapturaInventario from './CaputraInventario'
import Catalogo from '../views/invetarios/Catalogo'
import BeoInvTabla from '../views/invetarios/BeoInvTabla'


const BeoContainer = ({ match }) => {

    return(
    <CContainer fluid>            
    
    {/* agregar un componente donde se vean los ultimos movimientos de inventario */}
    { match.isExact && (
        <CRow className="d-flex justify-content-center">
            <CCol className="text--titulos text-center col-8 mb-3 text-info">
            <h1>Sistema de gestión de Obra</h1>
            </CCol>
            <div className="w-100"></div>
            <CCol className="col-5 text-justify">
                <h3>Bienvenido:</h3>
                <p>Este sitio cuenta con la aplicación de Captura de Inventario: con esta herramienta podemos llevar un seguimiento del conteo de productos de inventarios, por unidad de negocio, se puede añadir, ubicación física y de almacén, así como número total de piezas contadas, también tiene la capacidad de guardar una fotografía del producto que está siendo capturado</p>
                <h3>En proceso:</h3>
                <p>Actualmente trabajo en el servicio de <span className="text--titulos">Catálogo</span>: que estará ligado con <span className="text--titulos">Seguimiento de pedidos de obra</span>, este módulo va de la mano con el costo general de proyecto, con la finalidad de poder saber el estatus de productos enviados, gasto de mano de obra, etc. </p>
                <p>Programado en <span className="text--titulos">React</span> con <span className="text--titulos">MongoDB</span> y <span className="text--titulos">Boostrap de CoreUI</span></p>
                <p className="text-danger text-body text--titulos">contacto: cchavezmx@outlook.com</p>
            </CCol>
        </CRow>
    )}

    <Switch>
        <Route path={`/catalogo/caputura`} render={(props) => <CapturaInventario {...props}/> } />
        <Route path={`/producto/:id`} render={(props) => <Catalogo {...props} /> } />
        <Route path={`/progreso/captura/:slug`} render={(props) => <BeoInvTabla {...props} />} />
        <Route path={`/inv/search/:selectValue/:queryText`} render={(props) => <BeoInvTabla {...props} />} />
    </Switch>    
    
    </CContainer>
    )
}


export default BeoContainer