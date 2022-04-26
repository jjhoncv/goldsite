module.exports = (api) => {
  const isDev = () => process.env.NODE_ENV === "development";

  const isTargetWeb = api.caller((caller) => caller && caller.target === "web");

  return {
    presets: [
      [
        "@babel/env",
        {
          modules: false,
          useBuiltIns: "entry",
          corejs: 3.6,
          ...(isTargetWeb === false && {
            targets: {
              node: "current",
            },
          }),
        },
      ],
      "@babel/react",
      "@babel/typescript",
    ],
    plugins: [
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread",
      "@babel/syntax-dynamic-import",
      "@babel/plugin-transform-runtime",
    ],
  };
};
