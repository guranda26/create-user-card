import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IconProps {
  icon: IconDefinition;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <span className="d-inline-block">
      <FontAwesomeIcon icon={icon} className="text-primary me-1" />
    </span>
  );
};

export default Icon;
