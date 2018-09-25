class Clock {
  constructor() {
    const currentTime = new Date();
    this.hour = currentTime.getHours();
    this.mins = currentTime.getMinutes();
    this.secs = currentTime.getSeconds();
    setInterval(this.tick.bind(this), 1000);
  }

  display() {
    const formattedTime = `${this.hour}:${this.mins}:${this.secs}`;
    return formattedTime;
  }

  tick() {
    this.secs++;
    if (this.secs === 60) {
      this.secs = 0;
      this.mins++;
    }
    if (this.mins === 60) {
      this.mins = 0;
      this.hour++;
    }
    if (this.hour === 24) {
      this.hour = 0;
    }
  }
}

window.clock = new Clock();