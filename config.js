const config = {
  tailwindjs: "./tailwind.config.js",
  port: 9050,
  purgecss: {
    content: ["src/**/*.{html,js,php}"],
    safelist: {
      standard: [/^pre/, /^code/],
      greedy: [/token.*/],
    },
  }
};

// tailwind plugins
const plugins = {
  typography: true,
  forms: true,
  containerQueries: true,
};

// base folder paths
const basePaths = ["src", "dist", "build"];

// folder assets paths
const folders = ["css", "js", "img", "fonts", "third-party"];

const paths = {
  root: "./",
};

basePaths.forEach((base) => {
  paths[base] = {
    base: `./${base}`,
  };
  folders.forEach((folderName) => {
    const toCamelCase = folderName.replace(/\b-([a-z])/g, (_, c) =>
      c.toUpperCase()
    );
    paths[base][toCamelCase] = `./${base}/${folderName}`;
  });
});

module.exports = {
  config,
  plugins,
  paths,
};
