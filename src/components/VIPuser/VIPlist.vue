<template>
  <div>
      <userTable :columns1='columns1' :data1='data1'></userTable>
  </div>
</template>
<script>
import userTable from '../user/component/userTable'
export default{
	name:'VIPlist',
	components:{
	  userTable
	},
	data(){
	   return {
          columns1:[
             {
                'title':'ID',
                'key':'id',
                'fixed':'left',
                'width':50
             },
             {
                 'title':'类型',
                 'key':'type',
                 'width':200
             },
             {
                 'title':'名称',
                 'key':'name',
                 'width':250
             },
             {
                  'title':'所需点数',
                  'key':'diancount',
                  'width':200
             },
             {
                 'title':'时长',
                 'key':'totaltime',
                 'width':300
             },
             {
                 'title':'发布时间',
                 'key':'fabutime',
                 'width':300
             },
             {
                  'title':'操作',
                  'key':'action',
                  'width':300,
                  render:(h,params) => {
                     return h('div',[
                       h('Button',{
                         props:{
                            type:'info',
                            size:'small'
                         },
                         style:{
                           marginRight:'5px'
                         }
                       },'编辑'),
                       h('Button',{
                          props:{
                             type:'success',
                             size:'small'
                          },
                          on:{
                            click:() => {
                              this.remove(params.index);
                            }
                          }
                       },'删除')
                     ])
                  },

             }
          ],
          data1:[
             {
                'id':'1',
                'type':'VIP用户',
                'name':' 张三',
                'diancount':'100',
                'totaltime':'110',
                'fabutime':'2018-8-2'
             }
          ]
	   }
	},
	methods:{
	  remove(index){
	    this.$Modal.confirm({
	      title:'删除信息',
	      content:'您确定要删除这条信息吗?',
	      onOk:() => {
	         this.data1.splice(index,1);
	      }
	    })
	  }
	}
}

</script>
<style scoped></style>