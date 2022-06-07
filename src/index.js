import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.js';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript');

// todoList.nuevaTodo(tarea);

// //tarea.completado = true;

// console.log( todoList);

// crearTodoHtml( tarea );

//localStorage.setItem('my-key','ABC1234');
//sessionStorage.setItem('my-key','ABC123');

// setTimeout( () => {
//   localStorage.removeItem('my-key');

// }, 1500);

//console.log(todoList.todos);

//todoList.todos.forEach( todo => crearTodoHtml( todo ));
todoList.todos.forEach( crearTodoHtml );

//const newTodo = new Todo('Aprender JS');
//todoList.nuevaTodo( newTodo );
//todoList.todos[0].imprimirClase();

console.log( 'todos', todoList.todos );
