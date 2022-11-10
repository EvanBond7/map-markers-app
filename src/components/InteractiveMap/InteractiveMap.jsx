import React, { useState } from 'react';
import './InteractiveMap.css';

function Marker() {
  return <div className='marker'></div>;
}

const InteractiveMap = () => {
  const [click, setClick] = useState(0);

  function putMarker() {
    setClick((prevState) => prevState + 1);
  }

  return (
    <div className='map-canvas' onClick={putMarker}>
      InteractiveMap
      {Boolean(click) && <Marker />}
    </div>
  );
};

export default InteractiveMap;
