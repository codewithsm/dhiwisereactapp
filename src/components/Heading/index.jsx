import React from "react";

const sizes = {
  s: "text-[52px] font-semibold md:text-[44px] sm:text-[38px]",
  md: "text-[56px] font-semibold leading-[110%] md:text-5xl sm:text-[42px]",
  xs: "text-[42px] font-semibold leading-10 md:text-[38px] sm:text-[32px]",
  lg: "text-6xl font-semibold md:text-[52px] sm:text-[46px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-transparent font-urbanist ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
