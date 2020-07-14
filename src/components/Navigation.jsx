import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



class Navigation extends React.Component {

  render(){ return (
    <div className="navigation">
    <div className="container ">
      <>
      <Nav>
      <Navbar class="  " className='m-auto'>

      <Nav.Link href="/"><u class="text-secondary   px-10"> Home</u></Nav.Link>
      <Nav.Link href="/exhibition"><u class="text-secondary  "> Exhibition</u></Nav.Link>
      <Nav.Link href="/about"><u class="text-secondary  ">About us</u></Nav.Link>
      <Button variant=" text-secondary  "><u>Language</u></Button>
      </Navbar>
      </Nav>
      </>
    </div>
    </div>
  );}
}

export default withRouter(Navigation);
