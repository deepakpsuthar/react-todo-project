// import { render } from "@testing-library/react"
import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    state = {
        editing: false,
    }
    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }
    handleUpdatedDone = event => {
        if (event.key === "Enter") {
            this.setState({ editing: false })
        }   
    }
    componentWillUnmount() {
        console.log("Cleaning up...")
    }
    render() {
        const { completed, id, title } = this.props.todo
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input 
                        type="checkbox" 
                        className={styles.checkbox}
                        checked={completed}   
                        onChange={() => this.props.handleChangeProps(id)}
                    />
                    <button  onClick={() => this.props.deleteTodoProps(id)}>
                        Delete
                    </button> 
                    <span style={this.props.todo.completed ? completedStyle : null}>
                        {title}
                    </span>
                </div>
                <input type="text" style={editMode} className={styles.textInput} value={title} onChange={e => {
                   this.props.setUpdate(e.target.value, id)}}
                    onKeyDown={this.handleUpdatedDone}
                />
            </li>
        )
    }
}


// function TodoItem(props) {
//     const { completed, id, title } = props.todo
//     const completedStyle = {
//         fontStyle: "italic",
//         color: "#595959",
//         opacity: 0.4,
//         textDecoration: "line-through",
//     }    
    
//     return (
//         <li className={styles.item}>
//             <div onDoubleClick={props.handleEditing} style={props.viewMode}>
//                 <input 
//                     type="checkbox" 
//                     className={styles.checkbox}
//                     checked={completed}   
//                     onChange={() => props.handleChangeProps(id)}
//                 />
//                 <button  onClick={() => props.deleteTodoProps(id)}>
//                     Delete
//                 </button> 
//                 <span style={props.todo.completed ? completedStyle : null}>
//                     {title}
//                 </span>
//             </div>
//             <input type="text" style={props.editMode} className={styles.textInput} value={title} onChange={e => {
//                 props.setUpdate(e.target.value, id)}}
//                 onKeyDown={props.handleUpdatedDone}
//             />
//         </li>
//     )
// }
export default TodoItem