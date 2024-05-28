"use client";

 const Button = ({
  name,
  type = "button",
  onClick,
  text,
  children,
  className,
  disabled,
  ...rest
}) => {
  const names = {
    light_btn: `light-btn`,
    main_btn: `main-btn`,
  };
  const classes = className ? className : names[name];
  const btn_text = children?.length > 0 ? children : text;
  return (
    <button
      type={type}
      className={`${classes} main-btn ${disabled ? "opacity-30 " : "opacity-100"}`}
      onClick={onClick}
      {...rest}
      disabled={disabled}
    >
      {btn_text}
    </button>
  );
};

export default Button;