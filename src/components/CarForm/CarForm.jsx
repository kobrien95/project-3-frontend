
import { useState } from 'react'
import './CarForm.css'


import { useNavigate } from 'react-router'

const initialState = {
    brand: '',
    year: 0,
    model: ''
}

export default function CarForm(props) {

    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        props.createCar(formData)
        setFormData(initialState)

        navigate('/')
    }

    return (
        <form className='car-form' onSubmit={handleSubmit}>
            <label htmlFor="make">Make:</label>
            <input type="text" name='make' id='make' value={formData.make} onChange={handleChange} />

            <label htmlFor="model">Model:</label>
            <input type="text" name='model' id='model' value={formData.model} onChange={handleChange} />

            <label htmlFor="year">Year:</label>
            <input type="text" name='year' id='year' value={formData.year} onChange={handleChange} />



            <button type='submit'>Create Car</button>
        </form>
    )
}
