const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  // Здесь можно добавить дополнительные настройки Metro, если нужно
};

// Обернуть конфиг с Reanimated
module.exports = wrapWithReanimatedMetroConfig(
  mergeConfig(defaultConfig, config),
);
