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
    queryText: async( context, event ) => {
        const querySearch = await api.get(`/search/?text=${event.query}`)
        .then(res => res.data.message)

        return querySearch
    }
}