export default ({ config }) => ({
  ...config,
  name: "component library",
  slug: "component-library",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
