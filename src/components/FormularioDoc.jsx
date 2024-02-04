import "../App.css"
import { Button, Container, Form } from 'react-bootstrap';
import Citas from "./Citas"

const FormularioDoc = () => {
    return (
        <>
            <div>
                <div className="bg-light py-3 px-4">
                    <p className="m-0">Llenar el formulario para crear cita</p>
                </div>
                <div className='docForm '>
                    <Form>
                        <Container>
                            <div className="px-2">
                                <Form.Group className='d-lg-flex d-md-flex justify-content-between py-3'>
                                    <Form.Label>Nombre de la mascota:</Form.Label>
                                    <Form.Control type='text' placeholder='nombre de la mascota' className='formFechaYHora'></Form.Control>
                                </Form.Group>
                                <Form.Group className='d-lg-flex d-md-flex justify-content-between py-3'>
                                    <Form.Label>Nombre del dueño:</Form.Label>
                                    <Form.Control type='text' placeholder='nombre de la dueño' className='formFechaYHora'></Form.Control>
                                </Form.Group>
                                <Form.Group className='d-lg-flex d-md-flex justify-content-between py-3'>
                                    <div className='fechaYhora d-lg-flex d-md-flex justify-content-between'>
                                        <Form.Label>fecha:</Form.Label>
                                        <Form.Control type='text' placeholder='dd/mm/yyyy' className='formFechaYHora'></Form.Control>
                                    </div>
                                    <div className='fechaYhora d-lg-flex d-md-flex justify-content-between fechaYhora-2'>
                                        <Form.Label className="ms-md-3 ms-lg-3">Hora</Form.Label>
                                        <Form.Control type='text' placeholder='hh mm' className='formFechaYHora'></Form.Control>
                                    </div>
                                </Form.Group>
                                <Form.Group className='d-lg-flex d-md-flex justify-content-between pt-3 pb-4'>
                                    <Form.Label>Sintomas</Form.Label>
                                    <Form.Control type='text' placeholder='describir sintomas' className='formFechaYHora'></Form.Control>
                                </Form.Group>
                            </div>
                        </Container>
                        <div className="bg-light py-4 text-center">
                            <Button>Agregar nueva cita</Button>
                        </div>
                    </Form>
                </div>
            </div>
            <Citas></Citas>
        </>
    );
};

export default FormularioDoc;