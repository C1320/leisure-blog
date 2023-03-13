import vue from '@vitejs/plugin-vue';
import path from 'path';
// eslint-disable-next-line import/extensions
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  // base: '/', // 发布GitHub需要与https://<USERNAME>.github.io/<REPO>一致
  plugins: [vue(),
    DefineOptions(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  define: {
    'process.env': {}
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
            '@import "@/styles/import.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~@': path.resolve(__dirname, '/src')
    }
  },
  build: {
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
          return '';
        },
        chunkFileNames: chunkInfo => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/')
            : [];
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
          return `js/${fileName}/[name].[hash].js`;
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 9999
  }
});
