import React from 'react';
import './Board.css';

const Board = () => {
  const renderHoles = () => {
    const holes = [];
    for (let i = 1; i <= 33; i++) {
      holes.push(<div key={i} className="hole">{i}</div>);
    }
    return holes;
  };

  return (
    <div className="board">
      {renderHoles()}
    </div>
  );
};

export default Board;
