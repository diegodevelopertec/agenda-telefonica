import React, { useEffect, useState } from "react";
import { ContactList,ContactType } from "./contactsContext";
import { ReactNode } from "react";
import {v4 as uuid} from 'uuid'
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


type Props={
    children:ReactNode
}

export const ContactsProvider=({children}:Props)=>{
    const [contacts,setContacts]=useState<ContactType[]>([])
   
   

    useEffect(()=>{
        setContacts([...contacts])
        
    },[])
    const  addContact=(data:ContactType)=>{
            const newContact: ContactType = {
                id:uuid(),
                email:data.email,
                name:data.name,
                tel:data.tel,
                photo:data.photo   
            };
            toast.success('contato criado!');
            setContacts([...contacts, newContact])
    }

    const  removeContact=(id:string | number)=>{
        setContacts(contacts.filter((contact) => contact.id !== id));
        toast.success('contato deletado!');
    }

    const updateContact=(id:string | number)=>{
        
          
    }

    return <ContactList.Provider value={{contacts,addContact,removeContact,updateContact}}>
        {children}
    </ContactList.Provider>
}