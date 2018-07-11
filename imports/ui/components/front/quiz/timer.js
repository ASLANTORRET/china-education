import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    this.initTimer()
  }
  componentWillUnmount(){
    clearInterval(this.state.timer)
    console.log(this.state)
  }
  initTimer () {
    const { time } = this.props

    let { timer, onDeadline, deadline } = this.state
    if (! deadline ) {
      deadline = new Date().getTime() + ( time || 40 ) * 60 * 1000
      this.setState({ deadline })
    }
    if (! timer) {
      timer = setInterval(() => {
        var now = new Date().getTime();
        var distance = deadline - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // const time = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
        let time = hours + "h " + minutes + "m " + seconds + "s "
        this.setState({ time })

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(timer);
          time = 'EXPIRED'
          onDeadline()
        }
        this.setState({ time })
        // document.getElementById("demo").innerHTML = "EXPIRED";
      }, 1000);
      this.setState({ timer })
    }
  }
  render() {
    return (
      <div>{ this.state.time }</div>
    )
  }
}

export default Timer
