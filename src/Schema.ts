import * as yup from 'yup'

const password = /^([A-Z|1-9]+)[a-z|1-9|A-z]{5,20}$/

export const Schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  lName: yup.string().required("Last Name is required"),
  email: yup.string().email("Please enter a valid Email").required("Email is required"),
  password: yup.string().min(5).matches(password, {message: "Please enter a valid password"}).required()  
})


export const todoSchema = yup.object().shape({
  text: yup.string().required("Task cannot be empty"),
})


















/*

const handleClick = useCallback(() => {
  if (!value) {
    toast.error('Value is required', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return
  }
  const id = todo.length > 0 ? todo[todo.length - 1].id + 1 : 1;
  setTodo([...todo, {
    text: value,
    id: id
  }])
  const tasks = [...todo, { text: value, id: id }]
  localStorage.setItem("todo", JSON.stringify(tasks))
  setValue("")
}, [value, todo])









/*


 <div className='tutDiv'>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input value={values.name} type='text' placeholder='Name'/>
                <input value={values.lName} type='text' placeholder='Last Name' />
                <input value={values.email} type='email' placeholder='Email' />
                <button><AddBoxRoundedIcon style={{fontSize: 45, color: 'green'}}/></button>
            </form>
        </div>


*/