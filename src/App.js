import { Routes, Route } from "react-router-dom"
import {Main, Login, Register} from "./compnents"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Main/>}/>
        <Route path="/" element = {<Login/>}/>
        <Route path="/" element = {<Register/>}/>
      </Routes>
    </div>
  )
}

export default App