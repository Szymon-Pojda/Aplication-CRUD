import { Navbar, NavLink, Nav, Container } from 'react-bootstrap';
const NavBar = () => {
    return (
        <Navbar bg='primary' variant='dark' expand='lg' className='mt-4 mb-4 rounded me-auto'
        >
            <Container>
                <Navbar.Brand as={NavLink} to='/'> BlogApp </Navbar.Brand>
                <Nav className='justify-content-end'>
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
export default NavBar;