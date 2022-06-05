import { defineConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		VuePlugin(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "./src/assets/scss/vars.scss";
				`
			}
		}
	}
})
