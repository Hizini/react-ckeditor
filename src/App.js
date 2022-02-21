// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { Component } from 'react'
import './App.css';

const { ClassicEditor } = window
class App extends Component {
  constructor(props) {
    super(props)

    let editor
  }
  
  async componentDidMount() {
    this.editor = await ClassicEditor.create( document.querySelector( '#editor' ) )

    document.querySelector( '#submit' ).addEventListener( 'click', () => { 
      const editorData = this.editor.getData() 
      console.log(this.editor.getData())
    } )
  }

  render() {
    return (
      <div className="editor-container">
        <div className='editor-title'>드디어..</div>
        <div id='editor'></div>
        <button id="submit">Submit</button>
      </div>
    ); 
  }
}

export default App;
