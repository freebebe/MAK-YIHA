import { useState } from "react";
import ReactDOM from "react-dom";

function Board() {
  const [squares, getSquares] = useState({ squares: Array(9).fill(null) });
  const [xIsNext, setXIsNext] = useState(true);
}
