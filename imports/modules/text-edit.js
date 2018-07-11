import React from 'react'

import Trumbowyg from './trumbowyg'
import HtmlContent from './html-content'

class TextEdit extends React.Component {
  constructor(props) {
    super(props)
    const { value } = props
    this.state = {
      isEdit: false,
      value,
    }
  }
  render() {
    const { value, onSave } = this.props
    if (this.state.isEdit) {
      return (
        <div>
          <button onClick={(e) => {
            onSave(this.state.value)
            this.setState({isEdit: false})
          }}>save</button>
          <Trumbowyg value={ this.state.value } onChange={(e) => {this.setState({ value: e.target.value })}}/>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={(e) => {this.setState({isEdit: true})}}>edit</button>
          <HtmlContent html={ this.state.value }/>
        </div>
      )
    }
  }
}

export default TextEdit
