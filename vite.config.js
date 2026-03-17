import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh for development
      fastRefresh: true,
      // Babel configuration for React optimization
      babel: {
        plugins: [
          // Remove PropTypes in production builds
          ['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }]
        ]
      }
    })
  ],
  
  // Build configuration for production optimization
  build: {
    // Output directory for production build
    outDir: 'dist',
    
    // Generate source maps for debugging (can be disabled for smaller bundle)
    sourcemap: false,
    
    // Minification configuration
    minify: 'esbuild', // Faster than terser, good compression
    
    // Target modern browsers for smaller bundle size
    target: 'es2015',
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Rollup-specific options
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunk for React and ReactDOM
          'react-vendor': ['react', 'react-dom'],
        },
        
        // Asset file naming with content hash for cache busting
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          
          // Different naming patterns for different asset types
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        
        // JavaScript chunk naming with content hash
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    
    // Chunk size warning limit (500kb)
    chunkSizeWarningLimit: 500,
    
    // Enable CSS minification
    cssMinify: true,
    
    // Optimize dependencies
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  
  // Server configuration for development
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    open: true
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: false,
    host: true,
    open: true
  },
  
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: []
  }
})