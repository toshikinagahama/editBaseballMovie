import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RunnerInfoArea from './RunnerInfoArea';
import CountInfoArea from './CountInfoArea';
import ScoreInfoArea from './ScoreInfoArea';
import BatterInfoArea from './BatterInfoArea';

function CanvasArea() {
  const dispatch = useDispatch();

  React.useEffect(() => {}, []);

  return (
    <div>
      <div style={{ position: 'absolute' }}>
        <ScoreInfoArea />
        <CountInfoArea />
        <RunnerInfoArea />
        <BatterInfoArea />
      </div>
    </div>
  );
}

export default CanvasArea;
