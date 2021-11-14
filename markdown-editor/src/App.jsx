import { useState } from "react";
import "./App.css";
import Remarkable from "remarkable";

const md = new Remarkable();

function MarkdownEditor() {
  const [mdEditor, setMdEditor] = useState(
    {
    value: "Type some *markdown* here!"
    }
  );

  return (
    <div className="container">
      <div className="input">
        <h3>Input</h3>
        <textarea
          className="input-text"
          onChange={(e)=> setMdEditor(e.target.value)}
          defaultValue={mdEditor}
        />
      </div>
      <div className="output">
        <h3>Markdown</h3>
        <div
          dangerouslySetInnerHTML={{__html: md.render(mdEditor)}}
          className="output-text"
        >
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
