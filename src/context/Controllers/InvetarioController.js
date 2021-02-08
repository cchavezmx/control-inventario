/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
})

export default {
    loadAllData: async() => {
        const response = await api.get('/productos')
        .then(res => res.data.productos)

        return response
    },
    queryText: async( _, event ) => {
        const querySearch = await api.get(`/search/?text=${event.query}`)
        .then(res => res.data.message)

        return querySearch
    },
    findByEan: async(_, event) => {
        const querySearch = await api.get(`/ean/${event.query}`)
        .then(res => res.data.message)

        return querySearch
    },
    findByAlterno: async(_, event) => {
        const querySearch = await api.get(`/alterno/${event.query}`)
        .then(res => res.data.message)

        return querySearch
    },
    update: async(_, event ) => {
        const { _id, data } = event
        const resp = await api.patch(`/update/${_id}`, data )
        .then(res => res )

        return resp 
    }, 
    search_ID: async(_, event ) => {
        
        const resp = await api.get(`/producto/${event.id}`)
        .then(res => res.data.message)
        
        return resp 
    }
}