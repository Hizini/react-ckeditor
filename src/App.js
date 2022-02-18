// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    let editor
  }
  
  async componentDidMount() {
    const { ClassicEditor } = window
    this.editor = await ClassicEditor.create( document.querySelector( '#editor' ) )
  }

  render() {
    return (
      <div className="editor-container">
        <div className='editor-title'>드디어..</div>
      </div>
    ); 
  }
}

export default App;
