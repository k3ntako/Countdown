import React, {Component} from 'react';
import Event from './../../../models/Event';

export default class Countdown extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    this.callibrate(this.tick);
  }

  componentWillUnmount(){
    clearInterval(this.i);
  }

  callibrate(func = () => {}){
    let { endDate } = this.props;
    let diff = endDate - new Date();

    let days =  diff / (1000 * 3600 * 24);
    let daysRounded = Math.floor(days);
    let hours = days % 1 * 24;
    let hoursRounded = Math.floor(hours);
    let minutes = hours % 1 * 60;
    let minutesRounded = Math.floor(minutes);
    let seconds = minutes % 1 * 60;
    let secondsRounded = Math.floor(seconds);

    this.setState({ diff, daysRounded, hoursRounded, minutesRounded, secondsRounded },func)
  }


  tick(){
    this.i = setInterval(() => {
      let { secondsRounded } = this.state;

      if(secondsRounded > 0){
        this.setState({ secondsRounded: --secondsRounded })
      }

      this.callibrate();

    },1000)
  }



  render(){
    let { endDate } = this.props;
    if(endDate < new Date()){
      clearInterval(this.i)
      return <div className="countdown">
        <h1 className="countdown">0 days</h1>
        <h1 className="countdown">0 hours</h1>
        <h1 className="countdown">0 mins</h1>
        <h1 className="countdown">0 secs</h1>
      </div>

    }

    let { daysRounded, hoursRounded, minutesRounded, secondsRounded } = this.state;

    return <div className="countdown">
      <h1>{daysRounded} days</h1>
      <h1>{hoursRounded} hours</h1>
      <h1>{minutesRounded} mins</h1>
      <h1>{secondsRounded} secs</h1>
    </div>
  }
}
