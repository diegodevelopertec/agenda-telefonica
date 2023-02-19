import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Contacts } from './Pages/Contacts'
import {NewContact} from './Pages/NewContact'
import { Container } from './Components/Container'
import { Text } from './Components/Text'
import { Title } from './Components/Title'




const App=()=>{
  return <Container bg='#49648f' h='100vh' w='100vw' p='5px'>
    <Title m='42px 0' fontSize='38px' mqFontSize='5px'>Agenda Telefônica</Title>
    <Text m='18px 0' fontSize='18px'  color="#c7c7c7">Crie e gerencie sua propria agenda de contatos:</Text>
    <Container  bg='#49648f'>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Contacts/>} />
            <Route path='/contact' element={<NewContact />} />
        </Routes>
      </BrowserRouter>
    </Container>

  </Container>

   


}

export default App