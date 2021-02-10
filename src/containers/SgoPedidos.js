import React, { Fragment } from 'react'
import PedidosBuscador from 'src/views/pedidos/PedidosBuscador'
import PedidosMenu from '../views/pedidos/PedidosMenu'

const SgoPedidos = () => {
    return(
        <Fragment>

            <div className="rounded p-5 bg-twitter">
            <PedidosBuscador />
            </div>
            
            <PedidosMenu />
        </Fragment>
    )
}

export default SgoPedidos