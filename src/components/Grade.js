import React, { useState } from 'react';
import './Grade.css';
import note from '../assessts/note.svg';
import image from '../assessts/image.svg';
import up_down from '../assessts/up_down.svg';

function Grade() {
  const currentDate = new Date().toLocaleDateString();
  const [selectedOption, setSelectedOption] = useState(''); // move selectedOption state up to be used in DropdownFilter component
  const options = ['All', 'Pass', 'Fail'];

  const DropdownFilter = () => {
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(selectedOption.toLowerCase())
    );

    return (
      <div>
        <label htmlFor="dropdown">Select an option:</label>
        <select id="dropdown" value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
          <option value="">All options</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ul>
          {filteredOptions.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="grade_book_project">
        <header>
          <img src={note} alt="note icon" /> The <span> GradeBook</span>Project
        </header>

        <div className="grade_book_desc">
          <div className="left">
            <span className="intro">Introduction to Computer Engineering</span>
            <span className="date"> {currentDate}</span>
          </div>

          <div className="right">
            <div className="rightPart">
              <span className="right_header">Professor's name</span>
              <span className="right_desc">Mir Junaid Rasool</span> {/* remove commented out code and replace with static text */}
            </div>

            <div className="rightPart">
              <span className="right_header">College</span>
              <span className="right_desc">Lovely</span>
            </div>

            <div className="rightPart">
              <span className="right_header">Department</span>
              <span className="right_desc">CSE</span>
            </div>

            <div className="rightPart">
              <span className="right_header">Semester</span>
              <span className="right_desc">Spring {currentDate}</span>
            </div>
          </div>
        </div>

        <div className="buttons">
          <div className="left_button">
            <button className="Statistics">Show Statistics</button> 
            {/* fix typo in button class */}
            <DropdownFilter /> {/* call the DropdownFilter component */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Grade;
