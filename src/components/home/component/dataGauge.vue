<template>
  <div style='height:200px' id='dataGauge'></div>
</template>
<script>
import echarts from 'echarts'
export default{
	name:'dataGauge',
	mounted(){
      var mygauge = echarts.init(document.getElementById('dataGauge'));
      mygauge.setOption({
        tooltip:{
          formatter:"{a}<br/>{b}:{c}%"
        },
        series:[{
           type:'gauge',
           data:[
              {value:50,name:'浏览量'}
           ]
        }]
      })
	}
}

</script>
