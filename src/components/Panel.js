import classNames from 'classnames';

export default function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white  w-full',
    classNames
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}
