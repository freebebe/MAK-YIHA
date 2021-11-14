import { useState } from "react";
import { Remarkable } from "remarkable";

const md = new Remarkable();

function App() {
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <main className="">
        <h1 className="">
          markdown editor
        </h1>

        <article>
          <label htmlFor="markdown"></label>
          <textarea
            id="markdown"
            name="textarea"
            cols="30"
            rows="10"
            required
            placeholder="Type in some markdown"
            value={text}
            onChange={onChangeText}
          >
          </textarea>

          <h3>output</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: md.render(text),
            }}
          >
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
