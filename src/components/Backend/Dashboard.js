import './Backend.css'
import { Link } from 'react-router-dom';
import { BsFillFileSpreadsheetFill, BsPersonCheckFill, BsCart4, BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import BackendSideBar from './BackendSideBar';
import { useEffect, useState } from "react";
import { MartContext } from '../contexts/MartContext'
import { useContext } from 'react'


function Dashboard() {
const [datas, setDatas] = useState([]);
const [products, setProducts] = useState([]);
const [users, setUsers] = useState([]);
// const [userlength, setUserlength] = useState([]);
const contextData = useContext(MartContext);

const {cart} = contextData;


// Getting from API
    const mapedproducts = datas.filter((data) => data.category === 'segee');
    const getDatas = () => {
        fetch("http://159.65.21.42:9000/products")
            .then((resp) => resp.json())
            .then((data) => {
            setDatas(data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };

    const totalProducts = mapedproducts.length;

    useEffect(() => {
        getDatas();
    }, []);

// Delete from API

  const deleteData = (dataId) => {
    fetch(`http://159.65.21.42:9000/product/${dataId}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
        if (response.ok) {
          setProducts(products.filter(data => data._id !== dataId));
          console.log('Product deleted.');
          alert("Product deleted.")
          
        } else {
          console.log('Error deleting product.');
        }
      })
      .catch(error => {
        console.log('Network error:', error);
      });
  };

//   Get total Users 
const getUsers = () => {
    // Fetch user data from the API
    fetch('http://159.65.21.42:9000/users')
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      }
      )
      .then((error) => console.log(error));
  }
  useEffect(() => {
    getUsers();
  }, [])


  // Calculate the total number of users
//   const totalUsers = users.length;



    return (
        <div>

            <div className='backend-container'>
                <BackendSideBar />
                <div>
                    <div className='report'>

                        <div className='total-product'>
                            <h1>Total Product</h1>
                            <h1>{totalProducts}</h1>
                            <BsFillFileSpreadsheetFill className='dash-icons' />


                        </div>
                        <div className='total-product'>
                            <h1>Total Users</h1>
                            <h1>{users.length}</h1>
                            <BsPersonCheckFill className='dash-icons' />



                        </div>
                        <div className='total-product'>
                            <h1>Cart</h1>
                            <h1>{cart.length}</h1>
                            <BsCart4 className='dash-icons' />

                        </div>

                    </div>

                    {/* table */}
                    <table>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>

                        {mapedproducts.map((data) => (
                            <tr key={data._id}>
                                <td>{data._id}</td>
                                <td>{data.name}</td>
                                <td>{data.category}</td>
                                <td>{data.description}</td>
                                <td>${data.price}</td>
                                <td>{data.quantity}</td>
                                <td><BsPencilSquare /></td>
                                <td onClick={() => deleteData(data._id)} >{<BsFillTrash3Fill />}</td>
                            </tr>
                        ))}

                    </table>




                </div>
            </div>




















        </div>
    )
}

export default Dashboard;