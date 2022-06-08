import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../components/form'
import { addItem } from '../redux/actions'

export class main extends Component {
  render() {
    
    const {addItem ,journalItems }= this.props;
    console.log (journalItems);

    return (
      <div>
          <div className='journal-app' >
            <h1 className='decoration-from-font text-fuchsia-600 text-5xl font-serif'> Journapp </h1>
            <Form addItem={(item) => addItem(item)} />
          </div>
          
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    journalItems: state.journalItems

})

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))

})

export default connect(mapStateToProps, mapDispatchToProps)(main)