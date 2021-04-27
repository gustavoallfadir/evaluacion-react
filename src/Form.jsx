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
        civil_status : "single"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validator = new SimpleReactValidator();
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]:value});
  }

  
  handleSubmit(event) {
    event.preventDefault();
    if (this.validator.fieldValid('email')){
      eventBus.dispatch(
        "savedEmployee", 
        { 
          firstName : this.state.firstName,
          lastName : this.state.lastName,
          email : this.state.email,
          birthday : this.state.birthday,
          civil_status : this.state.civil_status
        });
      alert(`Registro guardado:\n${this.state.firstName} ${this.state.lastName}\n${this.state.email}`);
      const form = document.querySelector(".form")
      form.classList.toggle("show");
      this.setState({
        firstName : "",
        lastName : "",
        email : "",
        birthday : "",
        civil_status : "single"
      });
    }else{
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
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
            {this.validator.message('firstName', this.state.firstName, 'required|alpha')}
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input type="text" className="form-control" placeholder="Escriba el apellido" 
            name="lastName" id="lastName"
            value={this.state.lastName} 
            onChange={this.handleInputChange}/>
            {this.validator.message('lastName', this.state.lastName, 'required|alpha')}
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
            {this.validator.message('birthday', this.state.birthday, 'required|date')}
          </div>

          <div className="form-group">
            <label htmlFor="civil_status">Estado civil:</label>
            <select type="choice" className="form-control custom-select" 
            name="civil_status" id="civil_status"
            value={this.state.civil_status} 
            onChange={this.handleInputChange}>
            {this.validator.message('civil_status', this.state.civil_status, 'required|alpha')}

              <option value="single">Soltero</option>
              <option value="married">Casado</option>
              <option value="divorced">Divorciado</option>
              <option value="widowed">Viudo</option>
            
            </select>
            
            <br/><br/>

            <div className="container text-center">
              <button onClick={this.handleSubmit} 
              className="btn btn-primary btn-collapse"id="enviar">Guardar</button>
            </div>
          </div> 
          <hr/>
        </form>
    </div>
    );
  }
}


export default Form;
