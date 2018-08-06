<template>
  <Card>
     <p slot='title'>
       <Icon type='edit'></Icon>
       编辑用户信息
     </p>
     <Form ref='formData' :model='formData' :rules='formRule' :label-width='80'>
        <FormItem label='头像' prop='icon'>
           <Row type='flex' >
               <div class='inputFile'>
                   <Input type='file'   v-model='formData.icon' class='icon'></Input>
                   <div class='a-upload'>
                      <img src='../../assets/newadd.png'/>
                   </div>
               </div>
           </Row>
        </FormItem>
        <FormItem label='昵称' prop='name'>
           <Row type='flex'>         
               <Input v-model='formData.name' placeholder='请输入昵称'></Input>
           </Row>
        </FormItem>
        <FormItem label='性别' prop='sex'>
           <Row type='flex'>
              <Select v-model='formData.sex' filterable>
                <Option value='1'>男</Option>
                <Option value='2'>女</Option>
              </Select>
           </Row>
        </FormItem>
        <FormItem label='手机号' prop='tel'>
            <Row type='flex'>
               <Input v-model='formData.tel' placeholder='请输入手机号' number :maxlength='11'></Input>
            </Row>
        </FormItem>
        <FormItem>
           <Button type='primary' @click='handleSubmit("formData")'>提交</Button>
           <Button type='ghost' @click='handleReset("formData")'>重置</Button>
        </FormItem>
     </Form>
  </Card>
</template>
<script>

export default{
	name:'usereEdit',
	data(){
    var reg_tel = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|17[0|3|6|7|8]|18[0|1|2|3|4|5|6|7|8|9])\d{8}$/;
    var validateTel = function(rule,value,callback){
       if(!value){
         return callback(new Error('手机号码不能为空'));
       }else if(!reg_tel.test(value)){
         return callback(new Error('请填写正确的手机号码'));
       }else{
          callback();
       }
    }
	  return{
          formData:{
             'icon':'',
             'name':'',
             'sex':'',
             'tel':""
          },
          formRule:{
             icon:[
               {required:true,message:'请上传头像',trigger:'blur'}
             ],
             name:[
               {required:true,message:'昵称不能为空',trigger:'blur'}
             ],
             sex:[
                {required:true,message:'请选择性别',trigger:'blur'}
             ],
             tel:[
                {required:true,validator:validateTel,trigger:'blur'}
             ]
          }
	  }
	},
	methods:{
	   handleSubmit(name){
	      this.$refs[name].validate( (valid) => {
	         if(valid){
	           this.$Message.success('Success');
	         }else{
	           this.$Message.error('fail');
	         }
	      })
	   },
	   handleReset(name){
	     this.$refs[name].resetFields();
	   }
	}
}

</script>
<style scoped>
.inputFile{
	padding:4px 7px;
	border:1px solid #dddee1;
	border-radius:4px;
	position:relative;
	width:100%;
	height:150px;
}
.a-upload{
	position:absolute;
	top:0;
	left:0;
	width:200px;
    height:150px;
    z-index:1;
}
.a-upload img{
	display:block;
	width:100%;
	height:100%;
}
.icon{
	opacity:0;
	position:absolute;
	top:0;
	left:0;
	width:200px;
	height:150px;
	z-index:10;
}
</style>

