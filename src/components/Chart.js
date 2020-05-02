import React from 'react';
import {Polar, Doughnut} from 'react-chartjs-2';
// import skillsPic from "../Skills.png";
// <img src={skillsPic} width="2500" height="2500" />


 <div className="three columns header-col">
      <h1>
        <span>Poopman</span>
      </h1>
    </div>
      //    <h1>
      //   <span>Skills</span>
      // </h1>
      // <h1>Skills measured in years of experience</h1>

var pretty_mode = false;

var data = {
  fillOpacity: .3, 
  datasets: [{
    data: [ //experience in years 
	    2,
		3.5,
		1, 
		1,
		4, 
		1.5,
		1.5, 
		1.5,
		2,
		5, 
		4,
		2,
		2,
		5,
		5,
		1
    ],
    backgroundColor: [
      'rgba(255, 0, 0, 0.6)', //adobe 
      'rgba(255, 0, 255, 0.6)', //agile
      'rgba(120,0,183, 0.6)', //asp
      'rgba(125, 200, 222, 0.6)', //azure
      'rgba(255, 190, 0, 0.6)', //AWS
      'rgba(180,75,35, 0.6)', //C++
      'rgba(72, 128, 72, 0.6)', //c#
		  'rgba(255,80,190, 0.6)', //db
      'rgba(2, 166, 0, 0.6)', //docker			      
      'rgba(150, 26, 70, 0.6)', //git
      'rgba(0,0,58, 0.6)', //java
      'rgba(255,255,0, 0.6)', //javascript
      'rgba(55, 206, 97, 0.6)', //latex 
      'rgba(72,100,255, 0.6)', //os Linux
      'rgba(0,128,255, 0.6)', //python
      'rgba(0,255,0, 0.6)', //x86
      
    ],
    label: 'My dataset' // for legend
  }],

  labels: [ //comfort on scale 1-6, 6 is most comfortable
    'Adobe Acrobat Pro', //5 
    'Agile Methodology', //6
    'ASP .Net', //2
    'Azure: Blob Storage + App Hosting', //1
    'AWS', //6
    'C++', //5
    'C#',//3
    'DB: Postgres, RDS, Mongo', //4
    'Docker', //4
    'Git', //6
    'Java', //4
    'JavaScript: GatsbyJs + React', //2
    'LaTex', //3
    'OS: Linux', //6
    'Python', //6
    'X86', //2
  ]
};




export default class Skills extends React.Component {
	
	state = {data}

	make_pretty = () => {
		console.log("Poop was clicked");
		if(pretty_mode){
			console.log("Pretty mode is now false!");
			pretty_mode = false;
			this.setState(data = {
		  fillOpacity: .3, 
		  datasets: [{
		    data: [ //experience in years 
		    	2,
				3.5,
				1, 
				1,
				4,
				1.5, 
				1.5,
				1.5,
				2,
				5, 
				4,
				2,
				2,
				5,
				5,
				1
		    ],
		    backgroundColor: [
		      'rgba(0, 120, 255, 0.8)', //acrobat 5 
		      'rgba(0, 0, 255, 0.8)', //agile 6
			  'rgba(0, 255, 255, 0.8)', //.net 2
		      'rgba(0, 255, 255, 0.8)', //blob storage 2
		      'rgba(0, 0, 255, 0.8)', //AWS 6
		      'rgba(0,120,255, 0.8)', //C++ 5
		      'rgba(0, 200, 255, 0.8)', //c# 3
		      'rgba(0,155,255, 0.8)', // DB 4
		      'rgba(0,155,255, 0.8)', // Docker 4
		      'rgba(0, 0, 255, 0.8)',//git 6
		      'rgba(0,155,255, 0.8)', //java 4
		      'rgba(0,255,255, 0.8)', //gatsbyjs + react 2
  		      'rgba(0, 200, 255, 0.8)', //LaTex 3
		      'rgba(0, 0, 255, 0.8)', //linux 6
		      'rgba(0, 0, 255, .8)', //python 6
		      'rgba(0,255,255, 0.8)',//x86 2

		    ],
		    label: 'My dataset' // for legend
		  }],

		  labels: [ //comfort on scale 2-6, 6 is most comfortable
		  //6 => 0,0,255; 5 => 0,120,255, 4=> 0,155,255, 3=>0,200,255, 2=>0,255,255
		    'Adobe Acrobat Pro', //5 
		    'Agile Methodology', //6
		    'ASP .Net', //2
		    'Azure: Blob Storage + App Hosting', //1
		    'AWS', //6
		    'C++', //5
		    'C#',//3
		    'DB: Postgres, RDS, Mongo', //4
		    'Docker', //4
		    'Git', //6
		    'Java', //4
		    'JavaScript: GatsbyJs + React', //2
		    'LaTex', //3
		    'OS: Linux', //6
		    'Python', //6
		    'X86', //2
		  ]
		})
		}
		else{
			pretty_mode = true;
			this.setState(data = {
			  fillOpacity: .3, 
			  datasets: [{
			    data: [ //experience in years 
				    2,
					3.5,
					1, 
					1,
					4, 
					1.5,
					1.5,
					1.5,
					2,
					2,
					5, 
					4,
					2,
					2,
					5,
					5,
					1
			    ],
			    backgroundColor: [
			      'rgba(255, 0, 0, 0.6)', //adobe 
			      'rgba(255, 0, 255, 0.6)', //agile
			      'rgba(120,0,183, 0.6)', //asp
			      'rgba(125, 200, 222, 0.6)', //azure
			      'rgba(255, 190, 0, 0.6)', //AWS
			      'rgba(180,75,35, 0.6)', //C++
			      'rgba(72, 128, 72, 0.6)', //c#
      			  'rgba(255,80,190, 0.6)', //db
			      'rgba(2, 166, 0, 0.6)', //docker			      
			      'rgba(150, 26, 70, 0.6)', //git
			      'rgba(0,0,58, 0.6)', //java
			      'rgba(255,255,0, 0.6)', //javascript
			      'rgba(55, 206, 97, 0.6)', //latex 
			      'rgba(72,100,255, 0.6)', //os Linux
			      'rgba(0,128,255, 0.6)', //python
			      'rgba(0,255,0, 0.6)', //x86
			      
			    ],
			    label: 'My dataset' // for legend
			  }],

			  labels: [ //comfort on scale 1-6, 6 is most comfortable
			    'Adobe Acrobat Pro', //5 
			    'Agile Methodology', //6
			    'ASP .Net', //2
			    'Azure: Blob Storage + App Hosting', //1
			    'AWS', //6
			    'C++', //5
			    'C#',//3
			    'DB: Postgres, RDS, Mongo', //4
			    'Docker', //4
			    'Git', //6
			    'Java', //4
			    'JavaScript: GatsbyJs + React', //2
			    'LaTex', //3
			    'OS: Linux', //6
			    'Python', //6
			    'X86', //2
			  ]
			});
		}
	}

	// getInitialState() {
	// 	 this.make_pretty;
	// };

	componentWillMount() {
		this.setState(this.make_pretty);
	};

   render () {

  return (
      <section id="skills">
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills Graphic</span>
      </h1>
        <p> Measured in Years of Experience </p>
    </div>
    <p>Check out this graphic I created using ChartJS! Each slice is a different skill and how far it comes out shows how many years of experience I have with it. 
    If you click the button to switch the color scheme, the deeper shades of blue represent my most comfortable skills. This chart is only one piece of the pie, as it does not capture all of the different technologies I've used, but rather just a few.
    <br/>(Note: Graphic may appear illegible on mobile. Currently working on a fix)
    </p>

    <Polar data={this.state} redraw />
    <br/>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
		<button type="button" onClick={this.make_pretty}>Click to Change Color Scheme</button>
    </div>
  </div>

  </section>
  );
  }
}
