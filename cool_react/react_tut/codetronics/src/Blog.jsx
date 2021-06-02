import React from "react";
import Middle_logo from "./Middle_logo";
import Blog_card from './Blog_card';

const Blog = () => {
    return (
        <>
            <div className="banner_blog"></div>
            <Middle_logo />
            <h2 className="middle_logo_text">Interview Experiences</h2>
            <div className="blog-body">
                <Blog_card />
            </div>
        </>
    );
}

export default Blog;