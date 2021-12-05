import {useState, Fragment} from 'react'
import ReactFlow, {addEdge, Background, Controls, MiniMap} from 'react-flow-renderer'

import ButtonElements from './Button'

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView()
}

const MindNode = () => {
  const [elements, setElements] = useState([]);
  const [name, setName] = useState()
  const [mindColor, changeMindColor] = useState()
  const [handleCheck, setHandleCheck] = useState(true)


  const addNode = () => {
    setElements((eff1) => eff1.concat({
      id: (eff1.length + 1).toString(),
      data: {label: `${name}`},
      position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      }
    }));
  }
  const onConnect = (parms) => setElements(eff2 => addEdge(parms,eff2))
  const connectStyle = {width: '100%', height: '90vh'}

  const MindColor = () => {
  }

  return(
    <Fragment>
      <ReactFlow 
        elements={elements}
        onLoad={onLoad}
        onConnect={onConnect}
        style={connectStyle}
        connectionLineStyle = {{stroke: "#ddd", strokeWidth: 2}}
        connectionLineType = "beizer"
        onlyRenderVisibleNodes = {true}
        snapToGrid={true}
        snapGrid={[16, 16]}
      >
        <Background color= '#888' gap={16} />
        <MiniMap nodeColor = {(n) => {
            if(n.type === 'input') return 'darkblue';
            return '#FFCC00'
          }}
        />
        <Controls />
      </ReactFlow>

    <div>
        <input type="colorChangeButton" name="colorButton" onChange= {e => changeMindColor(e.target.value)} />
        <button type="colorChangeButton" onClick={MindColor}>
          ChangeColor
        </button>
    </div>

      <div>
        <input type="text" name="title"
          onChange = {(eff3) => setName(eff3.target.value)}
        />
        <button type="button" onClick={addNode}>
          addNODE onClick
        </button>
        <button 
          className={handleCheck ? "buttonTrue" : "buttonFalse"}
          onClick={handleCheck}
        >
          click me changed color 
        </button>
      </div>
    </Fragment>
  )
}

export default MindNode
