// .eleventy.js
module.exports = function(eleventyConfig) {
  // Pass through your CSS folder directly to the output
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site" // This is the folder you'll point Cloudflare Pages to
    }
  };
};