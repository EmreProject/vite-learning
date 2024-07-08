import { defineConfig } from 'vite';
import path from 'path'

export default defineConfig({
  base:`/vite-deploy-1/`,
  root:path.resolve(__dirname, 'src'), //root folder bu, index html burada olmalı
  server: {
    port: 3000, //vite environment 3000 port kullanır
    open: true, //Automatically open the app in the default browser when the server starts.
    proxy: {
      '/api': 'http://localhost:5000' //backend in portunu gircen genelde backend 5000, front enden yapılan api requestleri sanki 5000den geliyormus gibi yaparki cors a takılmasın(bu proxy olayı daha cok test icin, deploy zamanı corsu manual ayarlamak lazım)
    },
  
  },
  resolve: { //import yapatken uzun uzun path yazmak yerine bunlar
    alias: { 
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@images': path.resolve(__dirname, 'src/images')
    }
  },
  
  build: {
    outDir: path.resolve(__dirname,'dist'), //output dist folde olcak
    sourcemap: true,
  }
});