import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import AdminView from './AdminView.vue'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/admin', component: AdminView }
  ]
  
  const router = createRouter({
    history: createWebHistory(), // Use Web history for client-side routing
    routes
  })
  
  createApp(App).use(router).mount('#app')
