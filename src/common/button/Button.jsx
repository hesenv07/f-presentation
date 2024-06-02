"use client";

 const Button = ({
  name='main_btn',
  type = "button",
  onClick,
  text,
  children,
  classes,
  disabled,
  ...rest
}) => {
  const names = {
    light_btn: `light-btn`,
    main_btn: `main-btn`,
  };
  const btn_text = children?.length > 0 ? children : text;
  return (
    <button
      type={type}
      className={`${classes} ${names[name]}  ${disabled ? "opacity-30 " : "opacity-100"}`}
      onClick={onClick}
      {...rest}
      disabled={disabled}
    >
      {btn_text}
    </button>
  );
};

export default Button;