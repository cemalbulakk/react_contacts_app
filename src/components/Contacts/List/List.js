import React from "react";
import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>İsim</th>
            <th>Telefon</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, i) => (
            <tr key={i}>
              <td>{item.fullname}</td>
              <td>{item.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Total record: {filtered.length}</p>
    </div>
  );
}

export default List;
