<template>
   <div>
      <Table height='216' :columns='columns1' :data='data1'></Table>
   </div>
</template>
<script>

export default{
	name:'mapTable',
	props:{
      columns1:Array,
      data1:Array
	},
	data(){
	  return{
        
	  }
	}
}

</script>
<style scoped></style>