import { create } from "@storybook/theming/create";

type ColorScheme = "light" | "dark";

let preferredColorScheme: ColorScheme = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches
  ? "dark"
  : "light";

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    preferredColorScheme = e.matches ? "dark" : "light";
  });

export default create({
  base: preferredColorScheme,
  brandTitle: "Carrie Forde",
  brandImage: "/assets/icon.png",
  brandTarget: "_self",
});
