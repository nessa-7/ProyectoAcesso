import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Navegacion(){
    return(
        <Navbar>
        <Container>
            <Navbar.Brand>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-basico" />
            <Navbar.Collapse id="navbar-basico">
                <Nav className="me-auto">
                    <Link to="/">Register</Link>
                    <Link to="/login">Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Navegacion;