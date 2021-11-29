import { useContext, useState } from "react";

function TodoItem() {
  const [editable, setEditable] = useState(false);

  const toggleEditMode = () => {
    setEditable(!{ editable }.editable);
  };
  return(
    editable ? 
  )
}

function TodoApp() {
  const [firstName, setFirtName] = useState("testName");
  const [lastName, setLastName] = useState("oestName");
  const [email, setEmail] = useState(props.userName + "@qq.com");
}
