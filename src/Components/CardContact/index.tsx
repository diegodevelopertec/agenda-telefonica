import { Link } from "react-router-dom";
import { Container } from "../Container";
import { Image } from "../Image";
import { Text } from "../Text";
import { Button } from "../Button";
import { Anchor } from "../Link";
import Edite from './../../assets/editar.png'
import Lixeira from './../../assets/lixeira.png'
import Fone from './../../assets/fone.png'
import Email from './../../assets/email.png'
import {useContactList} from './../../Context/contactsContext'
import user from './../../assets/user.png'



type data={
    id?:string | number,
    nome?:string,
    photo?:string,
    tel?:string,
    email?:string,


}


export const CardContact=({id,nome,photo,tel,email}:data)=>{
    const {removeContact,updateContact} =useContactList()


    return <Container 
        bdRadius="5px"
        bg='#565572'
        bgHover='#39394e'
        d="flex"
        name='card'
        m="5px 0"
        p="13px"
        flexAlign="center"
        flexJustify="space-around"
        mqDirection="column"
        mqDAlign="center"
        mqDJustify="center"
      
    >
        <Container  name="card-user" d="flex" flexDirection="column" flexAlign="center">
                <Container p="10px" mb="15px" d="flex"  flexAlign="center" mqDirection="column"  >
                    <Image bdRadius="100% " boxShadow="0 0 0 3px #eee" w="120px"  h="120px" src={`/src/assets/${photo  ? photo : user}`} mr='20px' />
                    <Text  fontSize="20px" mqM="10px 0" color="#b4b8b5">{nome}</Text>
                </Container>
                <Container flexJustify="start" name="card-data" d='flex' flexAlign="center" mqDJustify="center" >
                    <Anchor cursor="pointer" href={`mailto:${email}`}  bgHover="#2596be" p="8px" bdRadius="5px" d="flex" flexJustify="center" flexAlign="center" >
                        <Image w="30px" h="30px"  src={Email} />
                    </Anchor>
                    <Anchor cursor="pointer" href={`tel:${tel}`} bgHover="#2596be" p="8px"  bdRadius="5px" d="flex" flexJustify="center" flexAlign="center"  >
                       <Image  w="30px" h="30px" src={Fone} />
                    </Anchor>
               </Container>
        </Container>
      
        <Container name="card-actions" mqM="10px 0" d="flex">
                <Button 
                 onClick={()=>removeContact(id!)}
                 cursor="pointer" 
                 w="100px" p="5px" flexJustify="center" flexAlign="center" m="0 5px" d="flex" bgHover="#cf4f36" bd="none" bdRadius="5px">
                    <Image  w="30px" h="30px" src={Lixeira} />
                    <Text fontWeight="bold"  color="#b4b8b5">Excluir</Text>
                </Button>
                <Button onClick={()=>updateContact(id!)} cursor="pointer" w="100px" p="5px" flexJustify="center" flexAlign="center" m="0 5px" d="flex" bgHover="#3e9e57" bd="none" bdRadius="5px">
                    <Image  w="30px" h="30px" src={Edite}  />
                    <Text fontWeight="bold" color="#b4b8b5">Editar</Text>
                </Button>
        </Container>


    </Container>




}