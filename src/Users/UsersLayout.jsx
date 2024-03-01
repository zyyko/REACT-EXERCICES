import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import UsersTable from "./UsersTable";
import UsersAdd from "./UsersAdd";
import UsersEdit from "./UsersEdit";
import UsersDelete from "./UsersDelete";


export default function UsersLayout () {
    return (
        <>
        <BrowserRouter>
            <nav>
                <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to={'/'} className='nav-link'>Users list</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/user/create'} className='nav-link'>Add user</Link>
                </li>
                </ul>
            </nav>
            <Routes>
                <Route index element={<UsersTable />} />
                <Route path={'/user/create'} element={<UsersAdd />} />
                <Route path={'/user/:id/edit'} element={<UsersEdit />} />
                <Route path={'user/:id/delete'} element={<UsersDelete />}/>
            </Routes>
        </BrowserRouter>

        <Outlet />
        </>

    )
}