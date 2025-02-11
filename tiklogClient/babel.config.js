module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel', 'react-native-reanimated/plugin'],
   /*  presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ], */
    ///plugins: ['nativewind/babel'],
    //plugins: [ 'react-native-reanimated/plugin'],
  };
};
