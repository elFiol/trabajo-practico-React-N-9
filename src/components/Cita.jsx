import { Button } from "react-bootstrap";
import persona from "../persona.webp"

const Cita = ({cita, borrarCita}) => {
    return (
        <div className="card-veterinaria my-3 rounded-2">
            <div className='d-flex px-3 py-2'>
                <img src={persona} className='logoDiv' alt="foto de perfil" />
                <div className="ps-2">
                    <p className="m-0">Mascota: {cita.mascota}</p>
                    <p className="duenio">Dueño: {cita.duenio}</p>
                </div>
            </div>
            <div className="datosFaltantes p-3">
                <div className="d-flex justify-content-between">
                    <p>Fecha:</p>
                    <p className="datos py-3 px-3 rounded-4">{cita.fecha}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Hora:</p>
                    <p className="datos py-3 px-3 rounded-4">{cita.hora}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Sintoma:</p>
                    <p className="datos py-3 px-3 rounded-4">{cita.sintomas}</p>
                </div>
            </div>
            <div className="text-end py-4 px-3">
                <Button variant="danger" type="button" onClick={()=> borrarCita(cita.id)}>Borrar</Button>
            </div>
        </div>
    );
};

export default Cita;