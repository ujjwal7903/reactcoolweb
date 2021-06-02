import React from 'react';
import Temp from "./Temp";
import HomePageMentorData from "./HomePageMentorData";

const Temp1 = () => {
    return (
        <>
            { HomePageMentorData.map((val) => {
                return (
                    <Temp
                        key={val.id}                    //// it's name should be only key
                        imgsrc={val.imgsrc}
                        imgsrctext={val.imgsrctext}
                        text_detail={val.text_detail}
                        profile={val.profile}
                        para={val.para}
                    />
                );
            })}
        </>
    );
}

export default Temp1;