import classnames from 'classnames';

const noop = () => {};

const Button = ({
  type = 'button',
  buttonText,
  onClick = noop,
  className = '',
  children,
  disabled
}) => {
  const handleClick = (e) => {
    return onClick(e);
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={classnames(
        'inline-flex items-center bg-red-500 text-neutral-50 rounded-3xl px-10 py-3 text-base font-medium shadow-sm cursor-pointer hover:bg-black',
        [className]
      )}>
      {children}
      {buttonText}
    </button>
  );
};

export default Button;