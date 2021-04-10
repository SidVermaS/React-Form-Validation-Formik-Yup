import React from 'react'
import {useFormik,FormikProvider, Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Register = () => {
    const registerSchema=Yup.object().shape({
        name: Yup.string().min(4, 'At least 4 characters').max(32, 'At most 32 characters').required('Name is required'),
        phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone is invalid').required('Phone is required'),
        email: Yup.string().email('Email is invalid').required('Email is mandatory'),
        password: Yup.string().min(6, 'At least 6 characters').max(32, 'At most 32 characters').required('Password is required'),
        confirm_password: Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required('Password is required')
    })

    const formik=useFormik({
        initialValues:  {
            name: '',
            phone: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        validationSchema: registerSchema,
        onSubmit:(values)=> {
            console.log(values)
        }
    })

    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                    <h3>Register</h3>
                    <Field name='name' type='text' placeholder='Enter name' /><br/>
                    <ErrorMessage name='name'   /><br/>

                    <Field name='phone' type='number' placeholder='Enter phone' /><br/>
                    <ErrorMessage name='phone'   /><br/>

                    <Field name='email' type='email' placeholder='Enter email' /><br/>
                    <ErrorMessage name='email'   /><br/>

                    <Field name='password' type='password' placeholder='Enter password' /><br/>
                    <ErrorMessage name='password'   /><br/>

                    <Field name='confirm_password' type='password' placeholder='Enter confirm password' /><br/>
                    <ErrorMessage name='confirm_password'   /><br/>

                    <button type='submit' disabled={!formik.isValid}>Submit</button>
                    <button type='reset'>Reset</button>
                </form>
            </FormikProvider>
        </div>
    )
}

export default Register
