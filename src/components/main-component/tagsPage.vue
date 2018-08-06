<template>   
  <div class='tags-outer-scroll-con'>
       <div class='close-tags-con'>
          <Dropdown >
              <Button size='small' type='primary'>
                     标签选项
                    <Icon type="arrow-down-b"></Icon>
              </Button>
              <DropdownMenu slot='list' style='z-index:1'>
                  <DropdownItem name='closeAll'>关闭所有</DropdownItem>
                  <DropdownItem name='closeOther'>关闭其他</DropdownItem>
              </DropdownMenu>
          </Dropdown>
       </div>
       <div class='tags-inner-body'>
           <Tag type="dot" closable color="blue">首页</Tag>
       </div>
  </div>
</template>
<script>

export default{
	name:'tagsPage',
	data(){
	   return{

	   }
	}
}

</script>
<style scoped>
.tags-outer-scroll-con{
	position:relative;
	width:100%;
	height:100%;
	
}
.close-tags-con{
	position:absolute;
	top:0;
	right:0;
	padding-top: 8px;
    width: 110px;
    text-align: center;
    background-color: #fff;
    height:100%;
    z-index:1;
}
.tags-inner-body{
	position: absolute;
    left: 0;
    padding-left: 8px;
    padding-top: 2px;
}
</style>