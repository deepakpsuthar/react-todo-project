import React,{ useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
import { IconContext } from "react-icons"

// const InputTodo = props => {
// //   const [title, setTitle] = useState("")
//     const [inputText, setInputText] = useState({
//         fName: "",
//         lastName: "",
//     })
//   const onChange = e => {
//     // setTitle(e.target.value)
//     // setInputText({
//     //     ...inputText,
//     //     [e.target.name]: e.target.value,
//     // })
//     setInputText(prevState => {
//         return {
//           ...prevState,
//           [e.target.name]: e.target.value,
//         }
//       })
// }
 
//     //   const handleSubmit = e => {
//     //     e.preventDefault()
//     //     if (title.trim()) {
//     //       props.addTodoProps(title)
//     //       setTitle("")
//     //     } else {
//     //       alert("Please write item")
//     //     }
//     //   }
//     const handleSubmit = e => {
//         e.preventDefault()
//         console.log("submitted")
//     }

//   return (
//     <>
//         <form onSubmit={handleSubmit} className="form-container">
//             <input
//             type="text"
//             className="input-text"
//             placeholder="Add first name"
//             value={inputText.fName}
//             name="fName"
//             onChange={onChange}
//             />
//             <input
//             type="text"
//             className="input-text"
//             placeholder="Add last name"
//             value={inputText.lastName}
//             name="lastName"
//             onChange={onChange}
//             />
//             <button className="input-submit">Submit</button>
//         </form>
//         <h2>{inputText.fName}</h2>
//         <h2>{inputText.lastName}</h2>
//     </>
//   )
// }
const InputTodo = props => {
    const [inputText, setInputText] = useState({
      title: "",
    })
  
    const onChange = e => {
      setInputText({
        ...inputText,
        [e.target.name]: e.target.value,
      })
    }
  
    const handleSubmit = e => {
      e.preventDefault()
      if (inputText.title.trim()) {
        props.addTodoProps(inputText.title)
        setInputText({
          title: "",
        })
      } else {
        alert("Please write item")
      }
    }
  
    return (
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          name="title"
          onChange={onChange}
        />
        {/* <button className="input-submit">
            <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
        </button> */}
        {/* <button className="input-submit">
            <FaPlusCircle
                style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
            />
        </button> */}
        <IconContext.Provider
            value={{
              color: "darkcyan",
              style: { fontSize: "20px", color: "#ff0000" },
              className: "submit-iconn",
            }}
          >
            <button className="input-submit">
              <FaPlusCircle />
            </button>
          </IconContext.Provider>
      </form>
    )
}

export default InputTodo