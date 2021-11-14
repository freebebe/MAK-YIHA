import { useEffect, useState } from "react";
import axios from "axios";

export default function List() {
  const [data, runData] = useState(null);
  useEffect(async () => {
    let listItems = await axios("https://google.com");
    runData(listItems.data);          //  listItems x1(in - top)
  }, []);
  let listItems                       //  listItems x2 (on)
  if(data) {
    listItems = data.map((item,i)=>{  //  listItems x3 (in - button)
      <p key={i}>{item.name}</p>
    })
  } else {
    listItems = <p>check...</p>       //  listItems x3.5 (in - button)
  }
  return {listItems}                  //  listItems x4 => 0 (in - button)
}
