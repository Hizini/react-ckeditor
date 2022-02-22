// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { Component } from 'react'
import './App.css';

const { ClassicEditor } = window
class App extends Component {
  // 멤버변수 선언
  editor
  editorDivRef

  constructor(props) {
    super(props)

    // 멤버변수 선언 (다른 방식)
    // this.editor = undefined
  }

  async componentDidMount() {
    this.editor = await ClassicEditor.create(this.editorDivRef)
  }

  handleClickSubmit = () => {
    const editorData = this.editor.getData()
    // console.log(editorData) 

    const findStartStr = "<img src=\""
    const endStartStr= "\"></figure>"
    const startIndex = editorData.indexOf(findStartStr) + findStartStr.length
    const endIndex = editorData.indexOf(endStartStr)
    const imgSrc = editorData.substring(startIndex, endIndex)

    console.log(findStartStr, endStartStr, '1', startIndex, '2', endIndex)
    console.log(imgSrc)
  }

  render() {
    return (
      <div className="editor-container">
        <div className='editor-title'>드디어..</div>
        <div id='editor' ref={ref => this.editorDivRef = ref}></div>
        <button id="submit" onClick={this.handleClickSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
