import React, { useContext, useEffect, useState } from "react";
import { MuscleGroup, WorkoutType } from "../../assets/choices";
import Choice from "../choices/Choice";
import Dropdown from "../dropdown/Dropdown";
import Header from "../header/Header";
import "./home.css";
import { Link } from "react-router-dom";
import { ApiFlag, WorkoutListContext } from "../../contexts/workoutList";

const Home = () => {
  const [muscleStatus, setMuscleStatus] = useState(false);
  const [typeStatus, setTypeStatus] = useState(false);
  const [selectedMuscles, setSelectedMuscles] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [urlEnding, setUrlEnding] = useState(null);
  const { workoutList, setWorkoutList } = useContext(WorkoutListContext);
  const { apiFlag, setApiFlag } = useContext(ApiFlag);
  const [array, setArray] = useState([]);

  const apiKey = "YL6YrzyOHKR2uAUyAxRw3g==P8Wgnch0sp4c4ted";

  async function callFetch() {
    console.log("selected Muscles: ", selectedMuscles);
    console.log("selected Type: ", selectedType);
    if (selectedMuscles !== null && selectedMuscles !== undefined) {
      if (selectedType !== null && selectedType !== undefined) {
        console.log("workout and type");
        selectedMuscles.map((option) => {
          console.log(selectedType);
          fetchData(option.value, selectedType.value);
        });
        console.log(array, "new Araay here");
      } else {
        console.log("just workout");
        // selectedMuscles.map((option, { selectedType }) =>
        //   fetchData(option.value, null)
        // );
        const promises = selectedMuscles.map((option) =>
          fetchData(option.value, null)
        );

        const results = await Promise.all(promises);

        console.log(results);

        setWorkoutList(results);
      }
    } else {
      console.log("just type");
      fetchData(null, selectedType.value);
    }
  }

  async function fetchData(muscle, type) {
    console.log("fetching data");
    let url;
    if (selectedMuscles !== null && selectedMuscles !== undefined) {
      if (selectedType !== null && selectedType !== undefined) {
        url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&type=${type}`;
        setApiFlag("both");
      } else {
        url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;
        setApiFlag("muscle");
      }
    } else {
      url = `https://api.api-ninjas.com/v1/exercises?type=${type}`;
      setApiFlag("type");
    }

    let response = await fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: { "X-Api-Key": apiKey },
    });

    let json1 = await response.json();

    setWorkoutList(json1);

    return { json1 };

    //! add try catch

    // .then((resp) => {
    //   return resp.json();
    // })
    // .then(function (data) {
    //   array.push(data);
    //   console.log("array", array);
    //   console.log(data);
    //   setWorkoutList(data);
    //   return [data];
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  return (
    <div className="home-container">
      <Header />
      <div className="question-container">
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
      </div>
      <div className="question-container">
        <h2>Choose Workout Type</h2>
        <Dropdown
          placeHolder="Select..."
          options={WorkoutType}
          heading="Choose Workout Type"
          isSearchable
          onChange={(value) => setSelectedType(value)}
        />
      </div>
      {/* <Link to="/workout"> */}
      <button className="buttonGenerate" onClick={callFetch}>
        Generate Workout
      </button>
      {/* </Link> */}
      <Link to="/workout">
        <button>Go TO</button>
      </Link>
    </div>
  );
};

export default Home;
