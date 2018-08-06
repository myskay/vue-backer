import main from '@/components/main'

//登录页
const  loginRouter = {
    path:'/login',
    name:'login',
    title:'登录',
    component:() => import('@/components/login.vue')
}
//作为Main组件的左侧菜单


const appRouter = [
   {
       path:'/user',
       name:'appRouter',
       component:main,
       children:[
            {
                path:'userManage',
                component:() => import('@/components/user/userManage.vue'),
            },
            {
                path:'userCheck',
                component:() => import('@/components/user/userCheck.vue')
            },
            {
               path:'userEdit',
               component:() => import('@/components/user/userEdit.vue')
            },
            {
              path:'manageGroup',
              component:() => import('@/components/user/manageGroup.vue')
            }
            
       ]
   },
   {
        path:'/VIPuser',
        name:'vIPuser',
        component:main,
        children:[
           {
              path:'VIPlist',
              component:() => import('@/components/VIPuser/VIPlist.vue')
            },
            {
               path:'VIPuser',
               component:() => import('@/components/VIPuser/VIPuser.vue')
            }
         ]
   }
]

//作为Main组件的子页面展示并且不在左侧菜单显示的路由
const  otherRouter = 
  {
	  path:'/',
	  name:'otherRouter',
	  redirect:'/login',
	  component:main,
	  children:[
       {
       	  path:'home',
       	  title:'首页',
       	  name:'home_index',
       	  component:() => import('@/components/home/home.vue')
          
       }
	   ]
    }
//上面所有定义的路由都要写在下面的routers里
const  routers = [
  loginRouter,
  otherRouter,
  ...appRouter
];
export default routers