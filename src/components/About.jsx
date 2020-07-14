import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


import ReactDOM from 'react-dom';




class About extends React.Component {
  state = {
    comments: [
      {id: 1, name:"Gökhan", content: "first comment"},
      {id: 2, name:"Gökhan", content: "second"},
    ],
    temp: [
      {id:0,name:"d",content:"f"},
    ],
  }

  commentsview = this.state.comments.map(comment => {
    return (
      <div className="container" key={comment.id}>
      <span onClick={() => {
        console.log(comment.id);
        var comments = this.state.comments.filter(commentt => {
          return comment.id !== commentt.id
        });
        this.setState({
          comments
        })
      }}>
        <div className="container bg-warning">
          <h6>{comment.name}:</h6>
          <p className="card-text bg-secondary text-white">{comment.content}</p>
          <br/>
        </div>
      </span>
      </div>
    )
  })

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      console.log('State has changed.')
    }
  }

  render(){
  return (

      <div className="container">
        <br/>
         <div className="d-flex justify-content-center">
           <h1 className="text-secondary float-none"><strong>About us</strong></h1>
         </div><br/>



       <div className="container">
         <div className="card">
         <div className="card-body text-secondary">
           <h4 className="card-title"><strong>Online Art Meuseum</strong></h4>

           <p className="card-text">
        A virtual museum is a digital entity that draws on the characteristics of a museum, in order to complement, enhance, or augment the museum experience through personalization, interactivity and richness of content. Virtual museums can perform as the digital footprint of a physical museum, or can act independently, while maintaining the authoritative status as bestowed by the International Council of Museums (ICOM) in its definition of a museum. In tandem with the ICOM mission of a physical museum, the virtual museum is also committed to public access; to both the knowledge systems imbedded in the collections and the systematic, and coherent organization of their display, as well as to their long-term preservation.
           </p>
         </div>
         </div><br/><br/>
         </div>

         <div className="container">
           <div className="card ">
           <div className="card-body text-secondary">
             <h4 className="card-title"><strong>Leave us a message with your email, we will contact you soon</strong></h4>
             <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="name" placeholder="Your email" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your message</Form.Label>
                <Form.Control placeholder="Your message" as="textarea" rows="3" />
              </Form.Group>

              <Button variant="secondary text-white" type="submit">Send</Button>
            </Form>


           <p className="card-text"></p>
           </div>
           </div><br/><br/>
           </div>




    </div>
  )};
}

export default About;
