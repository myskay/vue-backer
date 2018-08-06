<template>
<div class='aside'>
   <div class='aside-menu'>
      <ul>
         <li v-for='menu in menuData' @mouseover='showflt' @mouseout='hideflt'>

             <a v-for='(item,index) in menu.menulist'>
                <span v-if='index !== 0'>/</span>
                {{item.name}}
             </a>
         </li>
      </ul>
   </div>
   <transition name='fade'>
       <div class='flt-div' v-show='flag'>
          <ul>
             <li v-for='menu in menuData'>

                <a v-for='(item,index) in menu.menulist'>
                  <span v-if='index !== 0'>/</span>
                  {{item.name}}
                </a>
            </li>
         </ul>
       </div>
   </transition>
</div>
</template>
<script>

export default{
	name:'slideDiv',
  data(){
     return{
        flag:false,
        menuData:[
          {
             menulist:[
                {
                    name:'家用电器'
                }
             ]
          },
          {
             menulist:[
                 {
                     name:'手机'
                 },
                 {
                     name:'运营商'
                 },
                 {
                     name:'数码'
                 }
             ]
          },
          {
              menulist:[
                  {
                     name:'电脑'
                  },
                  {
                     name:'办公'
                  }
              ]
          },
          {
            menulist:[
                {
                   name:'家居'
                },
                {
                   name:'家具'
                },
                {
                   name:'家装'
                },
                {
                   name:'厨具'
                }
            ]
          },
          {
             menulist:[
                 {
                    name:'男装'
                 },
                 {
                     name:'女装'
                 },
                 {
                     name:'童装'
                 },
                 {
                    name:'内衣'
                 }
             ]
          },
          {
              menulist:[
                 {
                     name:'美妆个护'
                 },
                 {
                     name:'宠物'
                 }
              ]
          },
          {
              menulist:[
                 {
                    name:'女鞋'
                 },
                 {
                     name:'箱包'
                 },
                 {
                     name:'钟表'
                 },
                 {
                     name:'手表'
                 }
              ]
          },
          {
             menulist:[
                 {
                     name:'手机'
                 },
                 {
                     name:'运营商'
                 },
                 {
                     name:'数码'
                 }
             ]
          },
          {
              menulist:[
                  {
                     name:'电脑'
                  },
                  {
                     name:'办公'
                  }
              ]
          },
          {
            menulist:[
                {
                   name:'家居'
                },
                {
                   name:'家具'
                },
                {
                   name:'家装'
                },
                {
                   name:'厨具'
                }
            ]
          },
          {
             menulist:[
                 {
                    name:'男装'
                 },
                 {
                     name:'女装'
                 },
                 {
                     name:'童装'
                 },
                 {
                    name:'内衣'
                 }
             ]
          },
          {
              menulist:[
                 {
                     name:'美妆个护'
                 },
                 {
                     name:'宠物'
                 }
              ]
          },
          {
              menulist:[
                 {
                    name:'女鞋'
                 },
                 {
                     name:'箱包'
                 },
                 {
                     name:'钟表'
                 },
                 {
                     name:'手表'
                 }
              ]
          }
        ]
     }
  },
  methods:{
     showflt(){
        this.flag = true;
     },
     hideflt(){
        this.flag = false;
     }
  }
}

</script>
<style scoped>
.aside{
  width:190x;
  position:relative;
}
.aside-menu{
  width:190px;
  box-shadow:2px 2px 10px 1px;
  margin-left:100px;
}
.aside-menu li:hover{
  background-color:#ccc;
}
.aside-menu a{
  cursor:pointer;
}
.aside-menu a:hover{
  color:#c30d23;
}
.aside-menu a:hover span{
  color:#333;
}
.flt-div{
  position:absolute;
  left:291px;
  top:0;
  border:1px solid #ccc;
}
.fade-enter,.fade-leave-to{
  opacity:0;
}
.fade-enter-active,.fade-leave-active{
  transition:opacity 0.3s;
}
.fade-enter-to,.fade-leave{
  opacity:1;
}
</style>