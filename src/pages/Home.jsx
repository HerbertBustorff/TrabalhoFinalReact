import React, { useState, useEffect } from "react";
import '../styles/Home.css';
import { BiSearch } from 'react-icons/bi';

const Home = () => {

    const [api, setApi] = useState([]);
    const [busca, setBusca] = useState([]);

    const Rest = `http://127.0.0.1:8000/api/Alunos`

    useEffect(() => {
        fetch(Rest)
            .then(res => res.json())
            .then(data => {
                setApi(data.data);
                 console.log(data);
                 console.log(data.data);
            })

        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="container">
                <div className="d-flex align-items-center py-2 px-3 my-5 input-controler">
                    <BiSearch
                        size={'30px'}
                    />
                    <input
                        className="px-4 py-1"
                        onChange={(e) => setBusca(e.target.value)}
                        value={busca}
                        type="text"
                        placeholder="Buscar Alunos..."
                    />
                </div>
                <div className="alunos-table">
                    <div>
                        <table className="w-100 tables">
                            <thead>
                                <tr className="text-center">
                                    <th className="thead-tables tables-size fw-bold">
                                        Nome
                                    </th>
                                    <th className="thead-tables tables-size fw-bold">
                                        Matricula
                                    </th>
                                    <th className="thead-tables tables-size fw-bold">
                                        Primera Nota
                                    </th>
                                    <th className="thead-tables tables-size fw-bold">
                                        Segunda Nota
                                    </th>
                                    <th className="thead-tables tables-size fw-bold">
                                        Media
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {api.filter(dados => dados.name.toLowerCase().includes(busca)).map(dados => {
                                    return (
                                        <tr>
                                            <td className="tables-size">
                                                <span className="container">
                                                    {dados.name = !null ? dados.name : 'Sem nome'}
                                                </span>
                                            </td>
                                            <td className="tables-size text-center">
                                                <span>
                                                    {dados.id = !null ? dados.id : 'Sem Matricula'}
                                                </span>
                                            </td>
                                            <td className="tables-size text-center">
                                                <span>
                                                    {dados.notaone = !null ? dados.notaone : 'Sem Nota'}
                                                </span>
                                            </td>
                                            <td className="tables-size text-center">
                                                <span>
                                                    {dados.notatwo = !null ? dados.notatwo : 'Sem Nota'}
                                                </span>
                                            </td>
                                            <td className="tables-size text-center">
                                                <div className="d-flex justify-content-center">
                                                    <span className="w-50">
                                                        {(parseInt(dados.notaone) + parseInt(dados.notatwo)) / 2}
                                                    </span>
                                                    <span className="w-50">
                                                        {(parseInt(dados.notaone) + parseInt(dados.notatwo)) / 2 < 6 ? '😢' : '😁'}
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;