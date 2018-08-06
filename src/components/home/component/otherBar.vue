<template>
  <div style='height:300px' id='othBar'></div>
</template>
<script>

import echarts from 'echarts'
export default{
	name:'otherBar',
	mounted(){
	  var othBar = echarts.init(document.getElementById('othBar'));
	   othBar.setOption({
	      color:['#c30d23'],
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