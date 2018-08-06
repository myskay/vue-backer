<template>
   <sidebarMenu :menuList='menuList'/>
</template>
<script>

import sidebarMenu from './components/sidebarMenu'
export default{
	name:'sideMenu',
	components:{
	   sidebarMenu
	},
	data(){
	  return{
         menuList:[
            {
                subName:'1',
                subname:'用户管理',
                iconType:'person',
                title:[
                    {
                      tmenuName:'/user/userManage',
                      tname:'用户组'
                      
                    },
                    {
                       tmenuName:'/user/manageGroup',
                       tname:'管理组'
                    }
                ]
            },
            {
               subName:'2',
               subname:'VIP管理',
               iconType:'ios-heart',
               title:[
                  {
                     tmenuName:'/VIPuser/VIPlist',
                     tname:'VIP列表'
                  },
                  {
                     tmenuName:'/VIPuser/VIPuser',
                     tname:'VIP用户'
                  }
               ]
            },
            {
               subName:'3',
               subname:'坐骑管理',
               iconType:'merge',
               title:[
                 
               ]
            },
            {
               subName:'4',
               subname:'靓号管理',
               iconType:'eject',
               title:[
                  {
                    tmenuName:'4-1',
                    tname:'靓号列表'
                  }
               ]
            },
            {
               subName:'5',
               subname:'家族管理',
               iconType:'ios-people',
               title:[
                 {
                    tmenuName:'5-1',
                    tname:'家族列表'
                 },
                 {
                    tmenuName:'5-2',
                    tname:'成员管理'
                 }
               ]
            },
            {
                subName:'6',
                subname:'财务管理',
                iconType:'social-yen-outline',
                title:[
                  {
                     tmenuName:'6-1',
                     tname:'充值记录'
                  },
                   {
                     tmenuName:'6-2',
                     tname:'提现记录'
                  },
                   {
                     tmenuName:'6-3',
                     tname:'消费记录'
                  },
                   {
                     tmenuName:'6-4',
                     tname:'手动充值'
                  },
                  {
                     tmenuName:'6-5',
                     tname:'充值规则'
                  }
                ]
            },
            {
                subName:'7',
                subname:'直播管理',
                iconType:'social-youtube-outline',
                title:[
                   {
                     tmenuName:'7-1',
                     tname:'直播列表'
                   },
                   {
                     tmenuName:'7-2',
                     tname:'直播监控'
                   },
                   {
                     tmenuName:'7-3',
                     tname:'系统消息'
                   },
                   {
                     tmenuName:'7-4',
                     tname:'用户举报'
                   },
                   {
                     tmenuName:'7-5',
                     tname:'直播记录'
                   }
                 ]

            }




           ]
	  }
	}
}

</script>
<style scoped>

</style>