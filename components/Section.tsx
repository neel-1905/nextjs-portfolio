import React, { ComponentProps, ReactNode } from "react";

type SectionType = ComponentProps<"section">;

const Section = (props: SectionType) => {
  const { children, ...other } = props;
  return (
    <section {...other} className="py-8 md:pb-10 lg:pb-14">
      {children}
    </section>
  );
};

export default Section;
