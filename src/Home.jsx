import React from "react";
import "./Home.scss";
import Task from "./Task";

const Home = () => {
  return (
    <div className="container">
      <form>
        <input className="inputs" type="text" placeholder="title" />
        <textarea className="text-area" placeholder="description" />
        <button>Add</button>
      </form>
      <Task />
    </div>
  );
};

export default Home;
