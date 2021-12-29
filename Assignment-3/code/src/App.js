import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow="<";

const employeedetails={
  name:"sneha",
  id:13004,
  Appointment:"11:00(18-03-2019)",
  Email:"sharmasnehaa1828@gmail.com",
  phone:"+910000000000",
  status:'In Progress',
  Door:'Mark',
  Time:"11:30(18-03-2019)",
  itemname:"spinal belt",
  description:"reduces spinal pain"

};
function App() {
  
  return (
    <div className="site-container">
    <div className="header">
    <hr/>
    <h4>{employeedetails.name}</h4>
    <p>{employeedetails.id}</p>
      <button>Print</button>
      <hr/>
    </div>
    
    <div className="customer-info main-div">
      <p><b>Appointment On</b>{employeedetails.Appointment} </p>
      <p><b>Email:</b>{employeedetails.Email} </p>
      <p><b>Phone</b>{employeedetails.phone} </p>
    </div>
    <div className="order-info main-div">

      <p><b>Status</b><br/><li>{employeedetails.status}</li></p>
      <p><b>Door</b><br/>{employeedetails.Door}</p>
      <p><b>Time</b><br/>{employeedetails.Time}</p>
      
    </div>
    <div className="product-list main-div">
    <div id="box"></div>
    <div> <img src="https://www.w3schools.com/howto/img_avatar.png"/></div>
    <div>
      <p><b>{employeedetails.itemname}</b></p>
      <p>{employeedetails.description}</p>
      </div>

    </div>

    </div>
  );
}

export default App;