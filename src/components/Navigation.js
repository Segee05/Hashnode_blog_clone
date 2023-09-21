// import React, { useState } from 'react';
import './Navigation.css'
import hashnode from "./images/hashnode.svg"
import { IoSearchOutline, IoPersonCircleSharp, IoNotificationsOutline } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" id="navBar_conta">
                <div className="container-fluid">
                    <div className="col d-flex" >
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link to="/">
                        <li><img src={hashnode} alt="hashnode" /></li>
                        </Link>

                    </div>
                    <div className="collapse navbar-collapse col " id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }} id='second_col_'>
                            <Link to="/blog">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">My Feed</a>
                            </li>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Explore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Bookmarks</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu text-center fw-normal lh-lg mt-3 me-4">
                                    <li>Hackathons</li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>Download App</li>
                                    <li>Logos $ media</li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">|</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Rix <small>NEW</small></a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex col" id='thrid_col_'>
                        <li className="nav-item write-nav-icon">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-search"
                                viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </li>
                        <li>
                            <button className='write-nav-icon'>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        // viewBox="0 0 20 20"
                                        width="50"
                                        height="20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            d="M12.77 3.897 7.587 9.078c-.344.344-.515.516-.659.708-.128.17-.238.353-.331.545-.105.216-.178.448-.324.911l-.763 2.413 2.413-.762c.463-.147.695-.22.911-.324.192-.093.375-.204.545-.332.193-.143.364-.315.708-.659l5.181-5.18m-2.5-2.5.981-.981c.34-.341.511-.512.695-.603a1.25 1.25 0 0 1 1.11 0c.184.091.354.262.695.603.34.34.511.51.602.695.174.35.174.76 0 1.11-.09.183-.261.354-.602.694l-.98.981m-2.5-2.5 2.5 2.5M16.666 17.5H3.333"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.25"
                                        />
                                    </svg>Write
                                </li>
                            </button>
                        </li>
                        <li><svg xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            class="bi bi-bell"
                            viewBox="0 0 16 16">

                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg><small className='notificantion-ring'>1</small></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <IoPersonCircleSharp className='nav_icons' /></a>
                            <ul className="dropdown-menu" id='drop-dowmnow'>
                                <li><IoPersonCircleSharp className='nav_icons' /></li>
                                <li><h4>Sign up or log in to your Hashnode account</h4></li>
                                <li>Takes only a few seconds</li><br />
                                <Link to="/contact">
                                <li><button>Sign up</button></li><br />
                                </Link>
                                <Link to="/login">
                                <li><button>Log in</button></li>
                                </Link>

                            </ul>
                        </li>
                    </div>
                </div>
            </nav>
            <div className='nav-line'></div>
        </div>
    );
}

export default Navigation;
