<template>
  <div>
      <div class='number-btn' @click='reduce'>-</div>
      <div class='number-input'>
          <input type='text' v-model='num' @keyup='getNumber'/>
      </div>
      <div class='number-btn' @click='increase'>+</div>
  </div>
</template>
<script>

export default{
	name:'changeNumber',
	data(){
	   return{
          num:'5'
	   }
	},
	props:{
       minNumber:{
          type:Number,
          default:1
       },
       maxNumber:{
          type:Number,
          default:5
       }
	},
    methods:{
       reduce(){
          if(this.num <=  this.minNumber){
             return;
          }
          this.num--;
       },
       increase(){
          if(this.num >= this.maxNumber){
            return;
          }
          this.num++;
       },
       getNumber(){
          var fix;
          if(typeof this.num === 'string'){
             fix = Number(this.num.replace(/\D/g,''));
          }else{
             fix = this.num;
          }
          if(this.num <=  this.minNumber || this.num > this.maxNumber){
             fix = this.minNumber;
          }
          this.num = fix;
       }
    }
}

</script>
<style scoped>
.number-btn{
	display:inline-block;
	border:1px solid #ccc;
}
.number-input{
	display:inline-block;
	border-top:1px solid #ccc;
	border-bottom:1px solid #ccc;
}
</style>
