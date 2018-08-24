class LineChart {
  constructor() {
    this.data = [];
  }

  initialize() {
    const chartOptions = {
      type: 'line',
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [
        {
          label: "Prime and Fibonacci",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        },
        {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
        }
      ]
    };
    const chartElement = document.getElementById('chart');
    this.chart = new window.Chart(chartElement, chartOptions);
  }
}

// window.chart = new LineChart();
// window.chart.initialize();