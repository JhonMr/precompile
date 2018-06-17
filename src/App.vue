<template>
  <div id="app">
  	<!--<router-view />-->
  	<h1>测试预编译</h1>
  	<div class="swiper-container">
  		<div class="swiper-wrapper">
  			<div class="swiper-slide">Slide 1</div>
  			<div class="swiper-slide">Slide 2</div>
  			<div class="swiper-slide">Slide 3</div>
  		</div>
  		<!-- 如果需要分页器 -->
  		<div class="swiper-pagination"></div>
  	</div>
  	<a id="btn1">上一页</a>
  	<a id="btn2">下一页</a>
  </div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'precompile',
	data(){
		return {
			mySwiper
		}
	},
	mounted() {
		let that = this;
		that.$nextTick(() => {
			that.mySwiper = new Swiper('.swiper-container', {
				loop: true,
				//autoplay: true,
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},
				// 如果需要滚动条
				scrollbar: {
					el: '.swiper-scrollbar',
				},
			});
			
			
			$('#btn1').click(function(){
		    that.mySwiper.slidePrev();
		  })
			$('#btn2').click(function(){
		    that.mySwiper.slideNext();
		  })
		})
		
	}
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .swiper-container {
    width: 600px;
    height: 300px;
	}  
  .swiper-slide{ 
  	line-height: 100%;
  }
</style>
