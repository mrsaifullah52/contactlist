import React, { createContext, useState } from "react";

export const ContactData = createContext();

const ContactDataProvider = (props)=>{
  const [contacts,setContact]=useState([
    {id:1,name:"Saif", phone: "333 999 888",email:"Saif@gmail.com"},
    {id:2,name:"Shehroz", phone: "333 999 888",email:"Shehroz@gmail.com"},
    {id:3,name:"Hussnain", phone: "333 999 888",email:"Hussnain@gmail.com"},
  ]);

  const addContact=(contact)=>{ 
      setContact([...contacts, contact])
  }

  return(
    <>
        <ContactData.Provider value={{user: contacts,addContact}}>

          {props.children}
        </ContactData.Provider>
    </>
  )
}
export default ContactDataProvider;
