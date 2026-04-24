import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'

// Páginas simples
function Home() {
  return <h1>Home Page</h1>
}

function CarParts() {
  return <h1>Car Parts Page</h1>
}

// Root
const rootRoute = createRootRoute()

// Rutas
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const carPartsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/carparts',
  component: CarParts,
})

// Tree
const routeTree = rootRoute.addChildren([homeRoute, carPartsRoute])

export const router = createRouter({ routeTree })