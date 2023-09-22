import Navigation from '../components/Navigation';
import base from '../components/images/base.png';
import blogu from '../components/images/blogu.avif';
import noel from '../components/images/noel.avif';
import ayipic from '../components/images/ayipic.JPG'
import { IoCalendarOutline, IoPersonCircleOutline, IoReturnDownBackSharp, IoHeartOutline, IoPersonAdd, IoOpenOutline, IoAdd } from "react-icons/io5";
import {FaRegComments} from "react-icons/fa";
import './Blog.css';
import { Link } from 'react-router-dom';
function Blog() {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <div class="container text-center">
                <div class="row mt-5 gap-4">
                    <div className='col'>
                        <div class="col mb-3">
                            <div className='blog-container-right'>
                                <p className='mt-3 fw-bold'>Search with Rix- the dev search engine powered by Hashnode AI✨</p>
                                <div class="input-group mb-3 search_box">
                                    <div className='d-flex search_input_container'>
                                        <span class="input-group-text" id="basic-addon1">✨</span>
                                        <input type="text" class="form-control" placeholder="Ask your programming question..." aria-label="Ask your programming question..." aria-describedby="basic-addon1" />
                                        <span class="input-group-text" id="basic-addon2">Press <IoReturnDownBackSharp /> to search</span>
                                    </div>
                                    <div className='d-flex justify-content-evenly mt-4'>
                                        <li className="list-group-item">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
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
                                            </svg>Write an article
                                        </li>
                                        <li className="list-group-item">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                className='ms-3'
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-gear"
                                                viewBox="0 0 16 16">
                                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                            </svg>
                                            <span>Blog dashboard</span>
                                        </li>

                                        <li className="list-group-item">
                                            <svg fill="none" viewBox="0 0 20 20" width="20" height="20"><path stroke="currentColor" d="M2.5 7.84h4.375m10.625 0H6.875m0-4.585V7.84m5.208 8.882 2.903.016a2.5 2.5 0 0 0 2.514-2.501V5.756A2.5 2.5 0 0 0 15 3.255H5a2.5 2.5 0 0 0-2.5 2.501v8.488a2.5 2.5 0 0 0 2.508 2.501l1.867-.006 5.208-.017Z" stroke-linecap="round" stroke-width="1.25"></path></svg>
                                            Manage blog
                                        </li>


                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="col mb-3">
                            <div className='blog-container-right'>
                                <div className='d-flex post_box'>
                                    <img src={base} alt="base" />
                                    <div className='text-start ms-5'>
                                        <p className='fs-6 mt-2'><IoCalendarOutline className='personal-icon' />September 1-30 |  Ends in <strong className='stronge-color'>9d:17h:31m</strong></p>
                                        <h4>Outerbase Hackathon</h4>
                                        <p>Build apps with Outerbase and stand a chance to win up to $5k and amazing swag!</p>
                                        <div className='d-flex'><p><IoPersonCircleOutline className='personal-icon' />737 participating</p>
                                            <button>Learn more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg> </button>
                                        </div>
                                    </div>


                                </div>























                            </div>

                        </div>


                        <div class="col">
                            <div className='blog-container-right-main'>
                                <div className='d-flex blog-inner gap-2'>
                                    <div className='text-start ms-5 blog_text mt-3'>
                                        <div className='d-flex blogu gap-2 mb-3'>
                                            <img src={blogu} alt="blogu" className='blogu' />
                                            <div className='noelcserepy d-block'>
                                                
                                                <span class="d-block fw-medium">Noel Cserepy <small className="fw-lighter ms-2">a day ago</small></span>
                                                <span class="d-block text-secondary">Noel.noelcserepy.com</span>

                                            </div>
                                        </div>
                                        <h5>How I Reduced Onboarding Time By 90% With Document Scanning</h5>
                                        <p className='text-secondary'>The Problem CoverCraft is a web app that writes customized cover letters using AI. With this project, I am trying to stretch...</p>
                                        <div className='d-flex gap-4'>
                                            <p><FaRegComments className='fs-4'/> <Link to="/single"><span className='fw-medium m-2 discuss-icon'>Discuss</span></Link>
                                            . 25 likes . 113 reads</p>
                                        </div>
                                    </div>
                                    <div className='noel-img'>
                                        <img src={noel} alt="noel" />
                                    </div>



                                </div>



                            </div>

                        </div>


                    </div>










                    {/* blog footer side */}
                    <div className='col'>
                        <div className="col mb-3">
                            <div className='blog-container-left'>
                                <div className='blog-container-left-inner container-xxl'>
                                    <p className='mt-3 fw-bold fs-5 intro-hash'>Introducing Hashnode Pro</p>
                                    <p className='text-start'>Level up your publishing with our new suite of premium features</p>
                                    <div className='d-flex gap-4 blog-left-btn'>
                                        <button>Upgrade now</button>
                                        <button>Explore</button>
                                    </div>





                                </div>
                            </div>


                        </div>

                        <div className="col mb-3">
                            <div className='blog-container-left-l-two'>
                                <div className='left-inner container-xxl text-start'>
                                    <h4 className='fw-bold'>Trending Articles</h4>
                                    <h5>Python List Fundamentals: Syntax, Operations, and Examples</h5>
                                    <div className='d-flex gap-3 tread_text fs-6'>
                                        <p>ByteScrum Technolo...</p>
                                        <p>Pro</p>
                                        <p>454 reads</p>
                                    </div>
                                    <h5>Pointers in C (full guide)</h5>
                                    <div className='d-flex gap-3 tread_text fs-6'>
                                        <p>Tiger Abrodi</p>
                                        <p>Pro</p>
                                        <p>519 reads</p>
                                    </div>
                                    <h5>Tuples in Python</h5>
                                    <div className='d-flex gap-3 tread_text fs-6'>
                                        <p>ByteScrum Technolo...</p>
                                        <p>Pro</p>
                                        <p>211 reads</p>
                                    </div>
                                    <button>See more</button>
                                </div>
                            </div>

                        </div>



                        <div className="col mb-3">
                            <div className='blog-container-left-l-two'>
                                <div className='left-inner container text-start' id='top-commenter'>
                                    <h5 className='fw-bold text-center'>Top commenters this week</h5>
                                    <div className='d-flex mt-3 mb-3'>
                                        <div class="image-container">
                                            <img src={ayipic} alt="ayipic" />
                                            <div className="modal p-2">
                                                <div className='ms-3'>
                                                    <div className='d-flex mt-3'>
                                                        <img src={ayipic} alt="ayipic" />
                                                        <button className='fw-bolder'><IoAdd className='m-1 fs-4' />Follow</button>
                                                    </div>
                                                    <h4>Ariyibe Baseet. A</h4>
                                                    <p>Frontend Web Developer| Tech Support @TIIDELab | TechBroda</p>
                                                    <div className='d-flex'>
                                                        <p><b className=''>12</b>follower</p>
                                                        <p><b className='m-2'>12</b>following</p>
                                                    </div>
                                                    <p className='text-primary'>ariyibi-baseet.hashnode.dev</p>
                                                    <div>
                                                        <strong>Latest Article ✨</strong>
                                                        <div className='d-flex'>
                                                            <p className='fs-6'>21 Sept, 2023</p>
                                                            <strong className='ms-3'>#consistency</strong>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='ms-3 fw-medium'>Ariyibe Baseet</p>
                                        <p className='top-comm-user'><IoPersonAdd /></p>
                                    </div>


                                    <div className='d-flex mt-3 mb-3'>
                                        <img src={ayipic} alt="ayipic" />
                                        <p className='ms-3 fw-medium'>Ariyibe Baseet</p>
                                        <p className='top-comm-user'><IoPersonAdd /></p>
                                    </div>

                                    <div className='d-flex mt-3 mb-3'>
                                        <img src={ayipic} alt="ayipic" />
                                        <p className='ms-3 fw-medium'>Ariyibe Baseet</p>
                                        <p className='top-comm-user'><IoPersonAdd /></p>
                                    </div>

                                    <div className='d-flex mt-3 mb-3'>
                                        <img src={ayipic} alt="ayipic" />
                                        <p className='ms-3 fw-medium'>Ariyibe Baseet</p>
                                        <p className='top-comm-user'><IoPersonAdd /></p>
                                    </div>

                                </div>
                            </div>

                        </div>


                        <div className="col mb-3">
                            <div className='blog-container-left-l-two'>
                                <div className='left-inner container-xxl text-start' id='top-commenter'>
                                    <h4 className='fw-semibold mt-1 ms-2'>Bookmarks</h4>
                                    <p className='mt-4 mb-5 text-center'>Nothing here yet 👋</p>

                                </div>
                            </div>

                        </div>

                        <div className="col mb-3">
                            <div className='blog-container-left-l-two'>
                                <div className='left-inner container-xxl d-flex' id='team-blogs'>
                                    <h5 className='fw-bolder'>Team Blogs</h5>
                                    <small className='new-team m-2 p-1'>NEW</small>
                                    <p className='more_learn ms-4'>learn more <IoOpenOutline /></p>
                                </div>
                                <p className='text-body-secondary text-start ms-3'>
                                    An end-to-end blogging platform for devtools, engineering, and open-source teams.
                                </p>
                                <button>Create a team blog</button>
                            </div>

                        </div>



                        <div className="col mb-3">
                            <div className='blog-container-left-l-two' id='blog-last-footer'>
                                <div className='container-xxl text-start' id='blog-last-footer-inner'>
                                    <p className='fw-semibold mt-3 fs-6'>External links</p>
                                    <div className='d-flex justify-content-between text-body-secondary lh-1'>
                                        <p>Feature request</p>
                                        <p>Changelog</p>
                                    </div>
                                    <p>Hashnode APIs</p>
                                    <p className='fw-semibold mt-3 fs-6'>Company</p>
                                    <div className='d-flex justify-content-between text-body-secondary lh-1'>
                                        <p>About</p>
                                        <p>Service status</p>
                                    </div>
                                    <div className='d-flex justify-content-between text-body-secondary lh-1'>
                                        <p>Official blog</p>
                                        <p>press kit</p>
                                    </div>
                                    <div className='d-flex justify-content-between text-body-secondary lh-1'>
                                        <p>Support</p>
                                        <p> Careers</p>
                                    </div>
                                    <p>OSS ACK</p>
                                    <p className='fw-semibold mt-3 fs-6'>Connect with us</p>
                                    <div className='d-flex gap-3 container-xxl'>
                                        <p className='footer-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                        </svg></p>


                                        <p className='footer-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg></p>


                                        <p className='footer-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg></p>


                                        <p className='footer-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16">
                                            <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948.591.621.928 1.509 1.005 2.644.328.138.63.299.905.484 1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.217 6.217 0 0 0-1.528-.161Z" />
                                        </svg></p>
                                    </div>
                                    <hr />
                                    <div>
                                        <p>Privacy  ·  Terms  ·  © 2023 Hashnode</p>
                                    </div>
                                </div>
                            </div>

                        </div>

























                    </div>
                </div>













            </div>
        </div>
    )
}

export default Blog;