import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import FormularioDoc from './components/FormularioDoc'

function App() {
  return (
    <Container className='my-5'>
      <h2 className='text-center'>Administrador pacientes veterinaria</h2>
      <FormularioDoc></FormularioDoc>
    </Container>
  )
}

export default App
