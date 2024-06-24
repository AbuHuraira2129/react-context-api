import React, { useContext } from 'react'
import { CounterContext } from '../context/Counter'

const Counter = () => {
  const ConterContext = useContext(CounterContext);
  return (
    <div>
      <button onClick={()=>ConterContext.setCount(ConterContext.count + 1)}>Increment</button>
      -
      <button onClick={()=>ConterContext.setCount(ConterContext.count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
