module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  features: {
    postcss: false
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack4'
  }
};
