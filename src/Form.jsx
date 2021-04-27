import React from 'react';
import './Form.css';

class Form extends React.Component {
  
  render() {
    return (
      <div className="Form">
        <button className="btn btn-primary btn-collapse float-btn" data-toggle="collapse" 
         data-target="#collapseExample">
          Agregar empleado
          </button>
        
        <br/>

        <form className="form collapse" id="collapseExample" action="" method="POST">

          <h3>Formulario</h3>
          <p>Por favor, llene el siguiente formulario para añadir un empleado al registro.</p>
          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <input type="text" className="form-control" placeholder="Escriba el nombre" 
            name="fisrtName" id="firstName"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input type="text" className="form-control" placeholder="Escriba el apellido" 
            name="lastName" id="lastName"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" 
              placeholder="email@ejemplo.com" 
              name="email" id="email"/>
          </div>

          <div className="form-group">
            <label htmlFor="birthday">Fecha de nacimiento:</label>
            <input className="form-control" type="date" name="burthday" id="birthday"/>
          </div>

          <div className="form-group">
            <label htmlFor="civil_status">Estado civil:</label>
            <select type="choice" className="form-control" 
              name="civil_status" id="civil_status">
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viudo">Viudo</option>
            </select>
            <br/>
            <div className="container text-center">
              <button className="btn btn-primary btn-collapse" id="enviar" 
              data-toggle="collapse" data-target="#collapseExample"> Guardar</button>
            </div>
          </div> 
          <hr/>
        </form>
    </div>
    );
  }
}


export default Form;
