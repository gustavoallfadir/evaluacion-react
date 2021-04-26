import React, { Component } from 'react';
import './Form.css';

class Form extends React.Component {
  
  render() {
    return (
      <div className="Form">
        <h2>Formulario</h2>
          <form action="" method="get">

          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" placeholder="Escriba su nombre" 
            name="nombre" id="nombre"/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" 
              placeholder="Escriba su email" 
              name="email" id="email"/>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea rows ="4" className="form-control" 
              placeholder="Escriba su mensaje..." 
              name="message" id="message"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="status">Estado civil:</label>
            <select type="choice" className="form-control" name="edo_civil" id="edo_civil">
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viudo">Viudo</option>
            </select>
            <br/>
            <div className="container text-center">
            <input className="btn btn-primary"type="submit" value="Enviar"/>
            </div>
          </div> 
        </form>
      </div>
    );
  }
}

export default Form;
