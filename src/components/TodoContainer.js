import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";  // this is a install by npm i uuid (Universal Unique Identifier)
class TodoContainer extends React.Component{
    state = {
        // todos: [
        //     {
        //         id: uuidv4(),
        //         title: "Setup development environment",
        //         completed: true
        //     },
        //     {
        //         id: uuidv4(),
        //         title: "Develop website and add content",
        //         completed: false
        //     },
        //     {
        //         id:uuidv4(),
        //         title: "Deploy to live server",
        //         completed: false
        //     }
        // ]
        todos: [], //free online REST API called JSONPlaceholder
    };
    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //         .then(response => response.json())
    //         .then(data => console.log(data));
    // }
    componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
          this.setState({
            todos: loadedTodos
          })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
          const temp = JSON.stringify(this.state.todos)
          localStorage.setItem("todos", temp)
        }
    }
    handleChange = (id) => {
        // this.setState({
        //     todos: this.state.todos.map(todo => {
        //       if (todo.id === id) {
        //         todo.completed = !todo.completed;
        //       }
        //       return todo;
        //     })
        // });
        // this.setState(prevState => ({
        //     todos: prevState.todos.map(todo => {
        //       if (todo.id === id) {
        //         todo.completed = !todo.completed
        //       }
        //       return todo
        //     }),
        // }))
        // this.setState(prevState => ({
        //     todos: prevState.todos.map(todo => {
        //       if (todo.id === id) {
        //         return {
        //           ...todo,
        //           completed: !todo.completed,
        //         }
        //       }
        //       return todo
        //     }),
        //   }))
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                    ...todo,
                    completed: !todo.completed,
                    }
                }
                return todo
                }),
            }
        })
    };
    
    // Please note the spread operator (…) in the code. It allows us to grab the current todos item(s) at every point. As this is necessary for the code to work.
    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                return todo.id !== id;
                })
            ]
        });
    };
    addTodoItem = title => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
        };
        
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
    };
    setUpdate = (updatedTitle, id) => {
        this.setState({
          todos: this.state.todos.map(todo => {
            if (todo.id === id) {
              todo.title = updatedTitle
            }
            return todo
          }),
        })
    }
    render() {
        return (
          <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo  addTodoProps={this.addTodoItem} />
                    {/* <TodosList todos={this.state.todos} /> */}
                    <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo}  setUpdate={this.setUpdate}/>
                </div>
            </div>
        );
    }
}
export default TodoContainer