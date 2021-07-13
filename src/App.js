import React, { Component } from 'react';
import logo from './srs.gif';

// con esto cambiamos el logo.svg que viene por nuestro propio logo, que en este caso es un .gif pero nos sirve cualquier formato.

import './App.css';

// aquí aplicamos el estilo solo a .App, el resto queda fuera.

// datos de las tareas. 
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';
// Recordemos que el nombre puede ser el que queramos pero en react empieza en mayúsculas. 

class App extends Component {

  // es quí donde pondremos todo lo que va dentro de la .App 

  // Recuerda que para usar la libreria de Boostrap, no podemos ingresar codigo html aquí, lo haremos en el archivo html de la carpeta public. 
  // Fuente: https://getbootstrap.com/docs/5.0/getting-started/introduction/, en el apartado CSS, copiamos el link. 
  // Link: <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  
  constructor() {
    super();
    this.state = {
      todos
      // Todos viene de lo que pusimos en el archivo todos.json 
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  // con todo esto heredamos toda la funcionalidad de react y ya podemos empezar con el código. 
  
  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  // para que el boton de borrar nos pueda servir. 

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
     
      // con esta función recorre las tareas y nos dice el número que tenemos actualmente. 
      
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.tarea}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {/* cono esto le damos el estilo a las prioridades */}
                {todo.prioridad}
              </span>
            </div>
            <div className="card-body">
              <p><mark>{todo.responsable}</mark></p>
              {/* añadiendo mark podemos luego personalizar solo el responsable */}
              <p>{todo.dia}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Borrar
              </button>
            </div>
          </div>
        </div>
      )
    });

    //con este código en return hemos creado el modelo de la tarjeta. 

    // RETURN THE COMPONENT
    return (
      <div className="App">

        {/* <nav className="navbar navbar-light bg-warning">

          {/* al hacer el menú con boostrap no se puede personalizar tan facilmente los colores, por lo que hemos elegido el amarillo */}
          {/* fuente: https://getbootstrap.com/docs/5.0/utilities/colors/ y https://getbootstrap.com/docs/5.0/components/navbar/ */}
          
          {/* <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav> */} 

        {/* "El código comentado es si quisieramos hacer el menú con boostraprap, pero debido a las limitaciones hemos optado por crearlo de forma normal" */}

      <nav className="nav">

        {/* También podríamos crearlo como componente y añadirlo tan solo poniendo <navegacion/> */}

          <a className="navbar-brand" href="/">
          
          <img src={logo} alt="logo" width="50" height="50" ></img>
          &nbsp;Tareas 
            
          <span className="badge badge-pill badge-light ml-2">
            {this.state.todos.length}
            {/* Con esto nos muestra cuantas tareas tenemos ahora y con círculo blanco */}
          </span>
        </a>
      </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* así es como venía el logo en la plantilla */}
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
              {/* Con esto podemos ir actualizando el formulario, lo que le pasamos es un método */}
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
