import React, { Fragment } from 'react'
import { CCard, CCardHeader, CCardBody, CImg, CCol, CCardLink } from '@coreui/react'

const Card = ({ props }) => {

    const { slug, title, start, img } = props

    return(
        <Fragment>
        <div className="col-12 col-sm-4 mb-3">
        <CCardLink to={`/progreso/captura/${slug}`} className="link--color">
        <CCard>
            <CCardHeader className="bg-twitter">
            <h6>{title}</h6>
            </CCardHeader>
            <CCardBody>
                <CImg src={img} alt="cosa" className="img-thumbnail" />
                <CCol className="mt-2">
                <h6>Inicio de conteo</h6>
                <span>{start}</span>
                <div className="w-100 mt-2"></div>
                </CCol>
                {/* TODO meter una barra de progreso */}
                <h6 className="textRedColor">Progreso</h6>
                <div class="progress mt-3">
                    <div class="progress-bar" role="progressbar" style={{ "width": "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>

            </CCardBody>
        </CCard>
        </CCardLink>
        </div>
        
        </Fragment>
    )
}

export default Card