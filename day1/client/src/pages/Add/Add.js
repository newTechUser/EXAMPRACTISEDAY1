import React, { useState } from 'react'
import { Formik , Form , Field} from 'formik'
import axios from 'axios'
import * as Yup from "yup"
import './Add.css'

const teacherSchema = Yup.object().shape({
  name:Yup.string().min(5).max(30).required("please enter n\name")
})

function Add() {
  const [sendcase,setsendcase] = useState(false)


  return (
    <div className='add'>
     <p className='addpage'>Add page</p>
      <div className='form'>
          <Formik
            initialValues={{
              url:"",
              name:"",
              subject:"",
              description:""
            }}
            validationSchema = {teacherSchema}
            onSubmit = {values => {
              const data = {
                teacherimage:values.url,
                teachername:values.name,
                teachersubject:values.subject,
                teacherdescription:values.description
              }
              axios.post("http://localhost:5000/teacher",data)
              .then(res=>res.status)
              }}
          >
            {({errors,touched})=>{
            return(
              <Form>
                <Field className="input" name="url" type='text' placeholder='img url :' /><br/><br/>
                <Field className="input" name="name" type='text' placeholder='name :' /><br/>
                {errors.name && touched.name? <div style={{color:"red",fontSize:12}}>{errors.name}</div>:null}
                
                <br/>
                
                <Field className="input" name="subject" type='text' placeholder='subject :' /><br/><br/>
                <Field className="input" name="description" type='text' placeholder='description :' /><br/><br/>
                <button className='formbtn' type='submit'>Save</button>
              </Form>
            )}}
          </Formik>
      </div>
    </div>
  )
}

export default Add