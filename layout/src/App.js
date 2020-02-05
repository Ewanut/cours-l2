import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './user.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(data);
  }

  render() {

      const img = data.results[0].picture.large;
      const nom = data.results[0].name.title + " "+ data.results[0].name.first + " "+ data.results[0].name.last;
      const loc = data.results[0].location.street.number + " " + data.results[0].location.street.name +" "+ data.results[0].location.city +", "+data.results[0].location.state +" in "+data.results[0].location.country;
      const tel = data.results[0].phone;
      const mel = data.results[0].email;
      return (
        <div className="container">
        <div className="row">
        <div className="col-6 ml-auto mr-auto pt-auto ">
          <div className="card m-5">
            <div className="card-header">
              <h3 className="card-title text-center">{nom}</h3>
              </div>
              <div className="card-body d-flex justify-content-row text-rigth">
              <img className="img-fluid img-card-top mr-4" src={img} alt="portrait" />
                <div className="row">
                  <p className="col-12">Adresse: {loc}</p>
                  <p className="col-12">E-mail: {mel}</p>
                </div>
              </div>
              <div className="card-footer">
               <a target="_blank" data-testid='button' rel="noopener noreferrer" onClick={ () => {window.alert("Tel: "+tel);}} className="btn btn-outline-secondary float-right">Call me</a>
              </div>
              </div>
          </div>
          </div>
        </div>
      );
    }
  }
export default App;
