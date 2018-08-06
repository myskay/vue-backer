<template>
   <div style='height:200px;' id='countBar'></div>
</template>
<script>
import echarts from 'echarts'
export default{
	name:'countBar',
	mounted(){
	   var mybar = echarts.init(document.getElementById('countBar'));
	   mybar.setOption({
	      color:['#3398db'],
	      tooltip:{
	        trigger:'axis',
	        axisPointer:{
	           type:'shadow'
	        }
	      },
	      xAxis:[{
	        type:'category',
	        data:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
	        axisTick:{
	          alignWithLabel:true
	        }
	      }],
	      yAxis:[
            {
               type:'value'
            }
	      ],
	      series:[
             {
               type:'bar',
               data:[10,52,200,334,390,330,220]
             }
	      ]
	   })
	}
}

</script>
<style scoped></style>