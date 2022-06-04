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
					@import "./src/assets/scss/reset.scss";
					@import "./src/assets/scss/typography.scss";
					@import "./src/assets/scss/components/index.scss";
					@import "./src/assets/scss/layout/index.scss";
				`
			}
		}
	}
})
