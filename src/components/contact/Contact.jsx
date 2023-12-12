import React from "react";

const data = [
  {
    name: "Selena",
    img: "https://purepng.com/public/uploads/large/51506280614zb1n2yuuih10rdcgf1a3kd9qtjwhtwoatreqs9uwfth5iwuo4hobi4x2wp8jqrhaqw0r30nliagtcp8dnbkna6jmhkhldx3cc8kn.png",
    alt: "avatar_img",
    tel: "+123 456 789",
    email: "sg@sogmez.com",
  },
  {
    name: "Justin",
    img: "https://purepng.com/public/uploads/large/a-famous-singer-justin-bieber-pqc.png",
    alt: "avatar_img",
    tel: "+123 456 789",
    email: "jg@jbieb.com",
  },
  {
    name: "Ariana",
    img: "https://purepng.com/public/uploads/large/a-famous-singer-ariana-grande-vmw.png",
    alt: "avatar_img",
    tel: "+123 456 789",
    email: "r@arians.com",
  },
];

const listItems = data.map((e) => {
  return (
    <>
      <div className="card">
        <h2>{e.name}</h2>
        <img src={e.img} alt={e.alt} />
        <p>{e.tel}</p>
        <p>{e.email}</p>
      </div>
    </>
  );
});

function Contact(props) {
  return (
    <>
      <div>{listItems}</div>
    </>
  );
}

export default Contact;
