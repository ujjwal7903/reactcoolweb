import React from "react";
import Middle_logo from "./Middle_logo";
import Resource_accordion from "./Resource_accordion";
import * as topics from './ResourceData';

const Resource = () => {
    return (
        <>
            <div class="banner_resource"></div>
            <Middle_logo />
            <h1 className="rsrc">Resources</h1>
            <Resource_accordion />
        </>
    );
}

export default Resource;