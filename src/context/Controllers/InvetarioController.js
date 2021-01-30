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
        console.log(data)
        const resp = await api.patch(`/update/${_id}`, data )
        .then(res => res )
        console.log(resp)
        return resp 

    }
}