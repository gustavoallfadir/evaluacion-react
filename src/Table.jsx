import React, {Component} from 'react';
import './Table.css';
import eventBus from './EventBus';


class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };

        this.estCivil = {
            single:"Soltero",
            married:"Casado",
            divorced:"Divorciado",
            widowed:"Viudo"
        };
    }


    componentDidMount() {
        // Obtiene los datos de la url fuente.
        this._getData();

        //Bus de evento para traer datos del formulario
        eventBus.on("savedEmployee", (data) =>
        this.setState({
            employees:[
                ...this.state.employees,
                {   
                    id:this.state.employees.length+1,
                    firstName:data.firstName.trim(),
                    lastName:data.lastName.trim(),
                    email:data.email,
                    birthday:data.birthday.split('-').reverse().join('-'), 
                    civil_status: data.civil_status
                }
            ]},
        )); 
    }

    componentWillUnmount() {
        eventBus.remove("savedEmployee");
    }


    _getData = () => {
        // Obtiene los datos de la url proporcionada
        fetch("https://virtual-assistant-src.s3.amazonaws.com/employees.json")
        .then(response => {
            if (response.ok) {
                    return response;
            } else {
                let errorMessage = response.status(response.statusText),
                error = new Error(errorMessage);
                throw(error);
            }
        })
        .then(response => response.json())
        .then(json =>{
            let emps = json.employees.employee;
            //Aquí pasamos los valores a español haciendo uso de un diccionario (objeto)
            emps.forEach(e => e.civil_status = this.estCivil[e.civil_status])
           this.setState({employees: emps})
        });
    }

    render(){
        return(
            <div className="Table container">
                <h2>Empleados</h2>
                <table className="table table-hover table-light 
                table-responsive table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Email</th>
                            <th scope="col">Cumpleaños</th>
                            <th scope="col">Edo. Civil</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map(function(item, key) {
                            return (
                                <tr key = {key}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.civil_status}</td>
                                </tr>
                            )
                        })
                    }
                            
                    </tbody>
                </table> 
            </div>
        );
    }
}

export default Table;