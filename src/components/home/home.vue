<template>
   <div class='home-main'>
       <Row :gutter='10'>
           <Col :md='24' :lg='8'>
              <Row :gutter='10'>
                 <Col :md='12' :lg='24'>
                    <Card style='margin-bottom:10px;'>
                       <Row type='flex' align='middle'>
                           <Col span='8'>
                              <Row type='flex' align='middle'>
                                 <img src='../../assets/logo.png' class='img'/>
                              </Row>
                           </Col>
                           <Col span='16'>
                              <Row type='flex' align='middle' style='height:100%'>
                                 <div>
                                     <b class='card-user-name'>admin</b>
                                     <p>管理员</p>
                                 </div>
                              </Row>
                           </Col>
                       </Row>
                       <div class='line-gray'></div>
                       <Row style='margin-top:8px;'>
                          <Col span='8'>上次登录时间:</Col>
                          <Col hspan='16'>2017.09.12-13:32:20</Col>
                       </Row>
                       <Row style='margin-top:8px;'>
                          <Col span='8'>上次登陆地点:</Col>
                          <Col hspan='16'>北京</Col>
                       </Row>
                    </Card>
                 </Col>
                 <Col :md='12' :lg='24'>
                     <Card>
                         <p slot='title'>
                            <Icon type='android-ceckbox-outline'></Icon>
                             待办事项
                         </p>
                         <a href='#' slot='extra' @click.prevent='addNewToDoItem'>
                            <Icon type='plus-round'></Icon>
                         </a>
                         <Modal 
                            v-model='sowAddNewTodo'
                            title='添加新的待办事项'
                            @on-ok='addNew'
                            @on-cancel='cancelAdd'>
                                <Row type='flex' justify='center'>
                                     <Input v-model='newToDoItemValue'
                                     icon='compose'
                                     placeholder='请输入...'   

                                     />
                                </Row>
                                <Row slot='footer'>
                                     <Button type='text' @click='cancelAdd'>取消</Button>
                                     <Button type='primary' 
                                        @click='addNew'
                                     >确定</Button>
                                </Row>
                            </Modal>
                         <div class='to-do-list-con'>
                            <div v-for="(item,index) in todoList">
                                <todolistItem :text='item.title' style='height:36px;'></todolistItem>
                            </div>
                         </div>
                     </Card>
                 </Col>
              </Row>
           </Col>
           <Col :md='24' :lg='16'>
              <Row :gutter='5' style='margin-bottom:10px;'>
                 <Col :xs='24' :sm='12' :md='6'>
                     <infoCard 
                       iconType="ios-eye"
                       color="#64d572"
                       :iconSize="50"
                       introText="今日浏览量"
                     ></infoCard>
                 </Col>
                 <Col :xs='24' :sm='12' :md='6'>
                     <infoCard
                       iconType="android-person-add"
                       color="#2d8cf0"
                       :iconSize="50"
                       introText='今日新增用户'
                     ></infoCard>
                 </Col>
                 <Col :xs='24' :sm='12' :md='6'>
                     <infoCard
                     iconType="ios-eye"
                      color="#ffd572"
                      :iconSize="50"
                      introText=' 今日数据采集量'
                     ></infoCard>
                 </Col>
                 <Col :xs='24' :sm='12' :md='6'>
                     <infoCard
                     iconType="ios-eye"
                       color="#f25e43"
                       :iconSize="50"
                       introText='今日服务调用量'
                     ></infoCard>
                 </Col>
              </Row>
              <Row>
                 <Card :padding='0'>
                    <p slot='title'>
                        <Icon type='map'></Icon>
                        今日服务调用地理分布
                    </p>
                    <div class='map-con'>
                       <Col span="8">
                          <mapTable :columns1='columns1' :data1='data1'></mapTable>
                       </Col>
                       <Col span='16'>
                           <Row type='flex' justify='center' align='middle'>
                               <homeMap ></homeMap>
                           </Row>
                       </Col>
                    </div>
                 </Card>
              </Row>
           </Col>
       </Row>

       <Row :gutter='10' style='marginTop:10px'>
          <Col :md='24' :lg='8'>
             <Card>
               <p slot='title'>
                  <Icon type='android-map'></Icon>
                  上周每日来访量统计
               </p>
               <div>
                  <countBar></countBar>
               </div>
             </Card>
          </Col>
          <Col :md='24' :lg='8'>
             <Card>
               <p slot='title'>
                  <Icon type='ios-pulse-strong'></Icon>
                  数据来源统计
               </p>
               <div>
                  <originPie></originPie>
               </div>
             </Card>
          </Col>
          <Col :md='24' :lg='8'>
             <Card>
               <p slot='title'>
                  <Icon type='android-wifi'></Icon>
                  各类用户服务调用变化统计
               </p>
               <div>
                  <dataGauge></dataGauge>
               </div>
             </Card>
          </Col>
       </Row>
       <Row style='marginTop:10px'>
          <Col :md='24' :lg='24'>
             <Card>
                <p slot='title'>
                   <Icon type='android-map'></Icon>
                   上周每日服务量
                </p>
                <div>
                   <otherBar></otherBar>
                </div>
             </Card>
          </Col>
       </Row>
   </div>
</template>
<script>
import infoCard from './component/infoCard'
import todolistItem from './component/todolistItem'
import mapTable from './component/mapTable'
import homeMap from './component/homeMap'
import countBar from './component/countBar'
import originPie from './component/originPie'
import dataGauge from './component/dataGauge'
import otherBar from './component/otherBar'
export default{
	name:'home',
  components:{
     infoCard,
     todolistItem,
     mapTable,
     homeMap,
     countBar,
     originPie,
     dataGauge,
     otherBar
  },
	data(){
	   return {
	      todoList:[
	         {
	            title:'学习新的iview组件'
	         },
	         {
	            title:'学习新的iview组件'
	         },
	         {
	            title:'学习新的iview组件'
	         },
	         {
	            title:'学习新的iview组件'
	         },
	         {
	            title:'学习新的iview组件'
	         }
	      ],
          sowAddNewTodo:false,
          newToDoItemValue:'',
           columns1:[
           {
              title:'城市',
              key:'city'
           },
           {
              title:'流量',
              key:'k'
           }
         ],
         data1:[
            {
               city:'北京',
               k:'123'
            },
            {
               city:'北京',
               k:'123'
            },
            {
               city:'北京',
               k:'123'
            },
            {
               city:'北京',
               k:'123'
            },
            {
               city:'北京',
               k:'123'
            },
            {
               city:'北京',
               k:'123'
            },
            {
               city:'北京',
               k:'123'
            },
         ],
         
	   }
	},
	methods:{
	  addNewToDoItem(){
	    this.sowAddNewTodo = true;
	  },
    addNew(){
       if(this.newToDoItemValue.length !== 0){
            this.todoList.unshift({
               title:this.newToDoItemValue
            });
            setTimeout(() => {
               this.newToDoItemValue = '';
            },200);
            this.sowAddNewTodo = false;
       }else{
          this.$Message.error('请输入待办事项内容');
       }
    },
	  cancelAdd(){
	    this.sowAddNewTodo = false;
	    this.newToDoItemValue = '';
	  }
	}
}

</script>
<style scoped>
.img{
  width:80%;
  max-width:100px;
  display:block;
}
.line-gray{
  height:0;
  border-bottom:2px solid #dcdcdc;
}
.to-do-list-con{
  height:100px;
  overflow:auto;
}
.card-user-name{
  font-size:2em;
  color:#2d8cf0;
}
</style>