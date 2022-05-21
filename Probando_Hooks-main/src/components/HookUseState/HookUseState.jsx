// 1. Importar useState
import React, { useState } from 'react';
import './HookUseState.css';


export const HookUseState = () => {
// 2. Antes del return cree la siguiente sintaxis,
// el valor inicial de count es 0
  const [count, setCount] = useState(0)

  return (
    <div className="div-useState">
      <h1>Example: useState</h1>
{/* 3. Mostraremos en este párrafo el valor guardado en count */}
      <p>{count}</p>
      <hr />
      <div className="buttons">
{/* 4. Utilizar el evento onClick en el botón que modificará count desde setCount */}
        <button onClick={()=> setCount(count+1)}>Add</button>
        <button onClick={()=> setCount(count-1)}>Subtract</button>
      </div>            
    </div>
  )
}
