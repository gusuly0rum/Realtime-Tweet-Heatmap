class LineChart {
  constructor() {
    this.data = {
      country: null,
      dataset: [],
      count: 0,
    };
    this.total = 0;
    this.chartElement = document.getElementById('chart');
  }

  initialize() {
    this.chartOptions = {
      type: 'line',
      animation: {
        duration: 0
      },
      data: {
        labels: new Array(this.total * 2),
        datasets: [{
          data: this.data.dataset,
          backgroundColor: "rgba(153, 255, 51, 0.4)"
        }]
      }
    };
    this.chart = new window.Chart(this.chartElement, this.chartOptions);
  }

  updateData(country, count) {
    this.total++;
    this.data.country = country;
    this.data.count = count;
    this.data.dataset.push(count);
    this.chart.update();
  }
}

// window.chart = new LineChart();
// window.chart.initialize();