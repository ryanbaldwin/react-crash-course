import React from 'react';

function counter({counter, onIncrement, onDelete}) {
  const getBadgeClasses = function() {
    let classes = 'badge m-2 badge-';
    classes += counter.value === 0 ? 'warning' : 'primary';
    return classes;
  };

  const formatCount = function() {
    const value = counter.value;
    return value === 0 ? 'Zero' : value;
  };

  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className="btn btn-secondary btn-sm">
        Increment
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2">
        Delete
      </button>
    </div>
  );
}

export default counter;
