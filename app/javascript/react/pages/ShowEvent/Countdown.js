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
      console.log("1");

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
      return <h1>Done!</h1>
    }

    let { daysRounded, hoursRounded, minutesRounded, secondsRounded } = this.state;


    return <h1>{ `${daysRounded} days ${hoursRounded} hours ${minutesRounded} mins ${secondsRounded} secs` }</h1>
  }
}
