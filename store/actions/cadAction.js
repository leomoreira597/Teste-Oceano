import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm } from "redux-form";
import Router from 'next/router'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export function cadPost(values) {
    return function (dispatch) {
        axios.post(`${BASE_URL}`, values)
            .then(resp => {
                toastr.success('Sucesso!!!!', 'Cadastro realizado com sucesso!!')
                dispatch([
                    Router.push('/list')
                ])
            })
            .catch(e => {
                toastr.error('Erro!!!!', 'Verifique os campos e tente novamente!!!')
                dispatch([
                    resetForm('form')
                ])
            })
    }
}