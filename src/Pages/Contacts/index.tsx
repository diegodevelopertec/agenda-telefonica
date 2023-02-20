import { Container } from "../../Components/Container"
import { Title } from "../../Components/Title"
import { CardContact } from "../../Components/CardContact"
import { Button } from "../../Components/Button"
import { useNavigate } from "react-router-dom"
import { useContactList } from "../../Context/contactsContext"
import { Image } from "../../Components/Image"
import IconTriste from './../../assets/triste.png'

export const Contacts=()=>{
    const navigate=useNavigate()
    const {contacts}=useContactList()



    return <Container w="100%"  bg='#3f3e5b' h="100%">
        <Container  m="52px 0 " >
       
            {contacts.length > 0 ? contacts.map((item,index)=>(
                <CardContact id={item.id} key={index} email={item.email} nome={item.name} tel={item.tel} photo={item.name}  />
              ))
               : <Container flex="1"  d='flex' flexJustify="center">
                       <Container p="100px" bdRadius="5px"   flexAlign="center" d="flex" flexDirection="column" flexJustify="center" color="#C7BFBF">
                         <Title  textAlign="center">Nenhum Contato criado</Title>
                         <Image mt="50px" h="100px" w="100px" src={IconTriste} />
                        </Container>
                  </Container>
            }
        </Container>
       <Button bd="none" onClick={()=>navigate('newcontact')} ps="fixed" psTop="50vh" cursor="pointer" psRight="4px" w="70px" fontSize="30px" bdRadius="100%" h="70px" color="#eeee" bg="#574f9e" > + </Button>
    </Container>
}