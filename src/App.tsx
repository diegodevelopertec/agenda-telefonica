import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Contacts } from './Pages/Contacts'
import {NewContact} from './Pages/NewContact'
import { Container } from './Components/Container'
import { Text } from './Components/Text'
import { Title } from './Components/Title'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App=()=>{
  return <Container bg='#3f3e5b' h='100vh' w='100vw' p='5px'>
    <Title m='42px 0' fontSize='38px' mqFontSize='5px'>Agenda Telefônica</Title>
    <Text m='18px 0' fontSize='17px'  color="#c7c7c7">Crie e gerencie sua propria agenda de contatos:</Text>
    <Container >
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Contacts/>} />
            <Route path='/newcontact' element={<NewContact />} />
        </Routes>
      </BrowserRouter>
    </Container>

   <ToastContainer theme='colored'/>
  </Container>

   


}

export default App