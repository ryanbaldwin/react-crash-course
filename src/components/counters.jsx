import React from 'react';
import Counter from './counter';

function Counters({onReset, counters, onDelete, onIncrement}) {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm-m2">
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
        />
      ))}
    </div>
  );
}

export default Counters;
