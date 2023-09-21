import BackendSideBar from "./BackendSideBar";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { useEffect, useState } from "react";
import './Backend.css'

function UsersAdmin() {
    const [data, setData] = useState(null)
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('http://159.65.21.42:9000/users')
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [])
    // const totalUsers = data.length;

    // Delete from API

  const deleteUser = (dataId) => {
    fetch(`http://159.65.21.42:9000/user/${dataId}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
        if (response.ok) {
          setUser(users.filter(use => use._id !== dataId));
          console.log('User deleted.');
        } else {
          console.log('Error deleting user.');
        }
      })
      .catch(error => {
        console.log('Network error:', error);
      });
  };

    return (
        <div className="users-users">
            <BackendSideBar />
            <div>
                <h1>Users Data</h1><br /><br />
                <table className="users-table">
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        
                        {data && data.map((user) => {
                    return<tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td><BsPencilSquare /></td>
                            <td onClick={() => deleteUser(user._id)} >{<BsFillTrash3Fill />}</td>
                        </tr>
                         })}
                    </table>
              
            </div>

        </div>
    );
}

export default UsersAdmin;