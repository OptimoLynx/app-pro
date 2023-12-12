import React from "react";
import Card from "./Card";
import contacts from "../../contact";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.img}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

function Contact(props) {
  return (
    <>
      <div>
        <h1 className="heading">Fan Favorite Singers</h1>
        {contacts.map(createCard)}
      </div>
    </>
  );
}

export default Contact;
