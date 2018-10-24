import React, { Component } from 'react'

export default class CountdownCounter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    /* Expressed in GMT. Equals 18:00:00 CEST */
    this.eventDate = new Date("Nov 13, 2018 16:00:00")

    /* Set 1 second interval for the counter */
    this.interval = setInterval(this.updateCounter, 1000)
  }

  componentWillMount() {
    this.updateCounter()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updateCounter = () => {

    const timeNow = new Date().getTime()
    const timeEvent = this.eventDate.getTime()

    const delta = new Date(this.eventDate - Date.now())

    const oneDay = 24*60*60*1000
    const diffDays = Math.round(Math.abs( (timeNow - timeEvent) / (oneDay) ))

    this.setState( () => (
      {
        days: (diffDays < 10? '0' : '') + diffDays + 'd',
        hours: (delta.getHours() < 10? '0' : '') + delta.getHours() + 'h',
        minutes: (delta.getMinutes() < 10? '0' : '') + delta.getMinutes() + 'm',
        seconds: (delta.getSeconds() < 10? '0' : '') + delta.getSeconds() + 's'
      }
    ))

  }

  render() {
    return (
    <div id={'countdown'}>
      <span id="days">{this.state.days}</span>
      <span id="hours">{this.state.hours}</span>
      <span id="minutes">{this.state.minutes}</span>
      <span id="seconds">{this.state.seconds}</span>
    </div>
    )
  }
}