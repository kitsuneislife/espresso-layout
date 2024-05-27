
import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalProvider } from './toolbox/GlobalContext';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<GlobalProvider>
		<App />
	</GlobalProvider>
)