<template>
   <Card>
       <p slot='title'>
         <Icon type="clipboard"></Icon>
         查看个人信息
       </p>
      <ul>
         <li v-for='(item,index) in infoList' :key='index'>
            <span class='title'>{{item.title}}</span>
            <span class='val'>{{item.val}}</span>
         </li>
      </ul>
      <Button style='marginTop:10px;'>
         <Icon type="arrow-left-c"></Icon>
         返回
      </Button>
   </Card>
</template>
<script>

export default{
	name:'userCheck',
	data(){
	  return{
         infoList:[
            {
               title:'id',
               val:'1'
            },
            {
               title:'手机号码',
               val:'1520515165'
            },
            {
               title:'昵称',
               val:'165165'
            },
            {
               title:'真实姓名',
               val:'张三'
            },
            {
               title:'生日',
               val:'2015-08-29'
            },
            {
               title:'性别',
               val:'女'
            },
            {
               title:'微信',
               val:'1515616'
            },
            {
               title:'可用积分',
               val:'100'
            },
            {
               title:'注册时间',
               val:'2013'
            },
            {
               title:'最后登录时间',
               val:'2018'
            }
         ]
	  }
	}
}

</script>
<style scoped>
.title{
	min-width:150px;
	display:inline-block;
	text-align:center;
	padding:10px 0;
	border-right:1px solid #f1f1f1;
}
.val{
	display:inline-block;
	padding-left:5px;
}
ul li{
	border: 1px solid #f1f1f1;
    border-bottom: none;
}
ul li:last-child{
	border-bottom:1px solid #f1f1f1;
}
</style>