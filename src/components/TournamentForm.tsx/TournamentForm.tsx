import React from "react";

export const TournamentForm = () => {
  return (
    <>
      <div>
        <label>Tournament Name: </label>
        <input type="text" />
      </div>
      <div>
        <label>Number of Rounds: </label>
        <input type="number" />
      </div>
      <div>
        <label>Round Duration: </label>
        <input type="number" />
      </div>
      <div>
        <label>Scoring Type: </label>
        {/* select drop down */}
      </div>
      <div>
        <label>Using Gaining grounds: </label>
        {/* yes/no drop down */}
      </div>
      <div>
        <label>Select a Season: </label>
        {/* select drop down */}
      </div>
      <div>
        <label>Allow Multiple Masters: </label>
        {/* radio buttons */}
      </div>
      <div>
        <label>Allowing Grudges: </label>
        {/* radio buttons */}
      </div>
    </>
  );
};
