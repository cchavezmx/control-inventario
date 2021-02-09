import React, { Fragment, useEffect } from 'react'

import {
    CCard,
    CCardHeader,
    CCardBody,
    CDataTable,
    CLink,
    CButton,
} from '@coreui/react'

import { useMachine } from '@xstate/react'
import { useInvetario } from '../../context/useInventario'

// componentes
import BuscadorInv from '../invetarios/BuscadorInv'

const fields = ['ean','alterno', 'nombre', 'inventario', 'acciones']

const BeoInvTabla = ( props ) => {


    const { selectValue, queryText, slug  } = props.match.params
    const [ state, send ] =useMachine(useInvetario)
    const { userDataSearch } = state.context

    useEffect(() => {
        if(selectValue === 'nombre'){
            send('QUERY_TEXT', { query: queryText })
        }else if(selectValue === 'ean'){
            send('QUERY_EAN', { query: queryText })
        }else if(selectValue === 'alterno'){
            send('QUERY_ALTERNO', { query: queryText })
        }else if(slug === 'lerma' || slug === '1225' || slug === 'codi' || slug === 'mediatension' ){
            send('QUERY_TEXT', { query: 'zapata' })
        }
    },[queryText, send, selectValue, slug])

    
    return(
        <Fragment>
            <BuscadorInv />
        <CCard>
            <CCardHeader>
                { state.matches('query_Text') && <span>Estamos preparando tu buqueda</span>}
            </CCardHeader>

            { state.matches('querySuccess') && 
            <>
            <div className="p-2">
            <CButton className="btn-ghost-info" onClick={() => props.history.goBack()}>
            <h5>Regresar</h5>
            </CButton>
            </div>
            <CCardBody>
            <CDataTable
                items={userDataSearch}
                fields={fields}
                itemsPerPage={10}
                pagination
                size="lg"
                scopedSlots = {{
                'acciones':
                    (item)=>(
                    <td>
                    <CLink to={`/producto/${ item._id }`} >
                    <CButton className="btn-success">Ver</CButton> 
                    </CLink>
                    </td>
                    )

                }}
            />
            </CCardBody>
            </>}
        </CCard>
        </Fragment>
    )
}

export default BeoInvTabla