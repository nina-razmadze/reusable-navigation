import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

export default function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded  cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        <div className='flex justify-between'>
          {value?.label || 'Select...'}
          <GoChevronDown className='text-lg' />
        </div>
      </Panel>
      {isOpen && (
        <Panel className='absolute top-full '>{renderedOptions}</Panel>
      )}
    </div>
  );
}
