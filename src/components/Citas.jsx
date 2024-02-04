import Cita from "./Cita"
import { Container, Row, Col } from 'react-bootstrap';

const Citas = () => {
    return (
        <Container className="my-3">
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Cita></Cita>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Cita></Cita>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Cita></Cita>
                </Col>
            </Row>
        </Container>
    );
};

export default Citas;