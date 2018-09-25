class Clock {
  constructor() {
    const currentTime = new Date('November 12, 1992 00:00:00');
    this.hour = currentTime.getHours();
    this.mins = currentTime.getMinutes();
    this.secs = currentTime.getSeconds();
    this.leftNavElement = document.getElementById('left-nav');
    this.elapsedContainer = this.leftNavElement.querySelector('.elapsed-sub');
    setInterval(this.tick.bind(this), 1000);
  }

  display() {
    this.elapsedContainer.innerHTML = `Elapsed: ${this.formattedTime()}`;
  }

  formattedTime() {
    let hour = this.hour;
    let mins = this.mins;
    let secs = this.secs;
    if (String(hour).length === 1) hour = '0' + hour;
    if (String(mins).length === 1) mins = '0' + mins;
    if (String(secs).length === 1) secs = '0' + secs;
    return `${hour}:${mins}:${secs}`;
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
    this.display();
  }
}

new Clock();