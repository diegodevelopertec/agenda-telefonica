import { Container } from "../../Components/Container"
import { Title } from "../../Components/Title"
import { data } from "../../data/data"
import { CardContact } from "../../Components/CardContact"
import { Button } from "../../Components/Button"
import { useNavigate, useNavigation } from "react-router-dom"
import { useReducer } from "react"
import {contactsReducer} from './../../reducer/contact'
import { useContactList } from "./../../reducer/contact"

export const Contacts=()=>{
    const navigate=useNavigate()
    const [contacts,dispacth]=useContactList()




    return <Container w="100%" bg='#49648f' h="100%">
        <Container  m="52px 0 " >
        {/*data.map((item,index)=>(
                <CardContact key={index} email={item.email} name={item.nome} tel={item.tel} img={item.img} />
        )) */}
            {contacts.map((item,index)=>(
                <CardContact key={index} email={item.email} nome={item.nome} tel={item.tel} img={item.img} />
            ))}
        </Container>
       <Button bd="none" onClick={()=>navigate('contact')} ps="fixed" psTop="50vh" cursor="pointer" psRight="4px" w="70px" fontSize="30px" bdRadius="100%" h="70px" color="#eeee" bg="#574f9e" > + </Button>
    </Container>
}