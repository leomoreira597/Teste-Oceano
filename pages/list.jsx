import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList } from "../store/actions/listActions"
import React from "react";
import Button from "../components/Button";


class List extends Component {

    componentWillMount() {
        this.props.getList()


    }



    renderizarLista() {
        const rendList = this.props.list || []

        const titulosFiltrados = rendList.filter((titulo) => titulo.title.toLowerCase().includes(this.state.filtro.toLowerCase()))

        return titulosFiltrados.map(bl => (

            <div className='mt-2 p-2 text-xs md:text-base md:h-14 w-full truncate md:mt-3 rounded-md flex md:justify-start md:items-center text-zinc-100 bg-slate-700' key={bl.id}>
                <div className='md:ml-2'>Id: {bl.id}</div>
                <div className='ml-2 md:ml-4'>
                    Titulo: {bl.title}
                </div>
            </div>

        ))
    }



    constructor(props) {
        super(props);
        this.state = { filtro: '' }
    }

    render() {
        return (
            <div className='p-2  md:flex md:flex-col h-full min-h-screen w-full md:p-4 bg-slate-200  '>

                <span className=" ml-auto mr-auto text-4xl text-slate-600 border-slate-600 border-b-2 ">Adicione um item a sua lista ou faça uma busca rapida com nosso filtro</span>

                <div className={`flex justify-between items-center mt-8 `}>
                    <input type="text" placeholder="Pesquise por titulo" value={this.state.filtro} onChange={(e) => this.setState({ filtro: e.target.value })} className={`text-slate-900 w-64 bg-slate-300
                    h-10 pl-2 rounded-md`} />
                    <Button destiny="/cadastro" text="Adicionar" margin="0"/>
                </div>
                {this.renderizarLista()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list.list
    }
}

function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({ getList}, dispatch)
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(List)