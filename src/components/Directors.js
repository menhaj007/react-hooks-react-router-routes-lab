import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
      <h1>Directors Page</h1>
      { directors.map(director => <div key={director.name}>{director.name} {director.movies.map((movie, id) => <ul key={id}>{<li>{movie}</li>}</ul>)}</div>)}
    </div>;
}

export default Directors;
