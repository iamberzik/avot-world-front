import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 5175
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})