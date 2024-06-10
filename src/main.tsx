import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from '@/providers/AuthProvider.tsx'
import { store } from '@/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<AuthProvider>
						<React.Suspense fallback={<></>}>
							<App />
						</React.Suspense>
					</AuthProvider>
				</Provider>
			</QueryClientProvider>
		</HelmetProvider>
	</React.StrictMode>
)
