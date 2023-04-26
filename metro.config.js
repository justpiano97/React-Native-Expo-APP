// This packagerOpts is needed to add SVG, reference: https://github.com/expo/expo-cli/issues/875#issuecomment-515395734
const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push(
  // Adds support for `.db` files for SQLite databases
  'svg'
);

config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');

config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

module.exports = config;

// module.exports = (async () => {
//     const {
//         resolver: { sourceExts, assetExts },
//     } = await getDefaultConfig();

//     return {
//         transformer: {
//             babelTransformerPath: require.resolve('react-native-svg-transformer'),
//         },
//         resolver: {
//             assetExts: assetExts.filter((ext) => ext !== 'svg'),
//             sourceExts: [...sourceExts, 'svg'],
//         },
//     };
// })();
