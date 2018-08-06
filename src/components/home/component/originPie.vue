<template>
  <div style='height:200px;' id='originPie'></div>
</template>
<script>
import echarts from 'echarts'
export default{
	name:'originPie',
	mounted(){
      var mypie = echarts.init(document.getElementById('originPie'));
      mypie.setOption({
         tooltip:{
           trigger:'item',
           formatter:'{a}<br/>{b}:{c} ({d}%)'
         },
         legend:{
           type:'scroll',
           orient:'vertical',
           left:'left',
           data:['ios','android','web','other']
         },
         series:[{
           type:'pie',
           radius:'55%',
           left:'55%',
           data:[
              {name:'ios',value:110},
              {name:'android',value:56},
              {name:'web',value:78},
              {name:'other',value:120}
           ],
           itemStyle:{
             emphasis:{
               shadowBlur:10,
               shadowOffsetX:0,
               shadowColor:'rgba(0,0,0,0.5)'
             }
           }
         }]
      })
	}
}

</script>
<style scoped></style>