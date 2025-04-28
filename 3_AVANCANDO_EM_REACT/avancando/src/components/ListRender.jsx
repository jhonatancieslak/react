import { useState } from "react";

const ListRender = () => {
    const [list] = useState([
        "Almoxarifado Geral", 
        "Almoxarifado Fábrica", 
        "Almoxarifado em Processo", 
        "Almoxarifado Montagem Interna", 
        "Almoxarifado Expedição"
    ]);

    const [users, setUsers] = useState([
        {id: 1, name: "Almoxarifado", number: 1 },
        {id: 2, name: "Almoxarifado", number: 2 },
        {id: 3, name: "Almoxarifado", number: 3 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 3) + 1; // Generates 1, 2, or 3
        
        setUsers((prevUsers) => 
            prevUsers.filter((user) => randomNumber !== user.id) 
        );
    }

    return (
        <div>
            {/* List without dynamic properties */}
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* List with objects and unique keys */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.number.toString().padStart(2, '0')}
                    </li>
                ))}
            </ul>
            {/* Previous state example */}
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
};

export default ListRender;