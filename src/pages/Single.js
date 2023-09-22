import './Single.css';
import Navigation from '../components/Navigation';
import single from '../components/images/single.avif';
import blogu from '../components/images/blogu.avif';
import { FaRegComments, FaHeart } from "react-icons/fa";
import React, { useState } from 'react';

function Single() {

    const [expanded, setExpanded] = useState(false);
    const [comment, setComment] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    // comment function
    
    const handleExpand = () => {
        setExpanded(true);
    };

    const handleCancel = () => {
        setExpanded(false);
        setComment('');
    };

    const handleSubmit = () => {
        // Implement your comment submission logic here
        // You can send the 'comment' to your backend or update your state as needed.
        console.log('Submitted comment:', comment);

        // Reset the form
        setExpanded(false);
        setComment('');
    };

    // like function

    const handleClick = () => {
        if (likeCount < 10) {
          setLikeCount(likeCount + 1);
          setIsClicked(true);
        } else {
          // Display a message or handle when the like count reaches 10.
        }
      };
    
      const iconColor = isClicked ? 'red' : 'black';



















    return (
        <div>
            <Navigation />
            <div className="container">
                <div class="row">
                    <div class="col-8 mt-4 single-right-side">
                        <div className='container-xxl singe-right-side-inner'>
                            <img src={single} alt="single" />
                            <div>
                                <div className='d-flex blogu gap-2 mb-3'>
                                    <img src={blogu} alt="blogu" className='single-user' />
                                    <div className='noelcserepy d-block mt-3'>
                                        <span class="d-block fw-medium">Noel Cserepy <small className="fw-lighter ms-2">a day ago</small></span>
                                        <span class="d-block text-secondary">Noel.noelcserepy.com</span>

                                    </div>
                                </div>
                                <h5>How I Reduced Onboarding Time By 90% With Document Scanning</h5>
                                <p className='text-secondary'>The Problem CoverCraft is a web app that writes customized cover letters using AI. With this project, I am trying to stretch...</p>
                                <div className='d-flex gap-4'>
                                    <p><FaRegComments className='fs-4' /><span className='fw-medium m-2 discuss-icon'>Discuss</span>
                                        . 25 likes . 113 reads</p>
                                </div>



                                <div>
                                    {expanded ? (
                                        <div className='comment-border'>
                                            <div>
                                                <small className='container-xxl text-secondary fw-medium'>Markdown supported</small>
                                                <textarea
                                                    className='textarea-comment'
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)}
                                                />
                                                <br />
                                                <div className='d-flex justify-content-between container-xxl'>
                                                    <p><span className='code-conduct'>Code of conduct </span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                                                    </svg></p>
                                                    <div className='cancel-comment'>
                                                        <button onClick={handleSubmit}>Cancel</button>
                                                        <button onClick={handleCancel}>Comment</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <button className='add-comment text-start container-xxl' onClick={handleExpand}>
                                            <img src={blogu} alt="blogu" className='single-user-comment' />
                                            Add a thoughtful Comment
                                        </button>
                                    )}
                                </div>

                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <p>2 Comments</p>
                                        <p>Top comments</p>
                                    </div>
                                    <div className='d-flex blogu gap-2'>
                                        <img src={blogu} alt="blogu" className='single-user' />
                                        <div className='noelcserepy d-block mt-3'>
                                            <span class="d-block fw-medium">Noel Cserepy <small className="fw-lighter ms-2">Sept 21, 2023</small></span>

                                        </div>

                                    </div>
                                    <p className='main-comment text-secondary fw-medium'>Can you expand on how O(log n) compares to other time complexities like O(n) or O(n^2) in terms of efficiency, and which is best for which types of problems? I think this can help a lot of beginner developers compare all options and gain a bit more insight.</p>

                                    <p className='main-comment gap-3 text-secondary fw-medium' onClick={handleClick}>
                                        <FaHeart color={iconColor} className='fs-5' /> {likeCount} . <small>Reply</small>
                                    </p>

                                </div>

                            </div>


                        </div>

                    </div>
                    <div class="col-4 mt-4 ms-4">
                        <div className='single-left-side'>
                       <div className='text-center'>
                        
                       <img src={blogu} alt="blogu" className='single-left-profile mt-3' />
                        <h5>Tiger Abrodi</h5>
                        <p>Obsessed with crafting software.</p>
                        <div className='mb-3'>
                            <button>Follow</button>
                            <button>View Blog</button>
                        </div>
                       </div>






                        </div>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </div>
                </div>












            </div>

        </div>
    )
}

export default Single;