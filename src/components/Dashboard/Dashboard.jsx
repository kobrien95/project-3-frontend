// src/components/Dashboard/Dashboard.jsx

import { useEffect, useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import { Link } from "react-router";

import * as userService from "../../services/userService";

import "./Dashboard.css"; // Import the CSS file

const Dashboard = (props) => {
  const { user } = useContext(UserContext);

  const carLis = props.cars.map((car) => {
    return (
      <li key={car._id} onClick={() => props.setCar(car)}>
        {car.brand}: {car.model}: {car.year}
      </li>
    );
  });

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      {carLis}
      <p>
        This is the dashboard page where you can see a list of all the cars.
        <li>
          <Link to="/cars/new">Create Car</Link>
        </li>
      </p>
    </main>
  );
};

export default Dashboard;
