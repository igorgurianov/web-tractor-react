import React from "react";

function Information({ tab, tractor }) {
  return (
    <div>
      {tab === "description" && (
        <div className="text-left ">
          <h2 className="text-lg my-3 border-b-2 border-color_accent_yellow">
            Устройство {tractor.shortName}
          </h2>
          {tractor.description.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <p className="md:text-base mb-2 text-justify" key={index}>
                  {item.content}
                </p>
              );
            } else if (item.type === "list") {
              return (
                <ul className="list-disc md:ml-8 mt-2 mb-2" key={index}>
                  {item.content.map((item, index) => {
                    return (
                      <li className="ml-3" key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              );
            } else if (item.type === "subtitle") {
              return <h3 className="text-base mt-8 mb-2">{item.content}</h3>;
            } else if (item.type === "table") {
              return (
                <table className="table-auto w-full my-3">
                  <thead>
                    <tr>
                      <th>Марка двигателя</th>
                      <th>Мощность, л.с.</th>
                      <th>Производитель</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {item.content.map((row, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-color_light_gray "
                            : "bg-color_white"
                        }
                      >
                        <td className="text-s p-2 text-left md:text-base md:break-inside-avoid-column">
                          {row.column1}
                        </td>
                        <td className="text-s p-2 text-left md:text-base md:break-inside-avoid-column">
                          {row.column2}
                        </td>
                        <td className="text-s p-2 text-left md:text-base md:break-inside-avoid-column">
                          {row.column3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              );
            }
          })}
        </div>
      )}

      {tab === "fullDescription" && (
        <div className="text-left ">
          <h2 className="text-lg my-3 border-b-2 border-color_accent_yellow">
            описание {tractor.shortName}
          </h2>
          {tractor.fullDescription.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <p className="md:text-base mb-2 text-justify" key={index}>
                  {item.content}
                </p>
              );
            } else if (item.type === "list") {
              return (
                <ul className="list-disc md:ml-8 mt-2 mb-2" key={index}>
                  {item.content.map((item, index) => {
                    return (
                      <li className="ml-3" key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              );
            } else if (item.type === "subtitle") {
              return <h3 className="text-base mt-8 mb-2">{item.content}</h3>;
            } else if (item.type === "table") {
              return (
                <table className="table-auto w-full my-3">
                  <thead>
                    <tr>
                      <th>Марка двигателя</th>
                      <th>Мощность, л.с.</th>
                      <th>Производитель</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {item.content.map((row, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-color_light_gray "
                            : "bg-color_white"
                        }
                      >
                        <td className="text-s p-2 text-left md:text-base md:break-inside-avoid-column">
                          {row.column1}
                        </td>
                        <td className="text-s p-2 text-left md:text-base md:break-inside-avoid-column">
                          {row.column2}
                        </td>
                        <td className="text-s p-2 text-left md:text-base md:break-inside-avoid-column">
                          {row.column3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              );
            }
          })}
        </div>
      )}

      {tab === "leasing" && (
        <div className="text-left mt-8">
          <h2 className="text-lg my-3 border-b-2 border-color_accent_yellow">
            Купить {tractor.shortName} в лизинг
          </h2>
          {tractor.leasing.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <h4 className="md:text-base mb-2" key={index}>
                  {item.content}
                </h4>
              );
            } else if (item.type === "list") {
              return (
                <ul className="md:ml-8 mt-2 mb-6 list-decimal" key={index}>
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

      {tab === "advantages" && (
        <div className="text-left mt-8">
          <h2 className="text-lg my-3 border-b-2 border-color_accent_yellow">
            Преимущества
          </h2>
          {tractor.advantages.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <p className="md:text-base mb-2" key={index}>
                  {item.content}
                </p>
              );
            } else if (item.type === "list") {
              return (
                <ul className="md:ml-8 mt-2 mb-6" key={index}>
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

      {tab === "scope" && (
        <div className="text-left mt-8">
          <h2 className="text-lg my-3 border-b-2 border-color_accent_yellow">
            Сфера применения
          </h2>
          {tractor.scope.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <h4 className="md:text-base mb-2" key={index}>
                  {item.content}
                </h4>
              );
            } else if (item.type === "list") {
              return (
                <ul className="md:ml-8 mt-2 mb-6" key={index}>
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
        <div className="mt-8">
          <h2 className="text-lg my-3 border-b-2 border-color_accent_yellow">
            Технические Характеристики {tractor.shortName}
          </h2>
          <div className="md:columns-2">
            <table className="table-auto w-full ">
              <tbody className="">
                {tractor.characteristics.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-color_light_gray "
                        : "bg-color_white"
                    }
                  >
                    <td className="text-s p-2 w-[70%] text-left md:text-base md:break-inside-avoid-column">
                      {row.column1}
                    </td>
                    <td className="text-s p-2 text-left md:text-base md:break-inside-avoid-column">
                      {row.column2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {tab === "modifications" && (
        <div className="text-left mt-8">
          <h2 className="text-lg my-3 border-b-2 border-color_accent_yellow">
            Модификации {tractor.shortName}
          </h2>
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
