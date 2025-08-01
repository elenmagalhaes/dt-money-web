import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"assets": "/src/assets",
			"components": "/src/components",
			"contexts": "/src/contexts",
			"styles": "/src/styles",
			"pages": "/src/pages",
		},
	},
})
