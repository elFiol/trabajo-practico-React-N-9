import Cita from "./Cita";
import { Container, Row, Col } from 'react-bootstrap';

const Citas = ({ citas }) => {
    return (
        <Container className="my-3">
            {citas.length > 0 ? (
                <Row>
                    {citas.map((cita, posicion) => (
                        <Col key={posicion} sm={12} md={6} lg={4}>
                            <Cita cita={cita} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <p className="text-center">No hay citas aquí</p>
            )}
        </Container>
    );
};

export default Citas;
