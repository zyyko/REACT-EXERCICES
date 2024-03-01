import { UsersContext } from "./UsersApp"
import { useParams } from "react-router-dom"
import { useContext } from "react"

export default function UsersDelete() {
    const context = useContext(UsersContext)
    const params = useParams()
    console.log(params)

    const handleSubmit = () => {
        context.deleteUser({
            payload:{
                id : params.id
            }
        })
    } 
    return (
        <>
            <h1>Do you want to delete this user</h1>
            <div className="alert alert-danger" role="alert">
            <strong>danger</strong> Deletion is irreversible (you can't go back)
            </div>
            <button className="btn btn-danger" type="submit" onClick={handleSubmit}>DELETE</button>
        </>
    )
}