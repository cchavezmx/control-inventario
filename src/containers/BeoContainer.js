import React from 'react'
import {
    CCol,
    CContainer, CLink, CRow,
} from '@coreui/react'

import { Switch, Route } from 'react-router-dom'

import CapturaInventario from './CaputraInventario'
import Catalogo from '../views/invetarios/Catalogo'
import BeoInvTabla from '../views/invetarios/BeoInvTabla'

// rutas
import SgoPedidos from './SgoPedidos'


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
            <CCol className="col-12 col-sm-6 text-justify">
                <h3>Bienvenido:</h3>
                <p>Este sitio cuenta con la aplicación de Captura de Inventario, con esta herramienta podemos:</p>
                <ul>
                    <li>llevar un seguimiento del conteo de productos de inventarios por unidad de negocio</li>
                    <li>Añadir: ubicación física y de almacén</li>
                    <li>Guardar fotografía del producto</li>
                    <li>Buscador por EAN, Codigo Alterno o descripción corta</li>
                    <li>Seguimiento de piezas contadas</li>
                </ul>
                    <CLink to="/catalogo/caputura" className="btn-ghost-info text--titulos rounded">Ir a la APP</CLink>

                <div className="w-100 mb-5"></div>
                <h3>En proceso:</h3>
                <p>Actualmente trabajo en el servicio de <span className="text--titulos">Catálogo</span>: que estará ligado con <span className="text--titulos">Seguimiento de pedidos de obra</span>, este módulo va de la mano con el costo general de proyecto, con la finalidad de poder saber el estatus de productos enviados, gasto de mano de obra, etc. </p>
                <p className="text--titulos">Mejoramiento de la app de inventario:</p>
                    <ul>
                        <li>Añadir fotografía directo desde la computadora o dispositivo movil</li>
                        <li>Seguimiento de conteo por usuario</li>
                    </ul> 
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

        {/* rutas  */}
        <Route path={`/pedidos`} render={(props) => <SgoPedidos {...props} />}/>
    </Switch>    
    
    </CContainer>
    )
}


export default BeoContainer