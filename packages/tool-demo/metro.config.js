const { resolve } = require('path');
const { realpathSync } = require('fs');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    unstable_enablePackageExports: true,
    unstable_enableSymlinks: true,
    resolveRequest: (context, moduleName, platform) => {
      // if (moduleName.includes('/setget')) {
      //   const { type, filePath } = context.resolveRequest(context, moduleName, platform);
      //   return {
      //     type,
      //     filePath: realpathSync(filePath)
      //   }
      // }
      return context.resolveRequest(context, moduleName, platform);
    }
  },
  watchFolders: [
    resolve(__dirname, '../../node_modules'),
    resolve(__dirname, '../../packages/tool-utils'),
    resolve(__dirname, '../../packages/tool-runtime'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
