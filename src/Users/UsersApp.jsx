import { createContext, useState } from "react";
import UsersTable from "./UsersTable";
import UsersAdd from "./UsersAdd";
import UsersLayout from "./UsersLayout";

export const UsersContext = createContext({
    users:[],
    lastId : 0, 
    addUser : () => null,
    updateUser : () => null,
    deleteUser : () => null,
})

export default function UsersApp () {   

    const [users, setUsers] = useState([])
    const [lastId, setLastId] = useState(0);

    const addUser = (data) => {
        alert("ok")
        setUsers(prevState => [...prevState, data.payload])
        setLastId(prevState => prevState + 1)
        window.history.back()

    }

    const deleteUser = (data) => {
         setUsers(prevState => prevState.filter(user => user.id !== parseInt(data.payload.id)))
            window.history.back()

    }

    const updateUser = (data) => {
        const {id, ...rest} = data.payload
        console.log(id, rest)
        setUsers(prevState => prevState.map(user => {
            if(user.id === id) {
                return {id : user.id , ...rest}
            }
            
            return user
        }))

        window.history.back()

    }

    return (
        <>  
            <UsersContext.Provider value={{
                users : users,
                lastId : lastId,
                addUser : addUser,
                updateUser : updateUser,
                deleteUser : deleteUser
            }}>
                <UsersLayout />
            </UsersContext.Provider>
        </>
    )
}