import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css';
import { Model } from './Scene';
import {Shoe} from './Shoe'

function Box(props){
  return(
    <mesh {...props}>
    <meshBasicMaterial />
    <boxGeometry/>
    
  </mesh>
  )
}


function App() {
  return (
    <div className="App">
      <Canvas style={{width:'100vw', height:'100vh'}}>
      <ambientLight/>
      <Suspense fallback={null}>
      <group>
      <Model position = {[-1,0,0]}/>
      <Model position={[1,0,0]}/>
      {/* <Shoe position={[1,1,1]}/> */}
      <OrbitControls/>
      </group>
      
      </Suspense>
      
     

      </Canvas>
    </div>
  );
}

export default App;
