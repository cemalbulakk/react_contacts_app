import React, { useEffect, useState } from "react";
import Form from "./Form/Form";
import List from "./List/List";
import "./style.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "cemal",
      phone_number: "987654321",
    },
    {
      fullname: "sümeyye",
      phone_number: "123456789",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
