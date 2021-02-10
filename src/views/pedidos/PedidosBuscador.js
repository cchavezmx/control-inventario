import React, { Fragment } from 'react'
import {
    CButton,
    CForm, CInput
} from '@coreui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const PedidosBuscador = () => {
    return (
        <Fragment>
            <CForm className="d-flex justify-content-center">
                <CInput type="search" id='search' placeholder="Busca productos o marcas" className="col-8 col-sm-6 form-control-lg" />
                <CButton type="submit" className="btn-github"><FontAwesomeIcon icon={faSearch} size="1x" /></CButton>
            </CForm>
        </Fragment>
    )
}


export default PedidosBuscador