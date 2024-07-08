import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTheme } from "../context/ThemeContext";

interface IconProps {
  icon: IconDefinition;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  const { iconColor } = useTheme();

  return (
    <span className="d-inline-block">
      <FontAwesomeIcon
        icon={icon}
        style={{ color: iconColor }}
        // className="me-2"
      />
    </span>
  );
};

export default Icon;
