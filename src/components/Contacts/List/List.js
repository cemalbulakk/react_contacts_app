import React from "react";

function List({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map((item, i) => (
          <li key={i}>{item.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
