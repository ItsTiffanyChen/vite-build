const { defineConfig, splitVendorChunkPlugin } = require('vite');
const vue = require('@vitejs/plugin-vue');
const { chunkSplitPlugin } = require('vite-plugin-chunk-split');
const path = require('path');
const { ViteEjsPlugin } = require('vite-plugin-ejs');

// https://vitejs.dev/config/
module.exports = defineConfig(() => ({
  base: '//cdn.104.com.tw/',
  build: {
    sourcemap: false,
    outDir: 'dist/test',
    copyPublicDir: false,
    modulePreload: false,
    manifest: 'new-manifest.json',
    rollupOptions: {
      output: {
        entryFileNames: path.join('assets/js', '[name].[hash].js'),
        assetFileNames: () => {
          return path.join('assets', 'css/[name].[hash][extname]');
        },
        manualChunks(id) {
          console.log('manualChunks', id);
        },
        chunkFileNames: ({ name }) => {
          console.log('chunkFileNames', name);
          const filename = name === 'vendor' ? 'vendor' : '[name]';
          return `assets/js/${filename}.[hash].js`;
        },
      },
      input: {
        main: path.resolve(__dirname, './index.html'),
        index: path.resolve(__dirname, './src/index.html'),
        testmain: path.resolve(__dirname, './src/test-main.html'),
        testindex: path.resolve(__dirname, './src/test-index.html'),
        testmaster: path.resolve(__dirname, './src/test-master.html'),
      },
    },
  },
  resolve: {
    alias: {
      static: path.resolve(__dirname, './public/static'),
      node_modules: path.resolve(__dirname, './node_modules'),
      '~node_modules': path.resolve(__dirname, './node_modules'),
      '@': path.resolve(__dirname, './src'),
      scss: path.resolve(__dirname, './src/scss'),
      '~scss': path.resolve(__dirname, './src/scss'),
      pages: path.resolve(__dirname, './src/pages'),
      components: path.resolve(__dirname, './src/components'),
      propstypes: path.resolve(__dirname, './src/propstypes'),
      utility: path.resolve(__dirname, './src/utility'),
      i18n: path.resolve(__dirname, './src/i18n'),
      stories: path.resolve(__dirname, './src/stories'),
      stores: path.resolve(__dirname, './src/stores'),
      templates: path.resolve(__dirname, './templates'),
      vue: '@vue/compat',
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2,
          },
        },
      },
    }),
    ViteEjsPlugin({
      test: 'working!',
    }),
    // splitVendorChunkPlugin(),
    chunkSplitPlugin({
      // strategy: 'single-vendor',
      customSplitting: {
        vue: [/vue/, /^@vue/],
        // lodash: ['lodash'],
      },
    }),
  ],
}));
