import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-basic-features',
  templateUrl: './basic-features.component.html',
  styleUrls: ['./basic-features.component.css']
})
export class BasicFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //     var margin = {top: 20, right: 20, bottom: 30, left: 50},
  // width = 960 - margin.left - margin.right,
  // height = 500 - margin.top - margin.bottom;

  // // set the ranges
  // var x = d3.scaleTime().range([0, width]);
  // var y = d3.scaleLinear().range([height, 0]);

  // // define the line
  // var valueline = d3.line()
  //    .x(function(d) { return x(d.year); })
  //    .y(function(d) { return y(d.population); });

  // // append the svg obgect to the body of the page
  // // appends a 'group' element to 'svg'
  // // moves the 'group' element to the top left margin
  // var svg = d3.select("body").append("svg")
  //    .attr("width", width + margin.left + margin.right)
  //    .attr("height", height + margin.top + margin.bottom)
  //    .append("g").attr("transform",
  //       "translate(" + margin.left + "," + margin.top + ")");
        
  // // Get the data
  // d3.csv("/assets/data.csv", function(error, data) {
     
  //    if (error) throw error;
  //    // format the data
  //    data.forEach(function(d) {
  //       d.year = d.year;
  //       d.population = +d.population;
       
  //       console.log(d.year+" "+d.population);
  //    });

  //    // Scale the range of the data
  //    x.domain(d3.extent(data, function(d) { return d.year; }));
  //    y.domain([0, d3.max(data, function(d) { return d.population; })]);

  //    // Add the valueline path.
  //    svg.append("path")
  //       .data([data])
  //       .attr("class", "line")
  //       .attr("d", valueline);

  //    // Add the X Axis
  //    svg.append("g")
  //       .attr("transform", "translate(0," + height + ")")
  //       .call(d3.axisBottom(x));

  //    // Add the Y Axis
  //    svg.append("g")
  //       .call(d3.axisLeft(y));
  // });
  }

}
