import { useState } from "react";

const ListRender = () => {
    const [list] = useState([
        "Almoxarifado Geral", 
        "Almoxarifado Fábrica", 
        "Almoxarifado em Processo", 
        "Almoxarifado Montagem Interna", 
        "Almoxarifado Expedição"
    ]);

    const [users] = useState([
        {id: 1, name: "Almoxarifado", number: 1 },
        {id: 2, name: "Almoxarifado", number: 2 },
        {id: 3, name: "Almoxarifado", number: 3 },
    ]);

    return (
        <div>
            {/* Lista sem propriedades dinâmicas */}
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* Lista com objetos e keys únicas */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.number.toString().padStart(2, '0')}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListRender;