<template>
<div>
    <div class='top'>
        <span @click='showul'>{{dropData[currentIndex].name}}</span>
    </div> 
   <transition name='fade'>
       <ul v-show='flag'>
           <li v-for='(item,index) in dropData' @click='changeName(index)'>{{item.name}}</li>
       </ul>
   </transition>
</div>
</template>
<script>

export default{
	name:'dropmenu',
	data(){
	   return{
         currentIndex:0,
         flag:false
	   }
	},
	props:{
	   dropData:{
	     type:Array,
	     default:function(){
	        return[
               {
                  name:'',
                  value:1
               }
	        ]
	     }
	   }
	},
	methods:{
	   changeName(index){
          this.currentIndex = index;
          this.flag = false;
	   },
	   showul(){
	      this.flag = true;
	   }
	}
}

</script>
<style scoped>
.fade-enter,.fade-leave-to{
	opacity:0;
}
.fade-enter-active,.fade-leave-active{
	transition:opacity 0.5s;
}
.fade-enter,.fade-leave-to{
	opacity:1;
}

</style>