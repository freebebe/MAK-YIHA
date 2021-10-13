import { useState } from "react";
import { Remarkable } from "remarkable";

const md = new Remarkable();

function App() {
  const [text, setText] = useState("");

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
            onChange={(e) => setText(e.target.value)}
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
