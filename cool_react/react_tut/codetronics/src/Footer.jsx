import React from "react";
import { NavLink } from "react-router-dom";
import web4 from "../src/logo/logo1.png";

const Footer = () => {
    return (
        <>
            <footer className="end_of_page">
                <div className="foot_part1 foot">
                    <h2>Some Important links</h2>
                    <NavLink to="/resource">Practice problem</NavLink>
                    <p>Practice problem from different website</p>
                    <div id="practicelinks">
                        <ul>
                            <li><NavLink to="https://codeforces.com/problemset" target="_blank">Codeforces</NavLink></li>
                            <li><NavLink to="https://www.codechef.com/problems/school/?itm_medium=navmenu&itm_campaign=problems"
                                target="_blank">Codechef</NavLink></li>
                            <li><NavLink to="https://atcoder.jp/" target="_blank">Atcoder</NavLink></li>
                            <li><NavLink to="https://leetcode.com/problemset/all/" target="_blank">Leetcode</NavLink></li>
                            <li><NavLink to="https://www.hackerrank.com/domains/algorithms?badge_type=problem-solving"
                                target="_blank">Hackerrank</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink to="https://www.spoj.com/problems/classical/" target="_blank">Spoj</NavLink></li>
                            <li><NavLink to="https://www.hackerearth.com/practice/" target="_blank">Hackerearth</NavLink></li>
                            <li><NavLink to="https://www.interviewbit.com/courses/programming/" target="_blank">Interviewbit</NavLink></li>
                            <li><NavLink to="https://www.geeksforgeeks.org/fundamentals-of-algorithms/" target="_blank">GFG</NavLink></li>
                            <li><NavLink to="https://cses.fi/problemset/list/" target="_blank">CSES</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="foot_part2 foot">
                    <div className="logo_img">
                        <h2>CODEtronics</h2>
                        <img src={web4} alt="" />
                    </div>
                </div>
                <div className="foot_part3 foot">
                    <h2 className="doubt_form">Send your doubts</h2>
                    <p>Click on the given link to send your doubt</p>
                    <div><NavLink to="https://forms.gle/So6mL4EMx1pvcWEU8" target="_blank" className="foot_btn">Click here</NavLink></div>
                </div>
            </footer>
            <div className="copy_right">
                <p className="copy_right_text">CODEtronics (c) Copyright 2018-2021</p>
            </div>
        </>
    );
}

export default Footer;