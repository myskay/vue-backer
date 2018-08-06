<template>
   <Menu ref='sideMenu' :theme='menuTheme' width='auto' :accordion=flag @on-select='changeMenu'>
       <template v-for='item in menuList'>
   
            <MenuItem v-if='item.title.length<1' :name='item.tname' :key='item.tname'>
               <Icon :type="item.iconType"></Icon>
               <span>{{item.subname}}</span>
            </MenuItem>        
            
            <Submenu v-if='item.title.length >=1' :name='item.subName' :key='item.subName' >
               <template slot='title'>
                   <Icon :type='item.iconType'></Icon>
                   <span>{{item.subname}}</span>
               </template>
               <template v-for='item1 in item.title'>
                  <MenuItem  :name='item1.tmenuName' :key='item1.tmenuName'>
                      <Icon type='ios-heart'></Icon>
                      <span>{{item1.tname}}</span>
                   </MenuItem>
               </template>
            </Submenu>

       </template>
   </Menu>
</template>
<script>

export default{
	name:'sidebarMenu',
  props:{
    menuList:Array,
    tmenuName:String
  },
	data(){
	   return{
           menuTheme:'dark',
           flag:true,
           
	   }
	},
  methods:{
    changeMenu(active){
      this.$router.push({path:active});
    }
  }
}

</script>
<style scoped>

</style>