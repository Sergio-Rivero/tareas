import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      tarea: '',
      responsable: '',
      dia: '',
      prioridad: 'alta'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // ambos this son necesarios para poder enlazarlos y que al escribir algo lo cambie realmente. 
  }

  handleSubmit(e) {
    e.preventDefault();
    // e.preventDefault es para evitar tener que refrescar la pantalla.
    this.props.onAddTodo(this.state);
    this.setState({
      tarea: '',
      responsable: '',
      dia: '',
      prioridad: 'Alta'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  // Esta es la función que hará que cada vez que escriba algo lo cambie.

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          {/* onSubmit es lo que ejecutará cuando envíe el formulario, y handleSubmit el nombre que le hemos dado antes */}
          <div className="form-group">
            <input
              type="text"
              name="tarea"
              className="form-control"
              value={this.state.tarea}
              onChange={this.handleInputChange}
              placeholder="Tarea"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              className="form-control"
              value={this.state.responsable}
              onChange={this.handleInputChange}
              placeholder="Responsable"
              />
          </div>
          <div className="form-group">
            <input
              type="data"
              name="dia"
              className="form-control"
              value={this.state.dia}
              onChange={this.handleInputChange}
              placeholder="Día de la semana"
              />
          </div>
          <div className="form-group">
            <select
                name="prioridad"
                className="form-control"
                value={this.state.prioridad}
                onChange={this.handleInputChange}
              >
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
