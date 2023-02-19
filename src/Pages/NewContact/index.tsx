
import { Container } from "../../Components/Container"
import { Text } from "../../Components/Text"
import { Title } from "../../Components/Title"
import { Input } from "../../Components/Input"
import { useNavigate } from "react-router-dom"
import { Button } from "../../Components/Button"
import { ChangeEvent, useState } from "react"
import {v4 as uuid} from 'uuid'
import { Form } from "../../Components/Form"

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

    const [formData, setFormData] = useState<FormData>(initialValues);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
      };

    return <Container w="100vw"  h="100vh" d="flex" mqP="5px" p="12px 30px" pl="30px"  bdRadius="10px" >
              <Container d="flex" w="100%"  flexJustify="center"  h="auto">
                <Form mqM="30px 0" p="65px 30px" bdRadius="5px" mqW="100%" w="650px" boxShadow="0 0 15px #334691" 
                   bg='#1e2a59'd="flex" flexDirection="column"
                   method="POST" 
                   action=" "
                   onSubmit={handleSubmit}
                >
                  <Container w="100px" h="100px" bdRadius="50%"
                    bg="red"
                  >
                    <Input d="none" />
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