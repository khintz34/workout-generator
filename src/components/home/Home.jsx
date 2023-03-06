import React from "react";
import { MuscleGroup, WorkoutType } from "../../assets/choices";
import Choice from "../choices/Choice";
import Dropdown from "../dropdown/Dropdown";
import Header from "../header/Header";
import "./home.css";

const Home = () => {
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
        onChange={(value) => console.log(value)}
      />
      {/* <Choice
        title="Choose Muscle Group"
        for="groupChoice"
        list={MuscleGroup}
      /> */}
      {/* <Choice title="Choose Workout Type" for="typeChoice" list={WorkoutType} /> */}
      <button className="buttonGenerate">Generate Workout</button>
    </div>
  );
};

export default Home;
