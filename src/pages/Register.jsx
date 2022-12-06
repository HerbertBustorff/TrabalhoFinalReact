import React, { useState } from "react";
import axios from "axios";
import '../styles/Register.css';

const Register = () => {
    const Rest = `http://127.0.0.1:8000/api/store`
    const [data, setData] = useState({
        name: '',
        matricule: '',
        noteone: '',
        notetwo: '',

    })

    const submit = (e) => {
        e.preventDefault();
        axios.post(Rest, {
            name: data.name,
            matricule: data.matricule,
            noteone: data.noteone,
            notetwo: data.notetwo,
        })
            .then(res => {
                console.log(res.data)
            })

        if (!data) {
            e.currentTarget.submit();
        }
    }

    const handle = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }

    return (
        <div className="content-form my-5">
            <form className="p-5" onSubmit={(e) => submit(e)}>
                <h4 className="name-input">
                    Cadastro de Aluno
                </h4>
                <div className="my-3">
                    <label className="name-input">
                        Nome
                    </label>
                    <input className="mt-2 p-2" onChange={(e) => handle(e)} id="name" value={data.name} type="text" />
                    {data['name'] === '' ? <span className="text-danger fw-bold">Campo Vazio</span> : ''}
                </div>
                <div className="my-3">
                    <label className="name-input">
                        Nota 1
                    </label>
                    <input className="mt-2 p-2" onChange={(e) => handle(e)} id="noteone" value={data.noteone} type="text" />
                    {data['noteone'] === '' ? <span className="text-danger fw-bold">Campo Vazio</span> : ''}
                </div>
                <div className="my-3">
                    <label className="name-input">
                        Nota 2
                    </label>
                    <input className="mt-2 p-2" onChange={(e) => handle(e)} id="notetwo" value={data.notetwo} type="text" />
                    {data['notetwo'] === '' ? <span className="text-danger fw-bold">Campo Vazio</span> : ''}
                </div>
                <div className="w-100 d-flex justify-content-center">
                    {data['name'] !== '' && data['noteone'] !== '' && data['notetwo'] !== '' ?
                        <div>
                            <button type="submit" className="btn-submit px-5 py-2">
                                Cadastrar
                            </button>
                        </div>
                        :
                        <div>
                            <button disabled className="btn-submit px-5 py-2">
                                <span className="text-danger">
                                    Preencha os campos
                                </span>
                            </button>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default Register;