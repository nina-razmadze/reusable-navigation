import { Fragment } from 'react';

export default function Table({ data, config, keyFn }) {
  const renderdheaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className='p-2' key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className='border-b ' key={keyFn}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className='table-auto border-spacing-2 w-[290px]'>
      <thead>{renderdheaders}</thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
