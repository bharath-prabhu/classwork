import React, { Component } from 'react'

export default class Classprops extends Component {
  render() {
    return (
      <div>
        <h1>my friends are {this.props.n}</h1>
      </div>
    )
  }
}
