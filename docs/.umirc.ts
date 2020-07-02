import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  title: 'Egg Remax UI',
  mode: 'site',
  logo: 'https://i.loli.net/2020/07/02/NDfcmq2FdKZ53AB.png',
  favicon: 'https://i.loli.net/2020/07/02/NDfcmq2FdKZ53AB.png',
  locales: [['zh-CN', '中文']],
  alias: {
    '@redchili/egg-ui': path.resolve(__dirname, '../packages/library/dist'),
  },
  resolve: {
    previewLangs: []
  }
  // more config: https://d.umijs.org/config
});
