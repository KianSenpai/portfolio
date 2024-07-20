import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PrimeReactProvider } from 'primereact/api'
import { Provider } from 'jotai'

const applyTheme = async () => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    if (darkThemeMq.matches) {
        await import('primereact/resources/themes/lara-dark-indigo/theme.css')
    } else {
        await import('primereact/resources/themes/lara-light-cyan/theme.css')
    }
}

applyTheme().then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <Provider>
                <PrimeReactProvider>
                    <App />
                </PrimeReactProvider>
            </Provider>
        </React.StrictMode>
    )
})
