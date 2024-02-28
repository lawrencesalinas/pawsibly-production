import React from 'react'
import './css/LoadingSkeleton.css'

const LoadingSkeleton = () => {
    return (
        <div className="card-sitter">
            <div className='card-header animated-bg' id='header'>
            </div>
            <div className="card-content">
                <h3 className="card-title animated-bg animated-bg-text" id="card-title">
                </h3>
                <p className="card-excerpt" id="excerpt">
                    <span className="animated-bg animated-bg-text"></span>
                    <span className="animated-bg animated-bg-text"></span>
                    <span className="animated-bg animated-bg-text"></span>
                </p>
                <div className="author">
                    <div className="profile-img animated-bg" id="profile-img">
                    </div>
                    <div className="author-info">
                        <strong className="animated-bg animated-bg-text" id="name">
                        </strong>
                        <div className="ratinginfo animated-bg animated-bg-text">
                            <p className="reviewnum " >

                                <span className="animated-bg animated-bg-text"></span>
                            </p>
                            <p className="ratings animated-bg animated-bg-text" >
                                <span className="animated-bg animated-bg-text"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSkeleton
