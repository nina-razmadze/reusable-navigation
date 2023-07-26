import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = classNames(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-600 bg-blue-500 text-white': primary && !outline,
      'border-gray-900 bg-gray-900 text-white': secondary && !outline,
      'border-green-500 bg-green-500 text-white': success && !outline,
      'border-yellow-400 bg-yellow-400 text-white': warning && !outline,
      'border-red-500 bg-red-500 text-white': danger && !outline,
      'rounded-full': rounded,
      'bg-white': outline,

      'text-blue-500 border-blue-600 ': outline && primary,
      'text-gray-900 border-gray-900': outline && secondary,
      'text-green-500 border-green-500': outline && success,
      'text-yellow-400 border-yellow-400': outline && warning,
      'text-red-500 border-red-500': outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};
