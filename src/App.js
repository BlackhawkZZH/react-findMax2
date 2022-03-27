import React, { memo, useCallback, useState } from 'react';
import './style.css';

const ExtremumShow = (props) => {
  const { max, min } = props;
  return (
    <div>
      <div>{`Maximum: ${max}`}</div>
      <div>{`Mininum: ${min}`}</div>
    </div>
  );
};

export default function App() {
  const [list, setList] = useState([10, 7, 9, -10, 234, 16])
  
  return (
    <div>
      <h3>Find Extremum</h3>
      <ul>
        {list.map((elem, i) => {
          return <li key = {i}>{elem}</li>
        })}
      </ul> 
      <ExtremumShow max = {Math.max(...list)} min = {Math.min(...list)}/>
    </div>
  );
}
