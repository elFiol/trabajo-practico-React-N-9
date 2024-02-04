import "../App.css"
import { Button, Container, Form } from 'react-bootstrap';
import Citas from "./Citas"
import { useEffect, useState } from "react";

const FormularioDoc = () => {
    const [mascota, setMascota] = useState("")
    const [duenio, setDuenio] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")
    const [citas, setCitas] = useState([])

    const minYmax = (texto, min, max) => {
        const valor = texto.trim();
        return (valor.length >= min && valor.length <= max)
    }
    const esHoraValida = (horaParam) => {
        const regexHora = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        if (regexHora.test(horaParam)) {
            const partesHora = horaParam.split(':');
            const horas = parseInt(partesHora[0], 10);
            const minutos = parseInt(partesHora[1], 10);
            const verificar = (horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59)
            if (verificar !== true) {
                alert("datos de hora no coincide")
                return (verificar)
            } else {
                return (verificar)
            }
        }
    };

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (minYmax(mascota, 2, 20) && minYmax(duenio, 2, 20) && minYmax(sintomas, 2, 20) && esHoraValida(hora)) {
            const cita = {
                mascota: mascota.trim(),
                duenio: duenio.trim(),
                sintomas: sintomas.trim(),
                hora: hora,
                fecha: fecha
            }
            setCitas([...citas, cita])
            setDuenio("")
            setFecha("")
            setHora("")
            setMascota("")
            setSintomas("")

        } else {
            alert("datos incorrectos intentelo de nuevo")
        }
    }
    return (
        <>
            <div>
                <div className="bg-light py-3 px-4">
                    <p className="m-0">Llenar el formulario para crear cita</p>
                </div>
                <div className='docForm '>
                    <Form onSubmit={handlerSubmit}>
                        <Container>
                            <div className="px-2">
                                <Form.Group className='d-lg-flex d-md-flex justify-content-between py-3'>
                                    <Form.Label>Nombre de la mascota:</Form.Label>
                                    <Form.Control minLength={2} maxLength={20} value={mascota} type='text' placeholder='nombre de la mascota' className='formFechaYHora' onChange={(e) => setMascota(e.target.value)}></Form.Control>
                                </Form.Group>
                                <Form.Group className='d-lg-flex d-md-flex justify-content-between py-3'>
                                    <Form.Label>Nombre del dueño:</Form.Label>
                                    <Form.Control minLength={2} maxLength={20} value={duenio} type='text' placeholder='nombre de la dueño' className='formFechaYHora' onChange={(e) => setDuenio(e.target.value)}></Form.Control>
                                </Form.Group>
                                <Form.Group className='d-lg-flex d-md-flex justify-content-between py-3'>
                                    <div className='fechaYhora d-lg-flex d-md-flex justify-content-between'>
                                        <Form.Label>fecha:</Form.Label>
                                        <Form.Control value={fecha} type='date' placeholder='dd/mm/yyyy' className='formFechaYHora' onChange={(e) => setFecha(e.target.value)}></Form.Control>
                                    </div>
                                    <div className='fechaYhora d-lg-flex d-md-flex justify-content-between fechaYhora-2'>
                                        <Form.Label className="ms-md-3 ms-lg-3">Hora</Form.Label>
                                        <Form.Control value={hora} type='text' placeholder='hh mm' className='formFechaYHora' onChange={(e) => setHora(e.target.value)}></Form.Control>
                                    </div>
                                </Form.Group>
                                <Form.Group className='d-lg-flex d-md-flex justify-content-between pt-3 pb-4'>
                                    <Form.Label>Sintomas</Form.Label>
                                    <Form.Control value={sintomas} minLength={2} maxLength={20} type='text' placeholder='describir sintomas' className='formFechaYHora' onChange={(e) => setSintomas(e.target.value)}></Form.Control>
                                </Form.Group>
                            </div>
                        </Container>
                        <div className="bg-light py-4 text-center">
                            <Button type="submit">Agregar nueva cita</Button>
                        </div>
                    </Form>
                </div>
            </div>
            <Citas></Citas>
        </>
    );
};

export default FormularioDoc;