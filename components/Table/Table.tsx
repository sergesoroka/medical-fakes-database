import React from "react";

import { tableData } from "../../data/tableData";

const Table = () => {
  const COLUMS = [
    {
      accessor: "id",
      label: "ID",
    },
    {
      accessor: "theme",
      label: "Тема",
    },
    {
      accessor: "subtheme",
      label: "Підтема",
    },
    {
      accessor: "discription",
      label: "Опис підтеми",
    },
    {
      accessor: "verdict",
      label: "Вердикт",
    },
    {
      accessor: "source",
      label: "ЗМІ / Джерело",
    },
    {
      accessor: "date",
      label: "Дата публікації",
    },
    {
      accessor: "archive_link",
      label: "Архівоване посилання",
    },
    {
      accessor: "country",
      label: "Країна джерела",
    },
    {
      accessor: "disproof",
      label: "Спростування",
    },
  ];
  return (
    <div>
    <table>
      <thead>
        {COLUMS.map((item) => (
          <th key={item.accessor}>{item.label}</th>
        ))}
      </thead>
      <tbody>{tableData.map((item, i) => <tr key={item.source}>
        <td>{i + 1}</td>
        <td>{item.theme}</td>
        <td>{item.subtheme}</td>
        <td>{item.discription}</td>
        <td>{item.verdict}</td>
        <td>{item.date}</td>
        <td></td>
        <td></td>
        <td>{item.country}</td>
        <td>{item.disproof}</td>
        
      </tr>)}</tbody>
    </table></div>
  );
};

export default Table;
