import {useState, Fragment} from 'react'
import ReactFlow, {addEdge, Background, Controls, MiniMap} from 'react-flow-renderer'

const [initialElements, setInitialElements] = useState([
  {
    id: 1,
    type: 'input',
    data: {label: 'NODE'},
    position: {x:0, y:0}
  }
])


const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fileView()
}

const MindNode = () => {
  const [name, setName] = useState()

  const addNode = () => {
    setInitialElements(e=>e.concat({
      id: (e.length+1).toString(),
      data: {label: `${name}`},
      postion: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }
    }))
  }

  const onConnect = (parms) => setInitialElements(e => addEdge(parms,e))

  return(
    <Fragment>
      <h1>check</h1>
      <ReactFlow 
        onLoad={onLoad}
        elements = {initialElements}
        onConnect={onConnect}
        style={{width: '100%', height: '90vh'}}
        connectionLineType = "beizer"
        connectionLineStyle = {{stroke: "#ddd", strokeWidth: 2}}
        snapGrid={true}
        snapToGrid={[16, 16]}
    >
        <Background
          color= 'grey'
          gap={16}
        />
        <MiniMap
          nodeColor={n=>{
            if(n.type === 'input') return 'blue';
            return '#FFCC00'
          }}
          />
        <Controls />
      </ReactFlow>
      <div>
        <input 
          type="text" 
          name="title"
          onChange = {e => setName(e.target.value)}
        />
      <button type="button" onClick={addNode} />
      </div>
    </Fragment>
  )
}

export default MindNode
