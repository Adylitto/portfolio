import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://Adyl.dev/icon.svg',
    brandTitle: 'Adyl ITT0 Components',
    brandUrl: 'https://Adyl.dev',
  },
});
