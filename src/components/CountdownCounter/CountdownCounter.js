import React, { Component } from 'react'

import './countdownCounter.css'

export default class CountdownCounter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    }

    /* Expressed in GMT. Equals 19:00:00 CEST / Equals 18:00:00 CET */
    this.eventDate = new Date("Nov 13, 2018 18:00:00")

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

    /* Calculate delta and apply CET timezone */
    const delta = new Date(timeEvent - (timeNow + 3600*1000))

    timeNow + 1000 > timeEvent && clearInterval(this.interval)

    const oneDay = 24*60*60*1000
    const diffDays = Math.round(Math.abs( (timeNow - timeEvent) / (oneDay) ))

    this.setState( () => (
      {
        days: '00d ',
        hours: (delta.getHours() < 10? '0' : '') + delta.getHours() + 'h ',
        minutes: (delta.getMinutes() < 10? '0' : '') + delta.getMinutes() + 'm ',
        seconds: (delta.getSeconds() < 10? '0' : '') + delta.getSeconds() + 's '
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