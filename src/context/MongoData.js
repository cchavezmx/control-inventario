import React from 'react'
import axios from 'axios'


import dataCSV from './CARGA_mongo.csv'
const URL = 'http://localhost:3000/api/v1/docs'


const MongoData = () => {

    
    async function csvUpload(){
        
        const observ = []

        const response = await fetch(dataCSV)
        const data = await response.text()
        const table = data.split("\n").slice(2)

        table.forEach(row => {
            const col = row.split(",")
            const ean = col[0]
            const alterno = col[1]
            const nombre = col[2]
            const inventario = parseFloat(col[3])

            observ.push({ ean, alterno, nombre, inventario })
        })
        
        return { observ }
    }
    
    async function observer(){
        const data =  await csvUpload()
        await axios.post(URL, data.observ).then(() => console.log('succees data'))
    }

    csvUpload()
    observer()

    return (
        <div>
            Modulo Excel to MongoDB
        </div>
    )
}

export default MongoData


