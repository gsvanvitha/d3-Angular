import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { selectAll } from 'd3';
//import { selection } from 'd3';

@Component({
  selector: 'app-shatter',
  templateUrl: './shatter.component.html',
  styleUrls: ['./shatter.component.css']
})
export class ShatterComponent implements OnInit {
    private data = [
      {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
      {"Framework": "React", "Stars": "150793", "Released": "2013"},
      {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
      {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
      {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
    ];
    public svg;
    private margin = 50;
    private width = 750 - (this.margin * 2);
    private height = 400 - (this.margin * 2);
    public dots;
    public plotDots;
    
   
     createSvg(): void {
      this.svg = d3.select("figure#scatter")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
      selectAll("svg").on("click",(event,d)=> {
         console.log("svg");
        console.log(event);
        console.log('msg is '+ (event.pageX)+' '+event.pageY);
       this.addPlotDot(event.offsetX-this.margin, event.offsetY-this.margin);
       });
      //  this.dots.select("dot")
      //  .enter()
      //  .append("circle")
      //  .attr("cx", d => <HTMLElement>document.getElementById(screenX.toString()))
      //  .attr("cy", d => d.y)
      //  .attr("r", 7)
      //  .style("opacity", .5)
      //  .style("fill", "#69b3a2");
      //  this.addPlotDot();
  }
   drawPlot(): void {
    // Add X axis
     const x = d3.scaleLinear()
    .domain([2009, 2017])
    .range([0, this.width ]);
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, 200000])
    .range([ this.height, 0]);
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Add dots
    this.dots = this.svg.append('g');
    this.plotDots=this.dots.selectAll("dot")
    .data(this.data)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.Released))
    .attr("cy", d => y(d.Stars))
    .attr("r", 7)
    .style("opacity", .5)
    .style("fill", "#69b3a2");

    // Add labels
    this.dots.selectAll("text")
    .data(this.data)
    .enter()
    .append("text")
    .text(d => d.Framework)
    .attr("x", d => x(d.Released))
    .attr("y", d => y(d.Stars))

    //  this.dots.on("click", function(event, d) {
    //     console.log(d);
    //     event.stopPropagation();
    //   })
}
changePlotDotColor(){
  this.plotDots.on("click", function(event,d) {
    console.log(d)
    event.stopPropagation();
  //  d.getAttribute("fill");
  d3.select(this)
    .style("fill" , "rgb(0,0,0)")

  })
}
addPlotDot(pageX: any, pageY: any) {
  this.svg
    .append("circle")
    .attr("cx", d => pageX)
    .attr("cy", d => pageY)
    .attr("r", 7)
    .style("opacity", .5)
    .style("fill", "red");
}

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawPlot();
    this.changePlotDotColor();
    //this.addPlotDot();
  }
  public ngOnChanges(): void {
 
 
    }
    

  
  } 



