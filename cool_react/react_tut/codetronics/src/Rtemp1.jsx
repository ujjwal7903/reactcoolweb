import React from 'react';
import Rtemp from "./Rtemp";
import topic1 from './ResourceData';
import Resource_accordion from './Resource_accordion';

class List {
    constructor({
        itemText1,
        itemText2,
        link1,
        linkText
    }) {
        this.leftOne = this.createDiv({
            className: "item1",
            text: itemText1
        });
        this.leftTwo = this.createDiv({
            className: "item2",
            text: itemText2
        });
        this.leftItemSource = this.createDiv({
            className: "left-item",
            childElements: [this.leftOne, this.leftTwo]
        });
        this.l3 = this.createAttributeTag({
            href: link1,
            className: "btn0",
            text: linkText
        });
        this.rightThree = this.createDiv({
            className: "item3",
            childElements: [this.l3]
        });
        this.rightItemSource = this.createDiv({
            className: "right-item",
            childElements: [this.rightThree]
        });
        this.rowItemSource = this.createDiv({
            className: "row-item",
            childElements: [this.leftItemSource, this.rightItemSource]
        });
    }
    createAttributeTag({ href = "", target = "_blank", className = null, text }) {
        const tagDocument = document.createElement("a");
        tagDocument.href = href;
        tagDocument.target = target;
        tagDocument.className = className;
        const tagTextElement = document.createTextNode(text);
        tagDocument.appendChild(tagTextElement);
        return tagDocument;
    }
    createDiv({ className = null, text = "", childElements = [] }) {
        const divElement = document.createElement("div");
        divElement.innerHTML = text;
        if (className) divElement.className = className;
        childElements.forEach(element => {
            divElement.appendChild(element);
        });
        return divElement;
    }
    createRowCard() {
        return this.rowItemSource;
    }
}
// const rowItem1 = () => {
// topic1.map(list => {
//     const projectCard = new List({
//       itemText1: list.itemText1,
//       itemText2: list.itemText2,
//       link1: list.link1,
//       linkText: list.linkText
//     }).createRowCard();
//     document.getElementById("post-wrapper-id1").appendChild(projectCard);
//   }
// );
//   };
const Rtemp1 = () => {
    return (
        <>
            {/* {
                topic1.map(list => {
                    const projectCard = new List({
                        itemText1: list.itemText1,
                        itemText2: list.itemText2,
                        link1: list.link1,
                        linkText: list.linkText
                    }).createRowCard();
                    document.getElementById("post-wrapper-id1").appendChild(projectCard);
                }
                )
            } */}
            { topic1.map((val) => {
                return (
                    <Rtemp
                        const projectCard = new List({
                            itemText1: {val.itemText1}
                            itemText2: {val.itemText2}
                            link1
                        })
                        itemText1={val.itemText1}
                        itemText2={val.itemText2}
                        link1={val.link1}
                        linkText={val.linkText}
                    />
                );
            })}
        </>
    );
}

export default Rtemp1;