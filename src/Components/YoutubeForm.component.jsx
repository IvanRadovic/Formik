import React from 'react'
import { useFormik } from 'formik'

const YoutubeForm = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    },

    onSubmit: (values) => {
      console.log(values)
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={formik.values.name}
          type="text"
          id='name'
          name='name'
          onChange={formik.handleChange}
        />

        <label htmlFor="email"> Email</label>
        <input
          value={formik.values.email}
          type="email"
          id='email'
          name='email'
          onChange={formik.handleChange}
        />

        <label htmlFor="channel">Channel</label>
        <input
          value={formik.values.channel}
          type="text"
          id='channel'
          name='channel'
          onChange={formik.handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm