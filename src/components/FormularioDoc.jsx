import "../App.css"
import { Button, Container, Form } from 'react-bootstrap';

const FormularioDoc = () => {
    return (
        <div>
            <div>
                <p>Llenar el formulario para crear cita</p>
            </div>
            <div className='docForm px-2 '>
                <Form>
                    <Container>
                        <Form.Group className='d-lg-flex d-md-flex justify-content-between my-3'>
                            <Form.Label>Nombre de la mascota:</Form.Label>
                            <Form.Control type='text' placeholder='nombre de la mascota' className='w-md-75 w-lg-75'></Form.Control>
                        </Form.Group>
                        <Form.Group className='d-lg-flex d-md-flex justify-content-between my-3'>
                            <Form.Label>Nombre de la mascota:</Form.Label>
                            <Form.Control type='text' placeholder='nombre de la mascota' className='w-md-75 w-lg-75'></Form.Control>
                        </Form.Group>
                        <Form.Group className='d-lg-flex d-md-flex justify-content-between'>
                            <div className='fechaYhora d-lg-flex d-md-flex justify-content-between'>
                                <Form.Label className="fechaYhoraLabel">Nombre de la mascota:</Form.Label>
                                <Form.Control type='text' placeholder='nombre de la mascota' className='w-md-75 w-lg-75'></Form.Control>
                            </div>
                            <div className='fechaYhora d-lg-flex d-md-flex justify-content-between'>
                                <Form.Label className="fechaYhoraLabel">Nombre de la mascota:</Form.Label>
                                <Form.Control type='text' placeholder='nombre de la mascota' className='w-md-75 w-lg-75'></Form.Control>
                            </div>
                        </Form.Group>
                    </Container>
                    <div>
                        <Button>Agregar nueva cita</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default FormularioDoc;