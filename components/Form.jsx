import React, { Component } from "react";
import { reduxForm, Field } from "redux-form"

class Form extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <div className={`bg-slate-200 text-zinc-100 h-screen flex justify-center items-center`}>
                <form role="form" onSubmit={handleSubmit} className={`bg-slate-700 rounded-md p-2`}>
                    <p >Preencha as informações para realizar o cadastro:</p>
                    <div className={`flex flex-col items-center text-slate-700`}>

                        <Field name="title" component="input" placeholder="Insira seu titulo" className={`mt-2 rounded-md pl-2
                            h-8 w-60 bg-slate-200`} />

                        <Field name="body" component="input" type="text" placeholder="preencha o conteudo" className={`mt-2 rounded-md pl-2
                            h-8 w-60 bg-slate-200`} />

                        <Field name="userId" component="input" type="number" placeholder="Insira seu Id" className={`mt-2 rounded-md pl-2
                            h-8 w-60 bg-slate-200`} />

                        <button className=' h-10 w-28 bg-slate-400 flex justify-center items-center rounded-md mt-2 hover:cursor-pointer'>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({ form: 'form' })(Form)