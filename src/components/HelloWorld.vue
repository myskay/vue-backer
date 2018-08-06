<template>
<div class='header-nav'>
  <div class='clearFix top-header'>
   <div class="header-logo">
        <img src="../assets/logo.png"/>
   </div>
   <ul class='header-ul-left clearFix'>
       <li v-for="(item,index) in navList" :key="index"  @mouseover = showinner(index)  @mouseout = hideinner()>
           <a :href='item.ahref'>
               {{item.title}}
               <i :class="index==0?'sanjiao':''" ></i>
           </a>
           <ul class='left-inner' v-show='flag'>
              <li v-for="list in item.itemArray"><a>{{list}}</a></li>
           </ul>
      </li>
    </ul>
    <ul class="header-ul-right clearFix">
        <li><a>登录</a></li>
        <li><a>注册</a></li>
    </ul>
  </div>
</div>
</template>
<script>
   
export default{
  name:'HelloWorld',
  data(){
     return{
        flag:false,
        navList:[
            {
               title:'音频视频',
               ahref:'http://www.baidu.com',
               itemArray:[
                  '考级音频','公开课视频'
               ]
            },
            {
               title:'曲谱教程'
            },
            {
               title:'迷笛CLUB'
            },
            {
               title:'迷笛先生'
            },
            {
               title:'新闻动态'
            },
            {
               title:'关于我们'
            }
        ]
     }
  },
  methods:{
     showinner(index){
       if(index == 0){
         this.flag = true;
       }else{
          this.flag = false;
       }
     },
     hideinner(){
        this.flag = false;
     }
  }
}

</script>
<style scoped>
  .sanjiao{
     width:0; 
    height:0; 
    border-left:5px solid transparent;
    border-right:5px solid transparent;
    border-top:5px solid #ccc;
    display:inline-block;
    vertical-align:middle;
  }
  .header-nav{
     width:100%;
     box-shadow:0 2px 2px rgba(0,0,0,0.3);
  }
  .top-header{
    width:1200px;
    margin:0 auto;
    height:58px;
  }
  .header-logo{
    width:4vw;
    float:left;
    margin-right:2vw;
    height:58px;
  }
  .header-logo img{
     display:block;
     width:100%;
  }
  .header-ul-left{
    float:left;
  }
  .header-ul-left li{
     float:left;
     position:relative;
  } 
  .header-ul-left li a{
    display:inline-block;
    padding:0 16px;
    line-height:58px;
    color:#333;
    cursor:pointer;
  }
  .header-ul-left .left-inner{
     float:inherit;
     position:absolute;
     top:58px;
     background-color:#fff;
     border:1px solid #ccc;
     border-radius:4px;
  }
  .header-ul-left .left-inner li{
     float:inherit;
  }
  .header-ul-left .left-inner li a{
     line-height:inherit;
     padding:5px 14px;
  }
  .header-ul-right{
     float:right;
  }
  .header-ul-right li{
    float:left;
  }
  .header-ul-right li a{
     display:inline-block;
     padding:0 16px;
     line-height:58px;
     color:#333;
  }
</style>