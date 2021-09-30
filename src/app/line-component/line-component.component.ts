import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-component',
  templateUrl: './line-component.component.html',
  styleUrls: ['./line-component.component.css']
})
export class LineComponentComponent implements OnInit {
  @Input() public data: { value: number, date: string }[];
  private width = 700;
private height = 700;
private margin = 50;
public svg;
public svgInner;
public yScale;
public xScale;
public xAxis;
public yAxis;
public lineGroup;
public zoom;
public g;

public constructor(public chartElem: ElementRef) {
}


  ngOnInit(): void {
    console.log("DATA");
    console.log(this.data);
   
  }
   initializeChart(){
    this.svg = d3
    .select(this.chartElem.nativeElement)
    .select('.linechart')
    .append('svg')
    .attr('height', this.height);
    this.svgInner = this.svg
.append('g')
.style('transform', 'translate(' + this.margin + 'px, ' + this.margin + 'px)');
this.yScale = d3
.scaleLinear()
.domain([101,10])
.range([0, this.height-2 * this.margin]);
this.xScale = d3.scaleTime().domain(d3.extent(this.data, d=> new Date(d.date)));
this.yAxis = this.svgInner
.append('g')
.attr('id', 'y-axis')
.style('transform', 'translate(' + this.margin + 'px, 0)');
this.xAxis = this.svgInner
.append('g')
.attr('id', 'x-axis')
.style('transform', 'translate(0, ' + (this.height-2 * this.margin) + 'px)');
this.lineGroup = this.svgInner
.append('g')
.append('path')
.attr('id', 'line')
.style('fill', 'none')
.style('stroke', 'red')
.style('stroke-width', '2px');
 this.g = this.svg.append("g")
.attr("cursor", "grab");
  }
   drawChart(){
    this.width = this.chartElem.nativeElement.getBoundingClientRect().width;
this.svg.attr('width', this.width);
this.xScale.range([this.margin, this.width-2 * this.margin]);
const xAxis = d3
.axisBottom(this.xScale)
.ticks(10)
.tickFormat(d3.timeFormat('%m / %Y'));
this.xAxis.call(xAxis);
const yAxis = d3
.axisRight(this.yScale);
this.yAxis.call(yAxis);
const line = d3
.line()
.x(d => d[0])
.y(d => d[1])
.curve(d3.curveMonotoneX);
const points: [number, number][] = this.data.map(
d => [this.xScale(new Date(d.date)), this.yScale(d.value)]
);
this.lineGroup.attr('d', line(points));

  }
  

zoomed(transform) {
    this.g.attr("transform", transform);
  }
  zoomButton(){
    this.svg.call(d3.zoom()
    .extent([[0, 0], [this.width, this.height]])
    .scaleExtent([1, 8])
    .on("zoom", this.zoomed));
  }
  public ngOnChanges(changes): void {

    if (changes.hasOwnProperty('data') && this.data) {
       this.initializeChart();
       this.drawChart();
       window.addEventListener('resize', () => this.drawChart());
    }
  }

}
