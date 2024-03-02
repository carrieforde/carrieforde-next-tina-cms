import * as React from "react";
import { ChevronToggle } from "./chevron-toggle/chevron-toggle";
import { PlusMinusToggle } from "./plus-minus-toggle/plus-minus-toggle";
import { ToggleProps } from "./typings";

export const Toggle: React.FC<ToggleProps> = ({ variant, toggled }) => {
  if (variant === "chevron") {
    return <ChevronToggle toggled={toggled} />;
  }

  if (variant === "plus-minus") {
    return <PlusMinusToggle toggled={toggled} />;
  }

  return null;
};
