import React from "react";

function Information({ tab = "description", tractor }) {
  return (
    <div>
      {tab === "description" && (
        <div className="text-left">
          {tractor.description.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <p className="md:text-base mb-2" key={index}>
                  {item.content}
                </p>
              );
            } else if (item.type === "list") {
              return (
                <ul className="list-disc ml-8 mt-2 mb-6" key={index}>
                  {item.content.map((item, index) => {
                    return (
                      <li className="ml-3" key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              );
            }
          })}
        </div>
      )}
      {tab === "leasing" && (
        <div className="text-left">
          {tractor.leasing.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <h4 className="md:text-base mb-2" key={index}>
                  {item.content}
                </h4>
              );
            } else if (item.type === "list") {
              return (
                <ul className="ml-8 mt-2 mb-6 list-decimal" key={index}>
                  {item.content.map((item, index) => {
                    return (
                      <li className="ml-3" key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              );
            }
          })}
        </div>
      )}
      {tab === "characteristics" && (
        <div className="md:columns-2">
          <table className="table-auto w-full ">
            <tbody className="">
              {tractor.characteristics.map((row, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? "bg-color_light_gray " : "bg-color_white"
                  }
                >
                  <td className="text-xs p-2 w-[70%] text-left md:text-base md:break-inside-avoid-column">
                    {row.column1}
                  </td>
                  <td className="text-xs p-2 text-left md:text-base md:break-inside-avoid-column">
                    {row.column2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {tab === "modifications" && (
        <div className="text-left">
          {tractor.modifications.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <p className="md:text-base mb-2" key={index}>
                  {item.content}
                </p>
              );
            } else if (item.type === "list") {
              return (
                <ul className="list-disc ml-8 mt-2 mb-6" key={index}>
                  {item.content.map((item, index) => {
                    return (
                      <li className="ml-3" key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default Information;
