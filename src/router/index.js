import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import myrouter from './router';


Vue.use(Router)

//路由配置
const RouterConfig = {
    routes:myrouter
}

export default new Router(RouterConfig);




