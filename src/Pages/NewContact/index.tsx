
import { Container } from "../../Components/Container"
import { Input } from "../../Components/Input"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import {v4 as uuid} from 'uuid'
import { Form } from "../../Components/Form"
import { useContactList } from "../../Context/contactsContext"
import { toast } from "react-toastify"
import { Title } from "../../Components/Title"

interface FormData{
    id:string,
    photo:string,
    nome:string,
    email:string,
    tel:string
}


const initialValues: FormData = {
    id:'',
    photo:'',
    nome:'',
    email:'',
    tel:''
  };


export const NewContact:React.FC=()=>{
  const navigate=useNavigate()
    const {contacts,addContact}=useContactList()
    const [formData, setFormData] = useState<FormData>(initialValues);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       if(formData.nome != '' && formData.email != '' && formData.tel != ''  ){
            console.log(formData);
            console.log(contacts);
            
            addContact({
              photo:formData.photo,
              email:formData.email,
              tel:formData.tel,
              name:formData.nome,
              id:uuid()
            })

            navigate('/')
       }else{
          toast.error('Preencha todos os campos')
       }
      };

    return <Container w="100vw"  m='100px 0' d="flex"flexDirection="column" mqP="5px" p="12px 30px" pl="30px"  bdRadius="10px" >
              <Container m="30px 0" d="flex" flexJustify="center">
                <Title>Novo Contato</Title>
              </Container>
              <Container d="flex" w="100%"  flexJustify="center"  h="auto">
                <Form mqM="30px 0" p="65px 30px" bdRadius="5px" m="15px 0" mqW="100%" w="650px" boxShadow="0 0 15px #334691" 
                   bg='#1e2a59' d="flex" flexDirection="column"
                   method="POST" 
                   onSubmit={handleSubmit} >

                   <Container w="100%" flexJustify="center" flexAlign="center" d="flex" h="100px"  bg='#55639e' >
                     <Container  p="5px">
                        <Input fontSize="15px" type="file" name="photo"  value={formData.photo}    onChange={handleChange} />
                     </Container>
                   </Container>
                   <Input m="16px 0" type="name" bdRadius="5px"  p="15px" 
                      mqW="100%"
                      fontSize="15px"
                      value={formData.nome}
                      bd="none"
                      id="nome"
                      name="nome"
                      onChange={handleChange}
                      placeholder="Digite um nome"
                    />
                    <Input m="16px 0" type="email" bdRadius="5px" p="15px"  
                      value={formData.email}
                      onChange={handleChange}
                      fontSize="15px" 
                      mqW="100%"
                      id="email"
                      bd="none"
                      name="email"
                      placeholder="Digite um Email"
                    />
                    <Input m="16px 0" type="tel" bdRadius="5px"  p="15px" 
                      value={formData.tel} 
                      onChange={handleChange}
                      mqW="100%"
                      id="tel"
                      fontSize="15px"
                      bd="none"
                      name="tel"
                      placeholder="Digite um Telefone"
                    />
                   <Container w="100%" d="flex" flexJustify="center">
                     <Input w="270px" m="35px 0" cursor="pointer" fontSize="15px" type="submit" p="17px" value="Salvar" bg="#194426" color="white" bgHover="#50c350" bd="none" bdRadius="5px" />
                   </Container>

                </Form>



              </Container>
            </Container>
}