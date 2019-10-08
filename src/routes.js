import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'FreightLegend - Rate & Quote Calculator App'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About - FreightLegend'
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq,
    meta: {
      title: 'FAQ - FreightLegend'
    }
  }
]

export default routes