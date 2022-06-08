import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../components/form'

export class main extends Component {
  render() {
    return (
      <div>
          <div className='journal-app' >
            <h1 className='decoration-from-font text-fuchsia-600	'> Journal </h1>
            <Form/>
          </div>
          
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(main)