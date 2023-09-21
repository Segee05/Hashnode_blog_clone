import Navigation from '../components/Navigation';
import base from '../components/images/base.png';
import blogu from '../components/images/blogu.avif';
import noel from '../components/images/noel.avif'
import { IoCalendarOutline, IoPersonCircleOutline, IoReturnDownBackSharp, IoHeartOutline } from "react-icons/io5";
import './Blog.css';
function Blog() {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <div class="container text-center">
                <div class="row mt-5 gap-4">
                    <div class="col">
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

                    <div class="col">
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
                                    <div className='d-flex blogu'>
                                        <img src={blogu} alt="blogu" className='blogu' />
                                        <div className='noelcserepy'>
                                            <div className='d-flex'>
                                                <p>Noel Cserepy</p>
                                                <p className='ms-4'>a day ago</p>
                                            </div>
                                            <p>Noel.noelcserepy.com</p>

                                        </div>
                                    </div>
                                    <h5>How I Reduced Onboarding Time By 90% With Document Scanning</h5>
                                    <p>The Problem CoverCraft is a web app that writes customized cover letters using AI. With this project, I am trying to stretch...</p>
                                    <div className='d-flex gap-4'>
                                        <p><svg xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-heart"
                                            viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>12</p>
                                        <p className='gap-4'><svg fill="none"
                                            viewBox="0 0 20 20"
                                            width="20"
                                            height="20">
                                            <path stroke="currentColor" d="M13.333 8.75H7.5m3.333 2.917H7.5m-2.803-6.97A7.5 7.5 0 1 1 7.035 16.89a.885.885 0 0 0-.495-.064l-3.465.578a.417.417 0 0 1-.48-.48l.58-3.458a.886.886 0 0 0-.064-.496 7.503 7.503 0 0 1 1.586-8.274Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"></path></svg>12</p>
                                    </div>
                                </div>
                                <div className='noel-img'>
                                    <img src={noel} alt="noel" />
                                </div>



                            </div>



                        </div>

                    </div>

                    <div class="col">
                        <div className='blog-container-right-main'>
                            <div className='d-flex blog-inner gap-2'>
                                <div className='text-start ms-5 blog_text mt-3'>
                                    <div className='d-flex blogu'>
                                        <img src={blogu} alt="blogu" className='blogu' />
                                        <div className='noelcserepy'>
                                            <div className='d-flex'>
                                                <p>Noel Cserepy</p>
                                                <p className='ms-4'>a day ago</p>
                                            </div>
                                            <p>Noel.noelcserepy.com</p>

                                        </div>
                                    </div>
                                    <h5>How I Reduced Onboarding Time By 90% With Document Scanning</h5>
                                    <p>The Problem CoverCraft is a web app that writes customized cover letters using AI. With this project, I am trying to stretch...</p>
                                    <div className='d-flex gap-4'>
                                        <p><svg xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-heart"
                                            viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>12</p>
                                        <p className='gap-4'><svg fill="none"
                                            viewBox="0 0 20 20"
                                            width="20"
                                            height="20">
                                            <path stroke="currentColor" d="M13.333 8.75H7.5m3.333 2.917H7.5m-2.803-6.97A7.5 7.5 0 1 1 7.035 16.89a.885.885 0 0 0-.495-.064l-3.465.578a.417.417 0 0 1-.48-.48l.58-3.458a.886.886 0 0 0-.064-.496 7.503 7.503 0 0 1 1.586-8.274Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"></path></svg>12</p>
                                    </div>
                                </div>
                                <div className='noel-img'>
                                    <img src={noel} alt="noel" />
                                </div>



                            </div>



                        </div>

                    </div>










                    {/* blog footer side */}
                    <div className="col">
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

                    <div className="col">
                        <div className='blog-container-left'>
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
                </div>













            </div>
        </div>
    )
}

export default Blog;