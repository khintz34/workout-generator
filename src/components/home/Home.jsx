import React, { useContext, useEffect, useState } from "react";
import { MuscleGroup, WorkoutType } from "../../assets/choices";
import Choice from "../choices/Choice";
import Dropdown from "../dropdown/Dropdown";
import Header from "../header/Header";
import "./home.css";
import { Link } from "react-router-dom";
import {
  ApiFlag,
  ExerciseNumberContext,
  WorkoutListContext,
} from "../../contexts/workoutList";

const Home = () => {
  const [muscleStatus, setMuscleStatus] = useState(false);
  const [typeStatus, setTypeStatus] = useState(false);
  const [selectedMuscles, setSelectedMuscles] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [urlEnding, setUrlEnding] = useState(null);
  const { workoutList, setWorkoutList } = useContext(WorkoutListContext);
  const { apiFlag, setApiFlag } = useContext(ApiFlag);
  const [array, setArray] = useState([]);
  const { exerciseNumber, setExerciseNumber } = useContext(
    ExerciseNumberContext
  );
  const [workoutComplete, setWorkoutComplete] = useState(false);

  const apiKey = "YL6YrzyOHKR2uAUyAxRw3g==P8Wgnch0sp4c4ted";

  useEffect(() => {
    setExerciseNumber(3);
    setWorkoutComplete(false);
  }, []);

  //! Need to make sure when you get rid of all options that it resets.

  async function callFetch() {
    setWorkoutComplete(false);
    console.log("selected Muscles: ", selectedMuscles);
    console.log("selected Type: ", selectedType);
    if (selectedMuscles !== null && selectedMuscles !== undefined) {
      if (selectedType !== null && selectedType !== undefined) {
        console.log("workout and type");
        console.log(selectedMuscles);
        console.log(selectedType);

        const promises = selectedMuscles.map(async (option) => {
          const data = await fetchData(option.value, selectedType.value);
          return data;
        });

        const results = await Promise.all(promises);

        results.map((array) => {
          let newArray = array.json1;
          const randomList = shuffleArray(newArray);
          console.log("random", randomList);
          console.log(array);
        });

        console.log("results", results);

        setWorkoutList(results);
        setWorkoutComplete(true);
      } else {
        console.log("just workout");
        const promises = selectedMuscles.map((option) =>
          fetchData(option.value, null)
        );

        const results = await Promise.all(promises);

        results.map((array) => {
          let newArray = array.json1;
          const randomList = shuffleArray(newArray);
          // console.log("random", randomList);
        });

        console.log("results", results);

        setWorkoutList(results);
        setWorkoutComplete(true);
      }
    } else {
      console.log("just type");
      const promises = fetchData(null, selectedType.value);

      let results = await Promise.resolve(promises);

      results = shuffleArray(results.json1);

      console.log("results", results);

      setWorkoutList([results]);
      setWorkoutComplete(true);
    }
  }

  async function fetchData(muscle, type) {
    console.log("fetching data");
    let url;
    if (selectedMuscles !== null && selectedMuscles !== undefined) {
      if (selectedType !== null && selectedType !== undefined) {
        url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&type=${type}`;
        setApiFlag("both");
        console.log("both");
      } else {
        url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;
        setApiFlag("muscle");
      }
    } else {
      url = `https://api.api-ninjas.com/v1/exercises?type=${type}`;
      setApiFlag("type");
    }

    const response = await fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: { "X-Api-Key": apiKey },
    });

    const json1 = await response.json();

    console.log("json1", json1);

    return { json1 };

    //! add try catch
  }

  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <div className="home-container">
      <Header />
      <div className="home-main">
        <div className="question-container">
          <h2>Choose Muscle Groups</h2>
          <Dropdown
            placeHolder="Select..."
            options={MuscleGroup}
            heading="Choose MuscleGroup"
            isSearchable
            isMulti
            onChange={(value) => setSelectedMuscles(value)}
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
        <div className="question-container">
          <h2>Number of Exercises per Muscle?</h2>
          <input
            type="number"
            value={exerciseNumber}
            max={10}
            min={1}
            className="exerciseNumberInput"
            step={1}
            placeholder="1-10"
            onChange={(e) => {
              const number = Number(e.target.value);
              setExerciseNumber(number);
            }}
          />
        </div>
        <div className="generateButtonHolder">
          <button className="buttonGenerate" onClick={callFetch}>
            Generate Workout
          </button>
          {workoutComplete ? (
            <Link to="/workout">
              <button className="buttonGenerate buttonView">
                View Workout
              </button>
            </Link>
          ) : (
            <div className="generateButtonHolder"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
