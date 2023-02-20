import React, { useContext,createContext } from "react";

export type ContactType={
    id:string | number,
    name:string,
    email:string,
    photo:string,
    tel:string

}


export type ContactContextType={
    contacts:ContactType[],
    addContact:( data:ContactType)=>any,
    removeContact:(id:string | number)=>any,
    updateContact:(data:ContactType)=>any
}

export const ContactList=createContext<ContactContextType>({
    contacts:[],
    addContact:()=>{},
    removeContact:()=>{},
    updateContact:(data:ContactType)=>{}

})

export const useContactList=()=>useContext(ContactList)