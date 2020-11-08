import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        Hi this is a page
        <Link to="/books/page/1">Link</Link>
      </div>
    )
  }
}
