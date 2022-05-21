import React, { useState } from 'react';
import './ChangeText.css';

export const ChangeText = () => {

  const [text, setText] = useState("Ejemplo cambiando estado");

  // cambiando estado con el texto del input
  return (
    <div>
      <h2>{text}</h2>
      <input placeholder="Ingresa el texto que será el nuevo valor del state" onKeyUp={event=>setText(event.target.value)} type="text" />
    </div>
  )
}
