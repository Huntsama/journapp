import { Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../components/form'
import Journal from '../components/journal'
import { addItem, deleteItem } from '../redux/actions'

export class main extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      journalList: null,
    };
  }

  render() {
    const { addItem, journalItems , deleteItem } = this.props;
    const { show, journalList } = this.state;
    return (
      <div>
        <div >
          <div className='journal-app' >
            <h1 className='decoration-from-font text-fuchsia-600 text-5xl font-serif'> Journapp </h1>
            <Form addItem={(item) => addItem(item)} />
          </div>
          <div className='journal-app' >
            {journalItems.length > 0 ? (
              journalItems.map((item) => {
                return (
                  <Journal 
                  deleteItem={(id)=>deleteItem(id)}
                  showModal={(item) => this.setState({ show: true, journalList: item })} 
                  item={item} key={item.id} />
                )

              })

            ) : (
              <h1 className="text-fuchsia-600 text-2xl font-bold text-center">  No Journal yet ... </h1>
            )}
          </div>
        </div>
        <Modal
          size="lg"
          show={show}
          onHide={() => this.setState({ show: false })}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>            
            <Modal.Title id="example-modal-sizes-title-lg">
              {journalList?.title}
            </Modal.Title>
            
          </Modal.Header>
          <Modal.Body>{journalList?.journal}</Modal.Body>
          
          <Modal.Footer>{journalList?.date}</Modal.Footer>          
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  journalItems: state.journalItems

})

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteItem : (id) => dispatch(deleteItem(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(main);