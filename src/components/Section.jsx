import React from "react";

const Section = ({ id, children, className }) => (
  <section id={id} className={`py-20 md:py-32 ${className}`}>
    <div className="container mx-auto px-6">{children}</div>
  </section>
);

export default Section;
