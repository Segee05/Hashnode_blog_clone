import './Backend.css'
import { Link } from 'react-router-dom';

function BackendSideBar(){
    return(
        <div>
             <div className='backend'>
                    <ul className='dashboard'>
                        <Link className="dashboard-links" to="/DashBoard">DashBoard</Link>
                        <Link className="dashboard-links" to="/CreateProduct">Create Product</Link>
                        <Link className="dashboard-links" to="/CreateUser">Create Users</Link>
                        <Link className="dashboard-links" to="/UsersAdmin">Users</Link>
                    </ul>
                </div>

        </div>
    );
}

export default BackendSideBar;