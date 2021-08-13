import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Products from './components/Products.vue'

export default [
   { path : '/', component: Home},
   { path : '/about', component: About},
   { path : '/contact', component: Contact},
   { path : '/products', component: Products},
];
