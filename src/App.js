import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3";


class JourneyMap extends React.Component {
  
  render() {
   return (
    <div>
      <h4>Hey Guys, Please checkout my journey by clicking on the circles.Thank you</h4>
    </div>
    )
  }
}

class DrawLine extends React.Component {
  render() {
    return (

      <div></div>
    )

  }

}

class Circle extends React.Component {
  render() {
    var circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width: 30,
      height: 30
      
    }
    return (
      <div style={circleStyle}></div>
    )
  }
}

function showCircle() {
  var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
                "#85FFC7", "#297373", "#FF8552", "A40E4C"];

  var journeyPoints =  [
    { year: "2005", company: "Applabs", designation: "Software Engineer", active: false },
    { year: "2007", company: "Pramati", designation: "Development Engineer", active: false },
    { year: "2009", company: "Innopark", designation: "Open Source Architect", active: false },
   { year: "2010", company: "Honeywell", designation: "Tech Lead", active: false },
   { year: "2012", company: "Imaginea", designation: "Principal Engineer Engineering Manager", active: true },
   { year: "2017", company: "Castlight Health", designation: "Engineering Manager", active: false },
     { year: "present", company: "RPX Corporation", designation: "Engineering/Delivery Manager", active: true }
  ];

  var careerSkills = [
    {year:"2005", tech_stack:"LAMP, Shell scripting, Ruby"},
    {year:"2007", tech_stack:"LAMP, RIA, Adobe Flex, Web 2.0"},
    {year:"2009", tech_stack:"Python,Php,AWS S3, Linux, Jquery, Javascript"},
    {year:"2010", tech_stack:"PHP, Code Igniter, MySQL, Hybrid mobile applications, LINUX/UNIX"},
    {year:"2012", tech_stack:"Rails,MySQL,Jquery,Java,Jruby,Web Services"},
    {year:"2017", tech_stack:"Angular,Rails,Javascript,Java,MySQL,REST API, Salesforce Live Agent, HornetQ, Design Patterns"},
    {year:"present", tech_stack:"Angular,React,Rails,Postgres,mysql,wordpress,Python, Shell scripting"}
    ];
                
  var renderData = [];
  var jp = [];
  var i = 0;

  for (jp in journeyPoints) {
    var jp_year = journeyPoints[jp].year;
    var color = colors[i];
    renderData.push(<li onClick={DrawLine}><Circle key={i + color} id={jp_year} bgColor={color}/><span>{jp_year}</span></li>)
    i++;
  }

  return renderData;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <JourneyMap/>
        <div>
          <ul>
        {showCircle()}
        </ul></div>
        </header>
      </div>
    );
  }
}

export default App;
