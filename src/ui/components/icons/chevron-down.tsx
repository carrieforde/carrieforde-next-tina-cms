import { IconProps } from "./typings";
import { iconClasses } from "./utilities";

export const ChevronDown: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={iconClasses(className)}
  >
    {/* Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. */}
    <path d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z" />
  </svg>
);
