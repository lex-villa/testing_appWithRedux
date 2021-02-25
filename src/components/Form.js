import React, { useState } from 'react';

export default function Form({ agregarFinanza }) {
    const [cant, setCant] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        agregarFinanza({ desc, cant: Number(cant) });
        setDesc("");
        setCant("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="column is-half">
                <div className="field">
                    <p className="control has-icons-left">
                        <input
                            className="input"
                            value={desc}
                            placeholder="Descripción"
                            onChange={e => setDesc(e.target.value)}
                            type="text"
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-align-justify" />
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input
                            className="input"
                            value={cant}
                            placeholder="Cantidad"
                            onChange={e => setCant(e.target.value)}
                            type="number"
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-money-bill-alt" />
                        </span>
                    </p>
                </div>
                <button className="button is-primary" type="submit" value="Enviar">
                    Enviar
                </button>
            </div>
        </form>
    );
}
