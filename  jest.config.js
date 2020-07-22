module.export = {
  roots: ["<rootDir>/src"],
  testMatch: ["<rootDir>/src/**/>(*.)test.{js, ts, jsx, tsx}"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  setupFilesAfterEnv: [
    "jest-dom/extend-expect",
    "react-testing-library/cleanup-after-each",
  ],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ttf)$":
      "<rootDir>/__mocks__/file.js",
  },
};
