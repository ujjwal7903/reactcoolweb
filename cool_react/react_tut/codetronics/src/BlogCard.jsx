import React from 'react';
import { NavLink } from "react-router-dom";

const BlogCard = (props) => {
    return (
        <>
            <div className="blog-with-left-img">
                <div className="left-side">
                    <div className="left-content">
                        <img src={props.memberImage} id="pic" alt={props.memberName} />
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-content" style={{width: '350px'}}>
                        <h3>{props.memberName}</h3>
                        <p>{props.memberDescription}</p>
                        <div className="blog_btn"><NavLink to={props.ilink} target="_blank" className="blog_btn0">click here</NavLink></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogCard;