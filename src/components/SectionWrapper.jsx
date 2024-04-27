"use client";

const SectionWrapper = ({ children, className = "", ...props }) => (
  <section {...props} className={`py-16 lg:py-24 ${className}`}>
    {children}
  </section>
);

export default SectionWrapper;
