import React from 'react';
import { Editor } from '@tinymce/tinymce-react';


class RichText extends React.Component {
  handleEditorChange = (e) => {
    console.log(
      'Content was updated:',
      e.target.getContent()
    );
  }

  render() {
    return (
        <div className="Editor">
      <Editor
      apiKey="o8rmdhfx3vylfdbivbn0pbc26qo09czj8vabx01vgy5qcfte"
        initialValue="<p>Sk</p>"
        init={{
          height: 600,
          menubar: true,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={this.handleEditorChange}
      />
      </div>
    );
  }
}

export default RichText;