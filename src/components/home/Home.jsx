import React, { useState } from "react";
import { MuscleGroup, WorkoutType } from "../../assets/choices";
import Choice from "../choices/Choice";
import Dropdown from "../dropdown/Dropdown";
import Header from "../header/Header";
import "./home.css";

const Home = () => {
  const [selectedMuscles, setSelectedMuscles] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const apiKey = "YL6YrzyOHKR2uAUyAxRw3g==P8Wgnch0sp4c4ted";

  //! need to work on the option.value since its coming in as an array. need to .map and
  //! run multiple times

  //! Will also need to see if workout type is selected and then choose which one to get

  async function fetchData(option) {
    console.log(option);
    const url = `https://api.api-ninjas.com/v1/exercises?muscle=${option[0].value}`;
    fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: { "X-Api-Key": apiKey },
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <Header />
      <h2>Choose Muscle Groups</h2>
      <Dropdown
        placeHolder="Select..."
        options={MuscleGroup}
        heading="Choose Muscle Groups"
        isMulti
        isSearchable
        onChange={(value) => {
          console.log(value);
          fetchData(value);
        }}
      />
      <h2>Choose Workout Type</h2>
      <Dropdown
        placeHolder="Select..."
        options={WorkoutType}
        heading="Choose Workout Type"
        isSearchable
        onChange={(value) => fetchData(value)}
      />
      <button className="buttonGenerate">Generate Workout</button>
    </div>
  );
};

export default Home;
