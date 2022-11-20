import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _28ed9e5e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _adca08ba = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _cb54a13e = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _d89e952e = () => interopDefault(import('../pages/cabinet.vue' /* webpackChunkName: "pages/cabinet" */))
const _124d1c3a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6170399f = () => interopDefault(import('../pages/order.vue' /* webpackChunkName: "pages/order" */))
const _2c67b3ce = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _79b8da62 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _13f732c6 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _58d169b5 = () => interopDefault(import('../pages/admin/media.vue' /* webpackChunkName: "pages/admin/media" */))
const _03dd7290 = () => interopDefault(import('../pages/admin/media.vue/index.vue' /* webpackChunkName: "pages/admin/media.vue/index" */))
const _7334585c = () => interopDefault(import('../pages/admin/portfolio/index.vue' /* webpackChunkName: "pages/admin/portfolio/index" */))
const _6d453a22 = () => interopDefault(import('../pages/admin/post/index.vue' /* webpackChunkName: "pages/admin/post/index" */))
const _c7bf5b42 = () => interopDefault(import('../pages/admin/post-category/index.vue' /* webpackChunkName: "pages/admin/post-category/index" */))
const _0fac6013 = () => interopDefault(import('../pages/admin/taxonomy/index.vue' /* webpackChunkName: "pages/admin/taxonomy/index" */))
const _1b0afde2 = () => interopDefault(import('../pages/admin/portfolio/create.vue' /* webpackChunkName: "pages/admin/portfolio/create" */))
const _0f9e443f = () => interopDefault(import('../pages/admin/post-category/create.vue' /* webpackChunkName: "pages/admin/post-category/create" */))
const _631654dc = () => interopDefault(import('../pages/admin/post/create.vue' /* webpackChunkName: "pages/admin/post/create" */))
const _0d93ed0b = () => interopDefault(import('../pages/admin/taxonomy/create.vue' /* webpackChunkName: "pages/admin/taxonomy/create" */))
const _65167c78 = () => interopDefault(import('../pages/admin/portfolio/_id.vue' /* webpackChunkName: "pages/admin/portfolio/_id" */))
const _8be53ef2 = () => interopDefault(import('../pages/admin/post-category/_id.vue' /* webpackChunkName: "pages/admin/post-category/_id" */))
const _2fbf5d0a = () => interopDefault(import('../pages/admin/post/_id.vue' /* webpackChunkName: "pages/admin/post/_id" */))
const _74e94b3b = () => interopDefault(import('../pages/admin/taxonomy/_id.vue' /* webpackChunkName: "pages/admin/taxonomy/_id" */))
const _7a920a2b = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _48a57923 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _44ce794e = () => interopDefault(import('../pages/_category/_id.vue' /* webpackChunkName: "pages/_category/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _28ed9e5e,
    name: "about"
  }, {
    path: "/admin",
    component: _adca08ba,
    name: "admin"
  }, {
    path: "/blog",
    component: _cb54a13e,
    name: "blog"
  }, {
    path: "/cabinet",
    component: _d89e952e,
    name: "cabinet"
  }, {
    path: "/login",
    component: _124d1c3a,
    name: "login"
  }, {
    path: "/order",
    component: _6170399f,
    name: "order"
  }, {
    path: "/portfolio",
    component: _2c67b3ce,
    name: "portfolio"
  }, {
    path: "/register",
    component: _79b8da62,
    name: "register"
  }, {
    path: "/services",
    component: _13f732c6,
    name: "services"
  }, {
    path: "/admin/media",
    component: _58d169b5,
    name: "admin-media"
  }, {
    path: "/admin/media.vue",
    component: _03dd7290,
    name: "admin-media.vue"
  }, {
    path: "/admin/portfolio",
    component: _7334585c,
    name: "admin-portfolio"
  }, {
    path: "/admin/post",
    component: _6d453a22,
    name: "admin-post"
  }, {
    path: "/admin/post-category",
    component: _c7bf5b42,
    name: "admin-post-category"
  }, {
    path: "/admin/taxonomy",
    component: _0fac6013,
    name: "admin-taxonomy"
  }, {
    path: "/admin/portfolio/create",
    component: _1b0afde2,
    name: "admin-portfolio-create"
  }, {
    path: "/admin/post-category/create",
    component: _0f9e443f,
    name: "admin-post-category-create"
  }, {
    path: "/admin/post/create",
    component: _631654dc,
    name: "admin-post-create"
  }, {
    path: "/admin/taxonomy/create",
    component: _0d93ed0b,
    name: "admin-taxonomy-create"
  }, {
    path: "/admin/portfolio/:id",
    component: _65167c78,
    name: "admin-portfolio-id"
  }, {
    path: "/admin/post-category/:id",
    component: _8be53ef2,
    name: "admin-post-category-id"
  }, {
    path: "/admin/post/:id",
    component: _2fbf5d0a,
    name: "admin-post-id"
  }, {
    path: "/admin/taxonomy/:id",
    component: _74e94b3b,
    name: "admin-taxonomy-id"
  }, {
    path: "/product/:id?",
    component: _7a920a2b,
    name: "product-id"
  }, {
    path: "/",
    component: _48a57923,
    name: "index"
  }, {
    path: "/:category/:id?",
    component: _44ce794e,
    name: "category-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
