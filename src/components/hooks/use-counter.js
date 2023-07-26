import { useState, useEffect } from 'react';

export function useCounter({ initialCount }) {
  const [count, seCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    seCount(count + 1);
  };
  return {
    count: count,
    increment: increment,
  };
}
