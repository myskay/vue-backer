<template>
  <div style='height:216px;width:100%;backgroundColor:#fff' id='home_page_map'></div>
</template>
<script>
import echarts from 'echarts'
export default{
	name:'homeMap',
	mounted(){
	   var myechart = echarts.init(document.getElementById('home_page_map'));
	   myechart.setOption({
	     xAxis:{
	       type:'category',
	       data:['北京','上海','厦门','内蒙','福建','山西','东北']
	     },
	     yAxis:{
	       type:'value'
	     },
	     series:[{
	       data:[820,100,230,89,156,0,1320],
	       type:'line'
	     }]
	   })
	}
	
}

</script>
<style scoped></style>