import {useState} from "react";

const CheckList = (props) => (
  <ul>
    {
      props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
      ))
    }
  </ul>
)

export default function CheckApp() {
  const [items, setItems] = useState([]);
  const [text, setText]  = useState('');

  // function onChange(e) {
  //   setText({text: e.target.value})
  // }
  // function handleSubmit(e) {
  //   e.preventDefault()
  //   const nextItems = items.concat([{
  //     text: text, 
  //     id: Date.now()
  //   }])
  //   const nextText = '';
  //   setItems({items: nextItems})
  //   setText({text: nextText})
  // }

  // return(
  //   <div>
  //   <h3>test toggle</h3>
  //   <checklist items={items} />
  //   <form action="" onsubmit{...handlesubmit}>
  //     <input onchange={onchange} value={text} type="" />
  //   <button>
  //     {`add #`+ (items.length +1)}
  //   </button>
  //
  //   </form>
  //   </div>
  // )

  const handleSubmit=(e)=> {
      e.preventDefault();
      const nextItems = items.concat([{
        text: {text},
        id: Date.now()
      }])
      const nextText = '';
      setItems({nextItems}),
      setText({nextText})
    }
  // function handleSubmit(e) {
  //   e.preventDefault()
  //   const nextItems = items.concat([{
  //     text: text, 
  //     id: Date.now()
  //   }])
  //   const nextText = '';
  //   setItems({items: nextItems})
  //   setText({text: nextText})
  // }

  return (
    <div>
      <h3>test toggle2</h3>
      <checklist items={(e)=>setText({text: e.target.value})} />
    <form action="" onSubmit{...handleSubmit}>
      <input 
        type="text"
        onChange{...setText} />       // may: items={(e)=>setText({text: e.target.value})}
        <button>
      {`Add #` + (items.length + 1)}
    </button>
    </form>
    </div>
  )
}
