import { configure } from '@storybook/react';

// Импорт всех файлов
const req = require.context('../src', true, /\.stories\.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
