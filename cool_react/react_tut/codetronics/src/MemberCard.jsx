import React from "react";
import Member_card from './Member_card';

const MemberCard = () => {
    return (
        <>
            <section className="sec1">
                <div className="main_container">
                    <h3>CODEtronics Members</h3>
                    <div className="member_wrapper" id="member-wrapper-id" >
                        <Member_card />
                    </div>
                </div>
            </section>
        </>
    );
}

export default MemberCard;