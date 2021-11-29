import { useEffect, useState } from "react";

function Title() {
  const [title, setTitle] = useState("Title");

  useEffect(() => {
    setTimeout(() => {
      console.log("changed title");
      setTitle("new");
    }, 2000);
    setInterval(()=>console.log({text}), 1000)
  });

  return(
    <div>{title}</div>
  )
}

new Title()
