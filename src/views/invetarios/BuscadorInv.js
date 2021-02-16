import React, { Fragment, useState } from 'react'
import { 
    CRow, 
    CInput,
    CSelect,
    CLink
} from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// TODO: agregar un validador al no tener informacion en el input

const BuscadorInv = () => {

    const [ queryText, setQueryText ] = useState(undefined)
    const [ selectValue, setSelectValue ] = useState('nombre')

    const handleInputChange = ( e ) => {
        setQueryText(e.target.value)
    }

    const handleSelectChange = ( e ) => {
        setSelectValue(e.target.value)
    }


    return(
    <Fragment>
    <CRow className="row-cols-1 justify-content-center mb-3 mt-2 col-12">
        <CInput className="col-8 col-sm-6" placeholder="Buscar productos, ejemplo: interruptor, clema, cable..." id="search" onChange={handleInputChange} value={queryText}/>
        <CSelect className="custom-select-lg col-2 ml-1 d-none d-sm-flex" onChange={handleSelectChange} value={selectValue}>
            <option value="nombre">Nombre</option>
            <option value="ean">EAN</option>
            <option value="alterno">Alterno</option>
        </CSelect>
        <CLink to={`/inv/search/${selectValue}/${queryText}`} className="col-sm-1 col-2 btn-github ml-1 p-2 text-center rounded">
            <FontAwesomeIcon icon={faSearch} size="1x" />
        </CLink>
    </CRow>
        </Fragment>
    )
}

export default BuscadorInv