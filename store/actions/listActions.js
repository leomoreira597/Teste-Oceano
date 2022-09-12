import axios from "axios";


//const BASE_URL = 'http://localhost:8080/emplo'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export function getList(){
    const request = axios.get(`${BASE_URL}`)
    return{
        type: 'BUSCAR_A_LISTA',
        payload: request
    }
}
