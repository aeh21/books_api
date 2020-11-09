import { Container, Input, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <Typography variant='h4'>
          Hello, this is a mock home page, you will find a table on the following link:
        </Typography>
        <Link to="/books/page/1">Books List</Link>
      </Container>
    )
  }
}
