import * as dotenv from "dotenv";

module.exports = {
  env: {
    SPOONACULAR_KEY: process.env.SPOONACULAR_API_KEY,
  },
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new Dotenv()],
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
    },
  },
};
