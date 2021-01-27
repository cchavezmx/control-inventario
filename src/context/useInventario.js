import { Machine, assign } from 'xstate'

import InventarioController from './Controllers/InvetarioController'

export const useInvetario = Machine({
    id:'invetario',
    initial: 'idle',
    context: {
        inventarioData: [],
        userDataSearch: []
    },
    states: {
        idle: {},
        load_inventario: {
            invoke: {
                src: InventarioController.loadAllData,
                onDone: {
                    target: 'success',
                    actions: assign({
                        inventarioData: (context, event)  => event.data
                    })
                }
                
            }
        },
        success: {},
        query_Text: {
            invoke: {
                src: InventarioController.queryText,
                onDone: {
                    target: 'querySuccess',
                    actions: assign({
                        userDataSearch: (context, event) => event.data
                    })
                }
            }
        },
        querySuccess: {}

    },
    on:{
        LOAD_INVENTARIO: 'load_inventario',
        QUERY_TEXT: 'query_Text'
    },
})