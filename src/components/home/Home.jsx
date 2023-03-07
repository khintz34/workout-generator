import React, { useEffect, useState } from "react";
import { MuscleGroup, WorkoutType } from "../../assets/choices";
import Choice from "../choices/Choice";
import Dropdown from "../dropdown/Dropdown";
import Header from "../header/Header";
import "./home.css";

const Home = () => {
  const [muscleStatus, setMuscleStatus] = useState(false);
  const [typeStatus, setTypeStatus] = useState(false);
  const [selectedMuscles, setSelectedMuscles] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [urlEnding, setUrlEnding] = useState(null);

  const apiKey = "YL6YrzyOHKR2uAUyAxRw3g==P8Wgnch0sp4c4ted";

  //! Will also need to see if workout type is selected and then choose which one to get

  // getting undefined

  function callFetch() {
    console.log(selectedMuscles, selectedType);
    if (selectedMuscles !== null || selectedMuscles !== undefined) {
      if (selectedType !== null || selectedType !== undefined) {
        selectedMuscles.map((option, { selectedType }) =>
          fetchData(option.value, selectedType.value)
        );
      } else {
        selectedMuscles.map((option, { selectedType }) =>
          fetchData(option.value, null)
        );
      }
    } else {
      fetchData(null, selectedType.value);
    }
  }

  async function fetchData(muscle, type) {
    let url;
    if (selectedMuscles !== null || selectedMuscles !== undefined) {
      if (selectedType !== null || selectedType !== undefined) {
        url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&type=${type}`;
      } else {
        url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;
      }
    } else {
      url = `https://api.api-ninjas.com/v1/exercises?type=${type}`;
    }
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
          setSelectedMuscles(value);
        }}
      />
      <h2>Choose Workout Type</h2>
      <Dropdown
        placeHolder="Select..."
        options={WorkoutType}
        heading="Choose Workout Type"
        isSearchable
        onChange={(value) => setSelectedType(value)}
      />
      <button className="buttonGenerate" onClick={callFetch}>
        Generate Workout
      </button>
    </div>
  );
};

export default Home;
