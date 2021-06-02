import React from 'react';
import BlogCard from "./BlogCard";
import BlogData from "./BlogData";

const Blog_card = () => {
    return (
        <>
            { BlogData.map((val) => {
                return (
                    <BlogCard
                        memberName={val.memberName}
                        memberDescription={val.memberDescription}
                        memberImage={val.memberImage}
                        ilink={val.ilink}
                    />
                );
            })}
        </>
    );
}

export default Blog_card;