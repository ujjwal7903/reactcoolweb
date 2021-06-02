import React from 'react';
import log1 from "../src/logo/codeforces.png";
import log2 from "../src/logo/codechef.png";
import log3 from "../src/logo/leetcode.png";
import log4 from "../src/logo/hackerrank.png";
import log5 from "../src/logo/linkedIn.png";

const MemberCardMap = (props) => {
    return (
        <>
            <div className="post">
                <img className="thumbnail" src={props.memberImage} alt="" />
                <div className="post_preview">
                    <h4 className="post_title">{props.memberName}</h4>
                    <p className="post_intro">{props.memberDescription}</p>
                </div>
                <div className="iconClass">
                    <a href={props.codeforcesLink} target="_blank"><img src={log1} alt="codeforces" /></a>
                    <a href={props.codechefLink} target="_blank"><img src={log2} alt="codechef" /></a>
                    <a href={props.leetcode} target="_blank"><img src={log3} alt="leetcode" /></a>
                    <a href={props.hackerrank} target="_blank"><img src={log4} alt="hackerrank" /></a>
                    <a href={props.linkeIn} target="_blank"><img src={log5} alt="linkedin" /></a>
                </div>
            </div>
        </>
    );
}
export default MemberCardMap;