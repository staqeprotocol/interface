"use client";

const GradientWrapper = ({ children, ...props }) => (
  <div {...props} className={`relative ${props.className || ""}`}>
    <div
      className={`absolute m-auto blur-[160px] ${props.wrapperclassname || ""}`}
      style={{
        background:
          "linear-gradient( 171.8deg,  rgba(5,111,146,1) 13.5%, rgba(6,57,84,1) 78.6% )",
      }}
    ></div>
    <div className="relative">{children}</div>
  </div>
);

export default GradientWrapper;
