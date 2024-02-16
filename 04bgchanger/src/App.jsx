import {useState} from "react";
function App() {
  const [color, setColor] = useState("olive");
  

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
