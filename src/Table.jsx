import React from 'react';
import './Table.css';

class Table extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
        }
    } 

    componentDidMount() {
        this._getData();
    }


    _getData = () => {
        fetch("https://virtual-assistant-src.s3.amazonaws.com/employees.json")
        .then(response => {
            if (response.ok) {
                    return response;
            } else {
                let errorMessage = "${response.status(${response.statusText})",
                error = new Error(errorMessage);
                throw(error);
            }
        })
        .then(response => response.json())
        .then(json =>{
           console.log(json);
           this.setState({data: json.employees.employee})
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
                    {this.state.data.map(function(item, key) {
                        
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
                    })}
                        
                    </tbody>
                </table> 
            </div>
        );
    }
}

export default Table;