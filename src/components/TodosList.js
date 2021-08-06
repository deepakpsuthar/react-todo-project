import React from "react"
import TodoItem from "./TodoItem"

class TodosList extends React.Component{
    
    
    render(){
      
        return(
            <ul>
                 {this.props.todos.map(todo => (
                    //  <TodoItem key={todo.id} todo={todo} />
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                        handleEditing={this.handleEditing}
                        setUpdate={this.props.setUpdate}
                    />
                ))}
            </ul>
        )
    }
}

export default TodosList

// localStorage.setItem("key", "value")  its always store string   add by key and value and this is run in console 
// localStorage.getItem("key")     we can get stored data by this 
// localStorage.removeItem("key")  remove data by key 
// localStorage.clear()     clear storage by this 