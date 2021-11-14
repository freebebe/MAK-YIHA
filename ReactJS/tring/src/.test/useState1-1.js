import { useState } from "react";

export default function MsgTest1() {
  const [msg, setMsg] = useState({
    msg: "",
  });

  return(
    <main>
    <button onClick={()=>setMsg({msg:'check out'})}></button>
    <p>{msg}</p>
    </main>
  )
}
