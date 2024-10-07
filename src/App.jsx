
import { useState } from 'react'
import './App.css'

function App() {
  const arr=['(',')','%','AC','7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+']
  const [value,setValue]=useState('')
  const handleInput=(e)=>{
    console.log(e.target.value)
    setValue(e.target.value)
  }
  const handleClick=(e)=>{
    const val=e.target.id
    if(val==='AC'){
      setValue('')
    }else if(val==='='){
      result()
    }else{
      setValue((prev)=>prev+val)
    }
  }
  const result=()=>{
    const ans=eval(value);
    setValue(ans)
  }
  return (
    <>
     <div className="app">
      <h2>CalWithMe</h2>
      <input
      value={value}
      onChange={handleInput}
       type="text" />
      <div className="container"
      onClick={handleClick}
      >
          {
            arr.map((item,index)=>(
              <button 
              className='cell'
              id={item}
              key={index}
              >{item}</button>
            ))
          }
      </div>
     </div>
    </>
  )
}

export default App
