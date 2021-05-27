import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import {Chart,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,
  DoughnutController,LineController,PieController,PolarAreaController,
  RadarController,ScatterController, CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,
  TimeScale,TimeSeriesScale, Decimation,Filler, Legend,Title,Tooltip
} from 'chart.js';



// import {Chart,ArcElement, LineElement, BarElement, PointElement} from 'chart.js';

// import Chart from 'chart.js'


class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : Date.now(),
      fetched: false,
    }
    this.createGraph = this.createGraph.bind(this)
    this.getData = this.getData.bind(this)

  }

  getData() {
    $.ajax({
      url: 'https://api.coindesk.com/v1/bpi/historical/close.json',
      type: 'GET',
      success: (data) => {
        this.createGraph(data)
      },
      error: (error) => {console.error('error from ajax -> ', error)}
    })
  }


  createGraph(data) {
    data = JSON.parse(data)
    Chart.register(ArcElement, LineElement, BarElement, PointElement,BarController, BubbleController, DoughnutController, LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip);
    console.log('ctx in createGraph -> ', document.getElementById('myChart'))
    var ctx = document.getElementById('myChart')
    var dataLabels = Object.keys(data.bpi)
    var dataValues = Object.values(data.bpi)
    var dataSetColors = dataLabels.map((cv) => {return  'rgba(54, 162, 235, 0.2)'})
    var dataSetBorderColors = dataLabels.map((cv) => {return  'rgba(54, 162, 235, 1)'})

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: dataLabels,
          datasets: [{
              label: 'historic records price for bitcoin in USD',
              data: dataValues,
              backgroundColor: dataSetColors,
              borderColor: dataSetBorderColors,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
  }
  componentDidMount(){
    if (!this.state.fetched) {
      this.getData()
      this.setState({fetched : true})
    }
  }
  componentDidUpdate(prevProps,prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.ctx !== prevState.ctx) {
      console.log('new ctx -> ', ctx)
    }
  }
  render() {
      return (
      <div>
        <canvas id="myChart" width="400" height="400">
        </canvas>
      </div>
      )

  }
}

export default Graph