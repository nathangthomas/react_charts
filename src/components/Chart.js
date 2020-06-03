import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition: 'right',
    location: 'Default City'
  }

  render(){
    return(
      <div clasName="chart">

      <Bar
        data={this.state.chartData}
        width={200}
        height={100}
        options={{
          // maintainAspectRatio: false,
          title:{
            display: true,
            text: 'Largest Cities In '+this.props.location,
            fontSize: 25
          },
          legend:{
            display: true,
            position: this.props.legendPosition
          }
        }}
        />

      <Line
        data={this.state.chartData}
        width={200}
        height={100}
        options={{
          // maintainAspectRatio: false,
          title:{
            display: true,
            text: 'Largest Cities In '+this.props.location,
            fontSize: 25
          },
          legend:{
            display: true,
            position: this.props.legendPosition
          }
        }}
        />

      <Pie
        data={this.state.chartData}
        width={200}
        height={100}
        options={{
          // maintainAspectRatio: false,
          title:{
            display: true,
            text: 'Largest Cities In '+this.props.location,
            fontSize: 25
          },
          legend:{
            display: true,
            position: this.props.legendPosition
          }
        }}
        />
      </div>
    )
  }
}

export default Chart;
