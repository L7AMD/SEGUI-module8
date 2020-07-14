import React from "react";
import Button from "react-bootstrap/Button";

function handleSubmit(event) {
  event.preventDefault();
  var number =  document.getElementById("number");
  var cvc =  document.getElementById("cvc");
  var date =  document.getElementById("date2");
  console.log(cvc);
  if (number.value === "" || cvc.value === "" || date.value === ""){
    alert("Purchase failed!")
  }
  else {
  var serial = ""
  var n=0;
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 4; j++) {
      n = Math.floor(Math.random() * 10);
      console.log(n);
      serial += n.toString();
  }
  serial += "-";
  }
  alert("Successful! Your game key is: " + serial.substring(0,serial.length-1));
  number.value="";
  cvc.value="";
  date.value="";
}
}




function Exhibition() {
  return (
<div className="container">
<div className="container">
    <div className="card flex-column flex-wrap text-secondary">
    <div className="card-block px-2"> <br/>
        <h4 className="card-title"><strong>Apple tree</strong></h4>
    </div>
        <div className="card-header border-0">
            <img src={require('./img/paysage.jpg')} height="600px" width="1000px" />
        </div>
        <div className="card-block px-2"> <br/>
            <label className="card-title"><strong>information</strong></label><p>this paysage was painted in 1950 by the painter Ellis Trom after his village was rebuilt after the second world war</p>
        </div>

    </div>
</div><br/>


<div className="container">



    <div className="card flex-column flex-wrap text-secondary">


        <div className="card-block px-2"> <br/>
            <h4 className="card-title"><strong>Comments</strong></h4>
        </div>


        <div className="card flex-row flex-wrap text-secondary">


                <div className="flex-row flex-wrap border-0">

                  <div className="  flex-column flex-wrap text-secondary">
                  <label className="card-title px-2"><strong>Jane:</strong></label><label>Very good piece of art</label><br/>
                  <label className="card-title px-2"><strong>Joseph:</strong></label><label>Incredible scenary</label><br/>
                  <label className="card-title px-2"><strong>Maria:</strong></label><label>I like the choice of colors</label><br/>
                  <label className="card-title px-2"><strong>Mosh:</strong></label><label>WOW this painting is amazing</label><br/>
                  <label className="card-title px-2"><strong>Mario:</strong></label><label>My parents are from this village, I went there couple of times, this painting is just as real as what I saw</label><br/>
                  <label className="card-title px-2"><strong>Pablo:</strong></label><label>My words can't describe how good is this painting</label><br/>
                  </div>



                </div>

              <div className="card-block px-2">
              </div>

        </div>

    </div>
</div>
<br/>


  </div>
  );
}

export default Exhibition;
