<template>
  <div class='main'>
      <div class='sidebar-menu-con'  :style="{width:flag?'200px':'60px',overflow:flag?'auto':'visible'}">
           <div class='logo-con' >
              <img src='../assets/logo.png'/>
          </div>
          <sideMenu   v-if='flag'/>
          <sideDropMenu v-else/>
      </div>
      <div class='main-header-con'  :style="{paddingLeft:flag?'200px':'60px'}">
          <div class='main-header'>
              <div class='navicon-con'>
                  <Button type='text' @click='toggleClick' :style="{transform:'rotateZ('+(this.flag?'0':'-90')+'deg)'}">
                     <Icon type='navicon' size='32'></Icon>
                  </Button>
              </div>
              <div class='header-middle-con'>
                  <div class='main-breadcrumd' style='padding:8px 15px 0'>
                       <breadcrumbNav></breadcrumbNav>
                  </div>
              </div>
              <div class='header-avator-con'>
                  <Row type='flex' justify='end' align='middle' class='user-dropdown' style='height:100%'>
                     <Dropdown transfer trigger='click'>
                         <a>
                            <span>admin</span>
                            <Icon type='arrow-down-b'></Icon>
                         </a>
                        <DropdownMenu slot="list">
                                    <DropdownItem name="ownSpace">个人中心</DropdownItem>
                                    <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                                </DropdownMenu>
                     </Dropdown>
                      <Avatar icon='person' style="background: #619fe7;margin-left: 10px;"></Avatar>
                  </Row>
                  
              </div>
          </div>
          <div class='tag-con'>
             <tagsPage></tagsPage>
          </div>
      </div>
      <div class='single-page-con'  :style="{left:flag?'200px':'60px'}">
          <div class='single-page'>
             <router-view></router-view>
          </div>
      </div>
  </div>
</template>
<script>
import sideMenu from './main-component/sideMenu'
import breadcrumbNav from './main-component/breadcrumbNav'
import tagsPage from './main-component/tagsPage'
import sideDropMenu from './main-component/sideDropMenu'
  export default{
     name:'Main',
     components:{
       sideMenu,
       breadcrumbNav,
       tagsPage,
       sideDropMenu
     },
     data(){
       return {
          flag:true
       }
     },
     methods:{
         toggleClick(){
            this.flag = !this.flag;
         }
     }
  }

</script>
<style scoped>
.main{
	width:100%;
	height:100%;
	position:absolute;
}
.sidebar-menu-con{
	height:100%;
	position:fixed;
	top:0;
	left:0;
	transition:all .3s;
	background-color:rgb(73,80,96);
	overflow:auto;
}
.logo-con{
	padding:8px;
}
.logo-con img{
	display:inline-block;
	width:calc(100% - 16px);
	height:60px;
}
.main-header{
	height:60px;
	position:relative;
	box-shadow:0 2px 2px rgba(0,0,0,0.3);
	z-index:2;
}
.main-header-con{
	transition:all .3s;
  
}
.navicon-con{
	display:inline-block;
}
.main-header-con Button{
	border:none;
	outline:none;
	background-color:transparent;
	padding:6px 15px;
	margin:6px;
}
.header-middle-con{
	position:absolute;
	top:0;
	left:60px;
	bottom:0;
	padding:10px;
}
.main-breadcrumb{
	padding:8px 15px 0;
}
.header-avator-con{
	position:absolute;
	top:0;
	right:0;
	height:100%;
}
user-dropdown{
	height:100%;
}
.tag-con{
	height:40px;
	background-color:#f0f0f0;
	z-index:0;
  box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
}
.single-page-con{
	position:absolute;
	top:100px;
	height:auto;
	right:0;
	transition:all 0.3s;
  background-color:#f0f0f0;
  border-top:2px solid rgba(0,0,0,0.1);
}
.single-page{
  margin:10px;
}
</style>