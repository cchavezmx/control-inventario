import React, { Fragment } from 'react'

import CIcon from '@coreui/icons-react'
import { CButton, CRow } from '@coreui/react'



const PedidosMenu = () => {
    return(
        <Fragment>
            <div className="mt-5 d-flex justify-content-center">
            <div className="pedidos--categorias col-5 col-sm-8">
                <CRow className="d-flex justify-content-sm-around">
                    
                    <CButton className="col-12 col-sm-4 btn-ghost-info align-items-center text-center">
                        <CIcon src="img/icon/cable.svg#cable" className="m-5" />
                        <p className="mb-3 font-xl">Material eléctrico</p>
                    </CButton>
                    <CButton className="col-12 col-sm-4 btn-ghost-info align-items-center text-center">
                        <CIcon src="img/icon/ferreteria.svg#ferreteria" className="m-5" />
                        <p className="mb-3 font-xl">Ferretería</p>
                    </CButton>
                    <CButton className="col-12 col-sm-4 btn-ghost-info align-items-center text-center">
                        <CIcon src="img/icon/herramienta.svg#herramienta" className="m-5" />
                        <p className="mb-3 font-xl">Herramientas</p>
                    </CButton>
                    <CButton className="col-12 col-sm-4 btn-ghost-info align-items-center text-center">
                        <CIcon src="img/icon/transporte.svg#transporte" className="m-5" />
                        <p className="mb-3 font-xl">Transporte</p>
                    </CButton>
                    <CButton className="col-12 col-sm-4 btn-ghost-info align-items-center text-center">
                        <CIcon src="img/icon/pintura.svg#pintura" className="m-5" />
                        <p className="mb-3 font-xl">Pintura</p>
                    </CButton>
                    <CButton className="col-12 col-sm-4 btn-ghost-info align-items-center text-center">
                        <CIcon src="img/icon/papeleria.svg#papeleria" className="m-5" />
                        <p className="mb-3 font-xl">Papelería</p>
                    </CButton>
                    
                    

                </CRow>
            </div>
            </div>
        </Fragment>
    )
}

export default PedidosMenu


// <CCol className="col-auto">Accesorios</CCol>
// <CCol className="col-auto">Luminarias</CCol>
// <CCol className="col-auto">Herramienta</CCol>
// <CCol className="col-auto">Transporte</CCol>
// <CCol className="col-auto">Pintura</CCol>
// <CCol className="col-auto">Papeleria</CCol>