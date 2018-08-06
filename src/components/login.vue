<template>
   <div class='login'>
      <div class='login-con'>
         <Card>
            <p slot='title'>
               <Icon type='log-in'></Icon>
               欢迎登录
            </p>
            <div class='form-con'>
               <Form ref='loginForm' :model='form' :rules='rules'>
                  <FormItem prop='userName'>
                       <Input v-model='form.userName' placeolder='请输入用户名'>
                            <span slot='prepend'>
                                 <Icon :size='16' type='person'></Icon>
                            </span>
                       </Input>
                  </FormItem>
                  <FormItem prop='password'>
                       <Input type='password' v-model='form.password' placeolder='请输入密码'>
                           <span slot='prepend'>
                                <Icon :size='14' type='locked'></Icon>
                           </span>
                       </Input>
                  </FormItem>
                  <FormItem>
                      <Button type='primary' long @click='handleSubmit("loginForm")'>登录</Button>
                  </FormItem>
               </Form>
               <p class='login-tip'>请正确输入用户名和密码</p>
            </div>
         </Card>
      </div>
   </div>
</template>
<script>
$(function(){
         var  winheight = $(window).height();
         console.log(winheight);
         $('.login').height(winheight);
     })
export default{
	name:'login',
	data(){
	  return {
        form:{
             userName:'admin',
             password:''
        },
        rules:{
             userName:[
               {required:true,message:'用户名不能为空',trigger:'blur'}
             ],
             password:[
               {required:true,message:'密码不能为空',trigger:'blur'},
               {type:'string',min:6,message:'密码不能少于6位',trigger:'blur'}
             ]
        }

	  }
	},
	mounted:function(){
     
	},
	methods:{
	    handleSubmit(name){
	       this.$refs[name].validate((valid) => {
	         if(valid){
	            this.$Message.success('注册成功');
	         }else{
	            this.$Message.error('注册失败');
	         }
	       })
	    }
	}
}

</script>
<style scoped>
.login{
	width:100%;
  height:100%;
	background:url(https://file.iviewui.com/iview-admin/login_bg.jpg) no-repeat center center;
	background-size:cover;
    
    position:relative;
}
.login-con{
	position:absolute;
	right:160px;
	top:50%;
	transform:translateY(-50%);
	width:300px;
}
</style>