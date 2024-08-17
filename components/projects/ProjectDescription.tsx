import React from "react";

const ProjectDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <h2 className="mb-4 project-card_title capitalize">{title}</h2>
      <p className="project-card_description">{description}</p>
    </div>
  );
};

export default ProjectDescription;
