import React from 'react';
const Temp = (props) => {
    return (
        <>
            <div className="card">
                <div className="img">
                    <img src={props.imgsrc} alt={props.imgsrctext} />
                </div>
                <div className="top-text">
                    <div className="name">{props.text_detail}</div>
                    <p>{props.profile}</p>
                </div>
                <div className="bottom-text">
                    <div className="text">{props.para}</div>
                    <div className="btn">
                    </div>
                </div>
            </div>
        </>
    );
}
export default Temp;