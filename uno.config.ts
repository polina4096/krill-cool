import presetIcons from "@unocss/preset-icons";
import presetRemToPx from "@unocss/preset-rem-to-px";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetWind3 from "@unocss/preset-wind3";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [
    presetRemToPx(),
    presetWind3(),
    presetIcons(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: {
          name: "Rubik",
          weights: ["300", "400", "500", "600", "700"],
        },
        serif: {
          name: "Source Serif 4",
          weights: ["400"],
          italic: false,
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerCompileClass(),
  ],
});
