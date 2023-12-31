import React from 'react'
import { useFormik } from 'formik'
import * as  Yup from 'yup';


const initialValues = {
     name: '',
     email: '',
     channel: ''
}

const onSubmit = values => {
     console.log(values)
}

const validationSchema = Yup.object({
     name: Yup.string().required(),
     email: Yup.string().required(),
     channel: Yup.string().required()
})

const validate = values => {
     let errors = {};

     if (!values.name) {
          errors.name = 'Required'
     }

     if (!values.email) {
          errors.email = 'Required'
     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email format'
     }

     if (!values.channel) {
          errors.channel = 'Required'
     }

     return errors;
}

const OldYoutubeForm = () => {

     const formik = useFormik({
          initialValues,
          onSubmit,
          validate,
          validationSchema
     });

     console.log("Visited fields: ", formik.touched)

     return (
          <div>
               <form onSubmit={formik.handleSubmit}>
                    <div className='form-control'>
                         <label htmlFor="name">Name</label>
                         <input
                              value={formik.values.name}
                              type="text"
                              id='name'
                              name='name'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                         />
                         {formik.touched.name &&
                              formik.errors.name ? (<div className='error'>{formik.errors.name}</div>) : null}
                    </div>

                    <div className='form-control'>
                         <label htmlFor="email"> Email</label>
                         <input
                              value={formik.values.email}
                              type="email"
                              id='email'
                              name='email'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                         />
                         {formik.touched.email &&
                              formik.errors.email ? (<div className='error'>{formik.errors.email}</div>) : null}
                    </div>

                    <div className='form-control'>
                         <label htmlFor="channel">Channel</label>
                         <input
                              value={formik.values.channel}
                              type="text"
                              id='channel'
                              name='channel'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                         />
                         {formik.touched.channel &&
                              formik.errors.channel ? (<div className='error'>{formik.errors.channel}</div>) : null}
                    </div>

                    <button type='submit'>Submit</button>
               </form>
          </div>
     )
}

export default OldYoutubeForm