<template>
   <Card style='marginBottom:10px;'>
       <Form ref='formInline' :model='formInline' inline>
      <FormItem label='用户名' >
            <Row type='flex' align='middle'>
                <Input type='text' placeholder='请输入用户名' v-model='formInline.userName'  style='width:200px;height:34px' clearable>
                </Input>
            </Row>
      </FormItem>
      <FormItem label='用户电话'>
            <Row type='flex' align='middle'>
                <Input type='text' placeholder='请输入手机号' v-model='formInline.userPhone' clearable style='width:200px;height:34px;'>
                </Input>
            </Row>
      </FormItem>
      <FormItem label='用户性别'>
            <Row type='flex' align='middle'>
               <Select v-model='formInline.userSex' style='width:200px;height:34px;'>
                   <Option v-for='item in sexList' :value='item.value' :key='item.id'>{{item.label}}</Option>
               </Select>
            </Row>
      </FormItem>
      <FormItem label='用户性别'>
            <Row type='flex' align='middle'>
               <Select v-model='formInline.userSex' style='width:200px;height:34px;'>
                   <Option v-for='item in sexList' :value='item.value' :key='item.id'>{{item.label}}</Option>
               </Select>
            </Row>
      </FormItem>
      <FormItem label='用户性别'>
            <Row type='flex' align='middle'>
               <Select v-model='formInline.userSex' style='width:200px;height:34px;'>
                   <Option v-for='item in sexList' :value='item.value' :key='item.id'>{{item.label}}</Option>
               </Select>
            </Row>
      </FormItem>
      <FormItem label='注册时间'>
            <Row type='flex' align='middle'>
                <DatePicker type='date' placeholder='请选择' v-model='formInline.userDate' clearable style='height:34px'></DatePicker>
            </Row>
      </FormItem>
      <FormItem>
         <Button type='primary' >搜索</Button>
      </FormItem>
   </Form>
   </Card>
</template>
<script>

export default{
	name:'topSearch',
	data(){
	  return {
         formInline:{
           userName:'',
         userPhone:'',
         userSex:'',
         userDate:''
         
         },
         sexList:[
           {
             id:'1',
             label:'男',
             value:'1'
           },
           { 
             id:'2',
             label:'女',
             value:'2'
           }
         ]
	  }
	}
}

</script>
<style scoped>
.form-item{
	display:inline-block;
}
</style>