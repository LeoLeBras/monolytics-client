// Import vue router
import Router from 'vue-router';
import Vue from 'vue';
Vue.use(Router);

// Create routes
const router = new Router();
router.map({
  '/': {
    component: require('web_modules/home')
  },
  '/tops/:category/:rank': {
    component: require('web_modules/tops')
  },
  '/about': {
    component: require('web_modules/about')
  },
  '/whatis': {
    component: require('web_modules/whatis')
  },
  '/rank': {
    component: require('web_modules/rank')
  }
});
router.redirect({
  '*': '/'
});

export default router;
