<template>
   <Row class='todolist-item'>
      <Col span='2'>
          <Row type='flex' justify='center' align='middle'>
             <Checkbox v-model='todolistflag'/>
          </Row>
      </Col>
      <Col span='22'>
          <Row type='flex' justify='start' align='middle'>
             <p @click='handlehashid' :class="{hasDid:todolistflag}"  class='itemText'>{{text}}</p>
          </Row>
      </Col>
   </Row>
</template>
<script>

export default{
	name:'todolistItem',
	props:{
       text:String
	},
	data(){
	  return{
         todolistflag:false,
	  }
	},
	methods:{
	   handlehashid(){
	     this.todolistflag = !this.todolistflag
	   }
	}
}

</script>
<style scoepd>
.itemText{
	work-break:keep-all;
	white-space:nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
	cursor:pointer;
}
.hasDid{
	text-decoration:line-through;
	color:gray;
	font-weight:100;
}
</style>