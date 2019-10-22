import React from 'react';
import {createEmptyEditorState, EditorState, RichTextEditor} from 'czi-prosemirror';

class Editor extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      editorState: createEmptyEditorState(),
    };
  }

  render() {
    const {editorState, editorView} = this.state;
    return (
      <RichTextEditor
        editorState={editorState}
        onChange={this._onChange}
      />
    );
  }

  _onChange = (editorState: EditorState): void => {
    this.setState({editorState});
  };
}

export default Editor;