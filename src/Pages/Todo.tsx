import { FC, useCallback, useEffect, useState } from 'react'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { ToastContainer, toast } from 'react-toastify';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import { useFormik } from 'formik';
import { todoSchema } from '../Schema';
import { Link } from 'react-router-dom';


type TodoData = {
  text: string,
  id: number,
}

const Todo: FC = () => {

  const [todo, setTodo] = useState<TodoData[]>([])
  const [show, setShow] = useState(null)
  const [editText, setEditText] = useState<string>("")


  const { handleChange, touched, errors, values, handleSubmit } = useFormik<TodoData>({
    initialValues: {
      text: "",
      id: 1
    },
    validationSchema: todoSchema,
    onSubmit: (value) => {
      const id = todo.length > 0 ? todo[todo.length - 1].id + 1 : 1;
      setTodo([...todo, {
        text: value.text,
        id: id
      }])
      const tasks = [...todo, { text: values.text, id: id }]
      localStorage.setItem("todo", JSON.stringify(tasks))
    }

  })

  useEffect(() => {
    const store = localStorage.getItem("todo")
    if (store) {
      setTodo(JSON.parse(store))
    }
  }, [])


  const handleDelete = useCallback((id: number) => {
    const newTodo = todo.filter((el) => el.id !== id)
    setTodo(newTodo)
    localStorage.setItem("todo", JSON.stringify(newTodo))
  }, [todo])


  const handleShow = useCallback((id: any) => {
    setShow(show === id ? null : id)
    setEditText("")
  }, [show, editText, todo])


  const handleEdit = useCallback((data: string) => {

    if (!editText) {
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
    todo.find((e) => e.text === data ? e.text = editText : null)
    toast.success("Your task has been updated", {
      position: "top-left",
      autoClose: 2000
    })
    setTodo([...todo])
    localStorage.setItem("todo", JSON.stringify(todo))
    setShow(null)
    setEditText("")

  }, [todo, editText, show])


  return (

    <div className='main'>
      <Link to='/forms'>Form Valdiation</Link>
      <ToastContainer />
      <div className='headerDiv'>
        <form onSubmit={handleSubmit}>
          <input name='text' value={values.text} onChange={handleChange} placeholder='Add Task' />
          {errors.text && touched.text && <p>{errors.text}</p>}
          <button type='submit'><AddBoxRoundedIcon style={{ fontSize: 35, color: 'green' }} /></button>
        </form>
      </div>
      <hr></hr>
      <div className='tododiv'>
        {todo.length ? <>
          {todo.map((t, index) => (
            <div key={t.id} className='todo'>
              <span>{`${index + 1}: ${t.text}`}</span>
              <div>
                <button onClick={() => handleDelete(t.id)}><DeleteForeverRoundedIcon style={{ color: 'red', background: 'white', fontSize: 30 }} /></button>
                <button onClick={() => handleShow(t.id)}><ModeEditOutlineRoundedIcon style={{ color: 'black', fontSize: 30 }} /></button>
              </div>
              {show === t.id ?
                <>
                  <input type='text' placeholder='New Task' value={editText} onChange={(ev) => setEditText(ev.target.value)} />
                  <button className='btnUpdate' onClick={() => handleEdit(t.text)}>Update</button>
                </>
                :
                null
              }
            </div>
          ))}
        </>
          :
          <div className='emptyTask'>
            <h2>You have no current tasks</h2>
            <span><EditCalendarOutlinedIcon style={{ fontSize: 45 }} /></span>
          </div>
        }
      </div>
    </div>
  )
}

export default Todo;