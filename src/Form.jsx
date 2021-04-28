import React, {Component} from 'react';
import './Form.css';
import eventBus from './EventBus';
import SimpleReactValidator from 'simple-react-validator';


class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
        firstName : "",
        lastName : "",
        email : "",
        birthday : "",
        civil_status : "Soltero"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this, 
      messages:{
        alpha_space: "Por favor use sólo letras y espacios.",
        email:"Por favor ingrese una dirección válida.",
        required: "Por favor llene este campo."
      }
    });
  }


  handleInputChange(event) {
    // Maneja cambios en los inputs del formulario
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]:value});
  }

  clearForm(event) {
    // Limpia el formulario
    event.preventDefault();
    this.setState({
      firstName : "",
      lastName : "",
      email : "",
      birthday : "",
      civil_status : "Soltero"
    });
  }


  handleSubmit(event) {
    // Maneja el envío del formulario
    event.preventDefault();
    // Validar formulario
    if (this.validator.allValid()){
      eventBus.dispatch(
        "savedEmployee", 
        { 
          firstName : this.state.firstName,
          lastName : this.state.lastName,
          email : this.state.email,
          birthday : this.state.birthday,
          civil_status : this.state.civil_status
        });
      //Feedback de datos guardados
      alert(`Registro guardado:\n
        Nombre: ${this.state.firstName.trim()} ${this.state.lastName.trim()}
        email: ${this.state.email}
        Fecha de nacimiento: ${this.state.birthday.split('-').reverse().join('-')}
        Estado civil: ${this.state.civil_status}`);
      //Ocultar formulario simulando click en el botón de collapse
      const button = document.querySelector(".btn-collapse").click();
      //Limpiar formulario
      this.setState({
        firstName : "",
        lastName : "",
        email : "",
        birthday : "",
        civil_status : "Soltero"
      });
    }else{
      // Mostrar errores
      this.validator.showMessages();
    }
  }


  render() {
    return (
      <div className="Form">
        <button className="btn btn-primary btn-collapse float-btn" data-toggle="collapse" 
         data-target="#collapseExample">
          Agregar empleado
          </button>
        
        <br/>

        <form className="form collapse" id="collapseExample" 
        onSubmit={this.handleSubmit} method="POST">

          <h3>Formulario</h3>
          <p>
            Por favor, llene el siguiente formulario para añadir un empleado al registro.
          </p>
          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <input type="text" className="form-control" placeholder="Escriba el nombre" 
            name="firstName" id="firstName" 
            value={this.state.firstName} 
            onChange={this.handleInputChange}/>
            {this.validator.message('firstName', this.state.firstName, 'required|alpha_space')}
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input type="text" className="form-control" placeholder="Escriba el apellido" 
            name="lastName" id="lastName"
            value={this.state.lastName} 
            onChange={this.handleInputChange}/>
            {this.validator.message('lastName', this.state.lastName, 'required|alpha_space')}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" 
              placeholder="email@ejemplo.com" 
              name="email" id="email"
              value={this.state.email} 
              onChange={this.handleInputChange}/>
              {this.validator.message('email', this.state.email, 'required|email')}
          </div>

          <div className="form-group">
            <label htmlFor="birthday">Fecha de nacimiento:</label>
            <input className="form-control" type="date" 
            name="birthday" id="birthday"
            value={this.state.birthday} 
            onChange={this.handleInputChange}/>
            {this.validator.message('birthday', this.state.birthday, 'required')}
          </div>

          <div className="form-group">
            <label htmlFor="civil_status">Estado civil:</label>
            <select type="choice" className="form-control custom-select" 
            name="civil_status" id="civil_status"
            value={this.state.civil_status} 
            onChange={this.handleInputChange}>
            {this.validator.message('civil_status', this.state.civil_status, 'required|alpha')}

              <option value="single">Soltero</option>
              <option value="Casado">Casado</option>
              <option value="Divorciado">Divorciado</option>
              <option value="Viudo">Viudo</option>
            
            </select>
            
            <br/><br/>

            <div className="container text-center">
              <button onClick={this.handleSubmit} 
              className="btn btn-primary btn-collapse"id="enviar">Guardar
              </button>

              <button onClick={this.clearForm} 
              className="btn btn-warning"id="borrar">Borrar
              </button>
            </div>
          </div> 
          <hr/>
        </form>
    </div>
    );
  }
}

export default Form;
