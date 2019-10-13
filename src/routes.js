import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import ThanksForm from './pages/ThanksForm' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'FreightLegend - Quoting freight rates made easy'
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy,
    meta: {
      title: 'Privacy - FreightLegend'
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
  },
  {
    path: '/success',
    name: 'thanks',
    component: ThanksForm,
    meta: {
      title: 'Thanks - FreightLegend'
    }
  }
]

export default routes