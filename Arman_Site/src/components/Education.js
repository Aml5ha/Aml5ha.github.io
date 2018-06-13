import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>University of Virginia - Charlottesville, VA</h3>
          <p className="info">
            Pursuing a Bachelors of Science in Computer Science
            <span>&bull;</span>
            <em className="date">Expected Graduation: May 2019</em>
          </p>
          <ul>
            <li>Dean's List</li> 
            <li>Teaching Assistant for Digital Logic Design</li> 
            <li>CS Research</li> 
          </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Henrico High School - Richmond, VA</h3>
          <p className="info">
            Advanced Studies High School Diploma & International Baccalaureate (IB) Diploma
            <span>&bull;</span>
            <em className="date">June 2015</em>
          </p>

           <ul>
            <li>Wise Financial Literacy Certification</li> 
            <li>President of Recycling Club</li> 
            <li>Debate Team</li> 
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
