import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import reportWebVitals from './reportWebVitals';
//import { NavItem } from 'react-bootstrap';
import Home from './home.js';
import Courses from './courses.js';
import Books from './books.js';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './footer.js';
import Navs from './content.js';
import Login from './login.js';
import Signup from './signup.js';
import Cont from './description.js';

/*
import { app } from './firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
*/

function Header(){
  return(
    <>
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Elearning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Courses">Courses</Nav.Link>
            <Nav.Link href="/Books">Books</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Signup">SignUp</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/elearning" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/Books" element={<Books/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Html" element={<Navs title="HTML" description={<Cont Html="Html"/>} sr="https://www.youtube.com/embed/qz0aGYrrlhU" instructor="Mosh" duration="1h" title2="HTML" sr2="https://www.youtube.com/embed/qz0aGYrrlhU" instructor2="Raj" duration2="1h" title3="HTML" sr3="https://www.youtube.com/embed/qz0aGYrrlhU" instructor3="Raj" duration3="1h"/> } />
      <Route path="/css" element={<Navs title="CSS" description={<Cont Css="Css"/>} sr="https://www.youtube.com/embed/iG2jotQo9NI" instructor="Adi Purdila" duration="8h" /> } />
      <Route path="/javascript" element={<Navs title="JAVASCRIPT" description={<Cont Javascript="Javascript"/>} sr="https://www.youtube.com/embed/W6NZfCO5SIk" instructor="Mosh" duration="1h" /> } />
      <Route path="/react" element={<Navs title="REACT_JS" description={<Cont Reactjs="Reactjs"/>} sr="https://www.youtube.com/embed/Ke90Tje7VS0" instructor="Mosh" duration="2h" /> } />
      <Route path="/express" element={<Navs title="EXPRESS_JS" description={<Cont Expressjs="Expressjs"/>} sr="https://www.youtube.com/embed/jogv2aB4NjI" instructor="simplilearn" duration="2h" /> } />
      <Route path="/mongo" element={<Navs title="MONGO DB" description={<Cont Mongodb="Mongodb"/>} sr="https://www.youtube.com/embed/ZQuQ-wHuPlg" instructor="kiran" duration="1h" /> } />
      <Route path="/mysql" element={<Navs title="MYSQL" description={<Cont Mysql="Mysql"/>} sr="https://www.youtube.com/embed/AA7i2GcTGwU" instructor="simplilearn" duration="1h" /> } />
      <Route path="/python" element={<Navs title="PYTHON" description={<Cont Python="Python"/>} sr="https://www.youtube.com/embed/WGJJIrtnfpk" instructor="Edureka" duration="12h" /> } />
      <Route path="/java" element={<Navs title="JAVA PROGRAMMING" description={<Cont Java="Java"/>} sr="https://www.youtube.com/embed/-nEXa4oh4bc" instructor="Edureka" duration="8h" /> } />
      <Route path="/c" element={<Navs title="C PROGRAMMING" description={<Cont C="C"/>} sr="https://www.youtube.com/embed/8PopR3x-VMY" instructor="Edureka" duration="2h"/> } />
      <Route path="/cpp" element={<Navs title="C++ PROGRAMMING" description={<Cont Cpp="Cpp"/>} sr="https://www.youtube.com/embed/_bYFu9mBnr4" instructor="Caleb" duration="10h"/> } />
      <Route path="/dsa" element={<Navs title="DATA STRUCTURES AND ALGORITHMS" description={<Cont Dsa="Dsa"/>} sr="https://www.youtube.com/embed/OWCao3Ul6n4" instructor="Great Learning" duration="10h"/> } />
      <Route path="/ruby" element={<Navs title="RUBY" description={<Cont Ruby="Ruby"/>} sr="https://www.youtube.com/embed/t_ispmWmdjY" instructor="Freecodecamp" duration="4h"/> } />
      <Route path="/ml" element={<Navs title="MACHINE LEARNING" description={<Cont Ml="Ml"/>} sr="https://www.youtube.com/embed/GwIo3gDZCVQ" instructor="Edureka" duration="10h"/> } />
      <Route path="/dl" element={<Navs title="DEEP LEARNING" description={<Cont Dl="Dl"/>} sr="https://www.youtube.com/embed/DooxDIRAkPA" instructor="Edureka" duration="6h"/> } />
      <Route path="/ai" element={<Navs title="ARTIFICIAL INTELLIGENCE" description={<Cont Ai="Ai"/>} sr="https://www.youtube.com/embed/JMUxmLyrhSk" instructor="Edureka" duration="5h"/> } /> 
      <Route path="/competitive_coding" element={<Navs title="COMPETITIVE CODING" description={<Cont Competitve="Competitve"/>} sr="https://www.youtube.com/embed/MY3jR-a29JI" instructor="NPTEL" duration="1h"/> } />   
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Header/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

