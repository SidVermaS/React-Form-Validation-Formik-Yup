import React from 'react'
import {useFormik,FormikProvider} from 'formik'
import * as Yup from 'yup'
const Register = () => {

    const registerSchema=Yup.object().shape({
        name: Yup.string().min(4, 'Minimum 4 charaters').max(40, 'Maximum 40 characters').required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone is invalid').required('Phone is required'),
        password: Yup.string().min(6,'Atleast 4 characters').max(32, 'Atmost 32 characters').required(),
        confirm_password: Yup.string().oneOf([Yup.ref('password'),null], 'Passwords must match').required('Password is mandatory')
    })
    const formik=useFormik({
        initialValues:  {
            name: '',
            email: '',
            phone: '',
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
            <h3>Register</h3>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                    <input type='text' name='name' placeholder='Enter name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} /><br/>
                    {formik.touched.name && formik.errors.name?formik.errors.name:null}<br/>

                    <input type='email' name='email' placeholder='Enter email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}    /><br/>
                    {formik.touched.email && formik.errors.email?formik.errors.email:null}<br/>

                    <input type='number' name='phone' placeholder='Enter phone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} /><br/>
                    {formik.touched.phone && formik.errors.phone?formik.errors.phone:null}<br/>

                    <input type='password' name='password' placeholder='Enter password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}    /><br/>
                    {formik.touched.password && formik.errors.password?formik.errors.password:null}<br/>

                    <input type='password' name='confirm_password' placeholder='Enter confirm password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirm_password} /><br/>
                    {formik.touched.confirm_password && formik.errors.confirm_password?formik.errors.confirm_password:null}<br/>

                    <input type='submit' value='Submit' />
                    <input type='reset' value='Reset' />
                </form>
            </FormikProvider>
        </div>
    )
}

export default Register
