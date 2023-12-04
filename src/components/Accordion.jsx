import React from "react";

export default function Accordion({ faqList }) {
  return (
    <div>
      <ul>
        {faqList.map((faqItem, index) => {
          return (
            <li>
              <button>{faqItem.q}</button>
              <div>{faqItem.a}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
