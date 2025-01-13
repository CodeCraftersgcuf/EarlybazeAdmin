import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';

const LoginCan = () => {
    const initialValues = {
        email: '',
        password: '',
      };
    
      const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      });
    
      const handleSubmit = (values) => {
        console.log('Form Data:', values);
      };
    return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                    <Form>
                        <InputField
                            label="Email Address"
                            type="email"
                            name="email"
                            placeholder="Input email address"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email}
                            touched={touched.email}
                        />
                        <InputField
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Input password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password}
                            touched={touched.password}
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
                        >
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
    )
}

export default LoginCan