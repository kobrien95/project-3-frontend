import { useNavigate, useParams } from "react-router"
import { Navigate } from "react-router"
import './CarPost.css';



export default function CarDetail(props){

    
    const { carId } = useParams()
    const navigate = useNavigate()

    const selectedCar = props.cars.find((car) => {
        return car._id === carId
    })  

    function handleDelete(){
        props.deleteCar(selectedCar._id)
        navigate('/')
      

    return (
        <section>
            <h2>{selectedCar.name}</h2>

            <span>Make: {selectedCar.make}</span>

            <br />

            <span>Model: {selectedCar.model}</span>

            <br />

            <span>Year: {selectedCar.year}</span>

            <br />

            <button onClick={handleDelete}>Delete</button>
            <br />
        </section>
    )
}}