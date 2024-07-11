import { Route, Routes } from 'react-router'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('../pages/Home'))

const routes = [{ key: 'home', path: '/', Component: Home }]

export default function Router() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes location={location} key={location.pathname}>
                    {routes.map(({ key, path, Component }) => (
                        <Route key={key} path={path} element={<Component />} />
                    ))}
                </Routes>
            </Suspense>
        </AnimatePresence>
    )
}
