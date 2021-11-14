import { useState } from "react";

export default function MsgStateTest() {
  const [msg1, getMsg1] = useState("");

  return(
    <main>
      <button onClick={() => getMsg1("check out")}></button>
      <p>{msg1}</p>
    </main>
  )
}
