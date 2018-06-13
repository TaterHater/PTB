import React from 'react';
import { Modal } from 'react-bootstrap'
import { Popover } from 'react-bootstrap'
import { Tooltip } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);


    this.state = {
      modalElement: 'ElementName',
      show: false,
      data:
         [
            {
               "id":1,
               "symbol":"Fi",
               "name":"Finance",
               "text":"Finance is a field that deals with the study of investments. It includes the dynamics of assets and liabilities, (known as elements of the balance statement) over time under conditions of different degrees of uncertainties and risks. "
            },
            {
               "id":2,
               "symbol":"Ba",
               "name":"Bar",
               "text":"accept accept Charset accessKey action allowFullScreen alt async autoComple autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checkedcite classID className colSpan cols content contentEditable contextMenu"
            },
            {
               "id":3,
               "symbol":"Be",
               "name":"Bee",
               "text":"40"
            }
        ]
    };
  }

  handleClose() {
    this.setState({ show: false, Element:{
       "id":1,
       "name":"Fo",
       "age":"20"
    } });
  }

  handleShow(e) {
      console.log(e.name)
    this.setState({ show: true, modalElement: e})

  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">{Element.name}</Tooltip>

    return (
<div>
        <Header/>
            <div>

           <table>
              <tbody>
                 {this.state.data.map((elem,i) => <Button bsStyle="primary" bsSize="large" data = {elem} onClick={()=> this.handleShow(elem)}>{elem.symbol}</Button>)}
              </tbody>
           </table>
           </div>

    <div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.modalElement.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Brief description of {this.state.modalElement.name}</h4>
            {this.state.modalElement.text}
            <h4>Popover in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={popover}>
                <a href="#popover">popover</a>
              </OverlayTrigger>{' '}
              here
            </p>

            <h4>Tooltips in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={tooltip}>
                <a href="#tooltip">tooltip</a>
              </OverlayTrigger>{' '}
              here
            </p>

            <hr />

            <h4>Relevant Links</h4>
            <a>TED Talk Video </a><br/>
            <a>Wikipedia Article</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      </div>
    )
  }
}


class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Periodic Table of Business</h1>
         </div>
      );
   }
}

export default App;
