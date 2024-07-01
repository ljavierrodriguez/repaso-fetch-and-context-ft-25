import React, { useContext, useState } from 'react'
import { Context } from '../store/AppContext'

const Contact = () => {

    const { store, actions } = useContext(Context)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: '',
        message: 'p'
    })


    const handleSubmit = (e) => e.preventDefault()

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(`Escribiendo en el campo ${name}`)

        setContact((contact) => {
            return {...contact, [name]: value }
        })
        switch(name){
            case 'name': setName(value);
                break;
            case 'email': setEmail(value);
                break;
            case 'subject': setSubject(value);
                break;
            case 'message': setMessage(value)
                break;
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className='text-center'>Contact</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                        <div className="form-group mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" name="name" id="name" className="form-control" placeholder='Name' 
                            onChange={(e) => {
                                actions.handleChangeContact(e)
                                handleChange(e)
                            }} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder='Email' onChange={actions.handleChangeContact} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="subject" className="form-label">Subject:</label>
                            <input type="text" name="subject" id="subject" className="form-control" placeholder='Subject' onChange={actions.handleChangeContact} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="message" className="form-label">Message:</label>
                            <textarea rows="6" name="message" id="message" placeholder='Message' className='form-control' onChange={actions.handleChangeContact}></textarea>
                        </div>
                        <button className="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact