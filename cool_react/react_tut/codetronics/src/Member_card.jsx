import React from 'react';
import MemberCardMap from "./MemberCardMap";
import MemberData from "./MemberData";

const Member_card = () => {
    return (
        <>
            { MemberData.map((val) => {
                return (
                    <MemberCardMap
                        memberName={val.memberName}
                        memberDescription={val.memberDescription}
                        memberImage={val.memberImage}
                        codeforcesLink={val.codeforcesLink}
                        codechefLink={val.codechefLink}
                        leetcode={val.leetcode}
                        hackerrank={val.hackerrank}
                        linkedIn={val.linkedIn}
                    />
                );
            })}
        </>
    );
}

export default Member_card;