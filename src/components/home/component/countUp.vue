<template>
   <div>
      <p :style="{color:color,fontSize:'25px',fontWeight:'700'}">{{num}}</p>
      <slot name='intro'></slot>
   </div>
</template>
<script>

export default{
	name:'countUp',
	props:{
       color:String
	},
  data(){
       return {
          num:'1010',
       }
    }
}

</script>
<style scoped></style>