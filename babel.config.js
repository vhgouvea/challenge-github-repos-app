module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@context': './src/context',
          '@database': './src/database',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@theme': './src/theme'
        }
      }]
    ]
  };
};
