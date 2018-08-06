<template>
  <div>
      <userTable :columns1='columns1' :data1='data1'></userTable>
  </div>
</template>
<script>
import userTable from '../user/component/userTable'
export default{
	name:'VIPuser',
	components:{
	  userTable
	},
	data(){
	  return {
        columns1:[
           {
             'title':'ID',
             'key':'id'
           },
           {
             'title':'用户ID',
             'key':'userid'
           },
           {
             'title':'用户昵称',
             'key':'name'
           },
           {
             'title':'VIP类型',
             'key':'type'
           },
           {
              'title':'到期时间',
              'key':'daoqitime'
           },
           {
              'title':'操作',
              'key':'action',
              render:(h,params) => {
                return h('div',[
                  h('Button',{
                    props:{
                      type:'primary',
                      size:'small'
                    },
                    on:{
                      click:() => {
                         this.remove(params.index);
                      }
                    }
                  },'删除')
                ])
              }
           }
        ],
        data1:[
           {
             'id':'1',
             'userid':'1',
             'name':'smith',
             'type':'VIP会员',
             'daoqitime':'2018'

           }
        ]
	  }
	},
	methods:{
	  remove(index){
	   this.$Modal.confirm({
	      title:'删除信息',
	      content:'您确定要删除这条信息吗',
	      onoK:() => {
	         this.data1.splice(index,1);
	      }
	   })
	  }
	}
}

</script>
<style scoped></style>