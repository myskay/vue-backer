<template>
   <div>
       <Table stripe border :columns='columns1' :data='data1'></Table> 
       
       <div style='margin:10px;overflow:hidden'>
           <div style='float:right;'>
               <Page :total='100' :current='1'></Page>
           </div>
       </div>
   </div>
</template>
<script>

export default{
	name:'userTable',
	props:{
	  columns1:Array,
	  data1:Array,
	},
	data(){
	  return {

	  }
	},
	methods:{
	 
	}
}

</script>
<style scoped></style>