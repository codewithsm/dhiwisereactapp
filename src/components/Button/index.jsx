import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[25px]",
};
const variants = {
  fill: {
    indigo_A400_01: "bg-indigo-A400_01 shadow-xs text-white-A700",
    black_900: "bg-black-900 text-white-A700",
  },
};
const sizes = {
  md: "h-[70px] px-8 text-xl",
  xs: "h-[50px] px-[15px] text-xs",
  sm: "h-[54px] px-[30px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "indigo_A400_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-white-A700 ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_A400_01", "black_900"]),
};

export { Button };
