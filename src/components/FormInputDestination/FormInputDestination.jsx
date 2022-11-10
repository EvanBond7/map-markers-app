import React, { useState } from 'react';
import DestinationPoint from '../DestinationPoint/DestinationPoint';
import './FormInputDestination.css';

// function getCenterOfMap() {}

const FormInputDestination = () => {
  const [mapPoint, setMapPoint] = useState('');

  return (
    <div className='map-routes'>
      <div>
        <form>
          <label>
            <input
              type='text'
              value={mapPoint}
              placeholder='Новая точка маршрута'
              onChange={(e) => setMapPoint(e.target.value)}
            />
          </label>
        </form>
      </div>
      {mapPoint && (
        <ul>
          <DestinationPoint mapValue={mapPoint} />
        </ul>
      )}
    </div>
  );
};

export default FormInputDestination;
