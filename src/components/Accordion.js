import { useState } from 'react';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';

export default function Acordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };
  const renderedItems = items.map((item, index) => {
    const isExpended = index === expandedIndex;

    const icon = (
      <span className='text-2xl'>
        {isExpended ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className='w-[400px] flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpended && (
          <div className='border-b p-5 w-[400px]'>{item.content}</div>
        )}
      </div>
    );
  });
  return <div className='border-x  rounded'>{renderedItems}</div>;
}
