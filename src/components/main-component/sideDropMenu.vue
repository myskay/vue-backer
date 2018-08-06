<template>
  <div class='sideDropMenu-con' >
     <div v-for='item in menuList'>

        <Dropdown v-if='item.title.length < 1' placement='right-start'>
           <Button type='text' style='z-index:1'>
               <Icon type='ios-home' size='20' color='#fff'></Icon>
            </Button>
            <DropdownMenu slot='list'>
                <DropdownItem >{{item.name}}</DropdownItem>
            </DropdownMenu>
        </Dropdown>


        <Dropdown placement="right-start" v-else>
            <Button type='text' style='z-index:1'>
               <Icon :type='item.iconType' size='20' color='#fff'></Icon>
            </Button>
            <DropdownMenu slot='list'>
               <div v-for='item1 in item.title'>

                  <DropdownItem :key="item1.tmenuName">{{item1.tname}}</DropdownItem>
               </div>
            </DropdownMenu>
        </Dropdown>
     </div>
  </div>
</template>
<script>

export default{
	name:'sideDropMenu',
	data(){
	   return {
           menuList:[
            {
                subName:'1',
                name:'用户管理',
                iconType:'person',
                title:[
                    {
                      tmenuName:'1-1',
                      tname:'用户组'
                      
                    },
                    {
                       tmenuName:'1-2',
                       tname:'管理组'
                    }
                ]
            },
            {
               subName:'2',
               name:'VIP管理',
               iconType:'ios-heart',
               title:[
                  {
                     tmenuName:'2-1',
                     tname:'VIP列表'
                  },
                  {
                     tmenuName:'2-2',
                     tname:'VIP用户'
                  }
               ]
            },
            {
               subName:'3',
               name:'坐骑管理',
               iconType:'merge',
               title:[
                 
               ]
            },
            {
               subName:'4',
               name:'靓号管理',
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
               name:'家族管理',
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
                name:'财务管理',
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
                name:'直播管理',
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
<style scoped></style>