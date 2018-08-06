<template>
       <Card :padding='0'>
           <div class='infoCard-con' style='height:100px;'>
             <Row style='height:100%'>
                 <Col span='8'  :style="{backgroundColor:color,color:'#fff',height:'100%'}">
                   <Row type='flex' justify='center' align='middle' style='height:100%'>
                     <Icon :type='iconType' :size='iconSize'></Icon>
                   </Row>
                </Col>
                <Col span='16' style='height:100%'>
                   <Row type='flex' justify='center' align='middle' style='height:100%'>
                     <countUp :color='color'>
                        <p slot='intro'>{{introText}}</p>
                     </countUp>
                   </Row>
                </Col>
             </Row>
           </div>
       </Card> 
</template>
<script>
import countUp from './countUp'
export default{
	name:'infoCard',
	components:{
	  countUp
	},
	props:{
       color:String,
       iconType:String,
       iconSize:Number,
       introText:String
	},
	data(){
	  return{

	  }
	}
}
</script>
<style scoped></style>