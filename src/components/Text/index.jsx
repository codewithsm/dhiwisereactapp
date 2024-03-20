import React from "react";

const sizes = {
  xs: "text-lg font-light",
  lg: "text-[29px] font-normal leading-10 md:text-[27px] sm:text-[25px]",
  s: "text-[22px] font-normal leading-[30px]",
  "2xl": "text-[54px] font-normal leading-[110%] md:text-[46px] sm:text-[40px]",
  "3xl": "text-[70px] font-normal md:text-5xl",
  xl: "text-[32px] font-medium leading-[160%] md:text-3xl sm:text-[28px]",
  md: "text-2xl font-normal leading-[29px] md:text-[22px]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-urbanist ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
