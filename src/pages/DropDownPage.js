import DropDown from '../components/DropDown';
import { useState } from 'react';

export default function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
    console.log(option);
  };

  const options = [
    { label: 'red', value: 'red' },
    { label: 'green', value: 'green' },
    { label: 'yellow', value: 'yellow' },
  ];
  return (
    <div className='pl-[350px] pt-[100px]'>
      <DropDown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}
