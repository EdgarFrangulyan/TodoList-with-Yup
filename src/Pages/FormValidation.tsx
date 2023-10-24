import { useFormik } from 'formik';
import { FC, useState } from 'react'
import { Schema } from '../Schema';



type userData = {
    name: string,
    lName: string,
    email: string,
    password: string
}


const FormValidation: FC = () => {

    const [todo, setTodo] = useState<userData[]>([])


    const { handleChange, errors, touched, handleSubmit, values } = useFormik<userData>({
        initialValues: {
            name: "",
            lName: "",
            email: "",
            password: ""
        },
        validationSchema: Schema,
        onSubmit: (value) => {
            setTodo([...todo, {
                name: value.name,
                lName: value.lName,
                email: value.email,
                password: value.password
            }])
        },

    })


    return (
        <div className='tutDiv'>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input name='name'
                    value={values.name}
                    onChange={handleChange}
                    type='text'
                    placeholder='Name'
                    className={errors.name && touched.name ? "error-input" : ""}
                />
                {errors.name && touched.name && <p>{errors.name}</p>}
                <input name='lName'
                    value={values.lName}
                    onChange={handleChange}
                    type='text'
                    placeholder='Last Name'
                    className={errors.lName && touched.lName ? "error-input" : ""}
                />
                {errors.lName && touched.lName && <p>{errors.lName}</p>}
                <input
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    type='email'
                    placeholder='Email'
                    className={errors.email && touched.email ? "error-input" : ""}
                />
                {errors.email && touched.email && <p>{errors.email}</p>}
                <input
                    name='password'
                    type='password'
                    onChange={handleChange}
                    placeholder='Password'
                    className={errors.password && touched.password ? "error-input" : ""}

                />
                {errors.password && touched.password && <p>{errors.password}</p>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default FormValidation;
