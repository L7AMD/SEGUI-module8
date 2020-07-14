import React from "react";
import Button from "react-bootstrap/Button";
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Gallery = () => {

  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <AliceCarousel mouseTrackingEnabled>
      <img src={require('./img/paysage.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/eclipse.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/cube.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/river.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/lake.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/mountains.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>

    </AliceCarousel>
  )
}
class Home extends React.Component {

render = () => {
   return (
     <div className="container">
     <br/>
      <br/><br/>
        <div className="d-flex justify-content-center">
          <h1 className="text-secondary float-none"><strong>Online art meuseum</strong></h1>
        </div>

      <div className="container">
        <div className="card " style={{"textAlign":"center"}}>
        <Gallery />
        </div><br/>
        </div>



        <div className="container  flex-column">


        <div className="container d-flex justify-content-center">




                                    <div className="container"><br/>
                                    <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                    <img className="card-img-top" src={require('./img/eclipse.jpg')} height="120px"/>
                                    <div className="card-body text-secondary">
                                    <h5 className="card-title"><strong>Solar eclipse</strong></h5>
                                    </div>
                                    </div><br/>
                                    </div>

                                  <div className="container"><br/>
                                  <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                  <img className="card-img-top" src={require('./img/cube.jpg')} height="120px"/>
                                  <div className="card-body text-secondary">
                                  <h5 className="card-title"><strong>Forgotten cube</strong></h5>
                                  </div>
                                  </div><br/>
                                  </div>




                                  <div className="container"><br/>
                                  <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                  <img className="card-img-top" src={require('./img/paysage.jpg')} height="120px" />
                                  <div className="card-body text-secondary">
                                  <h5 className="card-title"><strong>Apple tree</strong></h5>
                                  </div>
                                  </div><br/>
                                  </div>

                </div>


                          <div className="d-flex justify-content-center">







                                              <div className="container"><br/>
                                              <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                              <img className="card-img-top" src={require('./img/river.jpg')} height="120px"/>
                                              <div className="card-body text-secondary">
                                              <h5 className="card-title"><strong>River hangar</strong></h5>
                                              </div>
                                              </div><br/>
                                              </div>

                                              <div className="container"><br/>
                                              <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                              <img className="card-img-top" src={require('./img/lake.jpg')} height="120px" />
                                              <div className="card-body text-secondary">
                                              <h5 className="card-title"><strong>Frozen Lake</strong></h5>
                                              </div>
                                              </div><br/>
                                              </div>


                                              <div className="container"><br/>
                                              <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                              <img className="card-img-top" src={require('./img/mountains.jpg')} height="120px" />
                                              <div className="card-body text-secondary">
                                              <h5 className="card-title"><strong>Mountain flowers</strong></h5>
                                              </div>
                                              </div><br/>
                                              </div>




                          </div>





</div>









      </div>


   )
 }
}

export default Home;
