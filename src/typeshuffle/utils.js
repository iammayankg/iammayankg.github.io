import { TypeShuffle } from "./typeShuffle";
var WebFont = require("webfontloader");
// Preload images
const preloadFonts = (id) => {
  return new Promise((resolve) => {
    WebFont.load({
      typekit: {
        id: id,
      },
      active: resolve,
    });
  });
};

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const triggerOnInputRef = async (inputRef) => {
  await preloadFonts("biu0hfr");
  const ts = new TypeShuffle(inputRef.current);
  ts.trigger("fx1");
};

export { preloadFonts, randomNumber, triggerOnInputRef };
