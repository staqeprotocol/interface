"use client";

const GradientWrapper = ({ children, ...props }) => (
  <div {...props} className={`relative ${props.className || ""}`}>
    <div
      className={`absolute m-auto blur-[160px] ${props.wrapperclassname || ""}`}
      style={{
        background:
          "linear-gradient(rgb(0 255 29) 0%, rgb(0 255 212) 0.01%, rgb(144 0 255) 100%)",
      }}
    ></div>
    <div className="relative">{children}</div>
  </div>
);

export default GradientWrapper;
