$(".swiper-container").swiper();

//var industry = $(".industry");




Vue.component('industry', {
	props:['todo'],
	template: '<div class="weui-flex__item item-padding"><a href="#"><div v-bind:style="{background:todo.icon}" class="flex-img img1" ></div>{{todo.name}}</a></div>',
});
// 创建根实例
new Vue({
  el: '#app',
  data:{
	data_list:""
  },
  created:function(){
  	var _this = this;
		axios.get('./data/industry.json')
		.then(function(rep){
			_this.data_list = rep.data;
		})
		.catch(function(){
			
		});
  }
})


//$.ajax({
//	url:"data/industry.json",
//	type:"get",
//	dataType:"json",
//	async:true,
//	success:function(data){
//		var weuiFlex1 = $("<div class='weui-flex flex-height'></div>");
//		var weuiFlex2 = $("<div class='weui-flex flex-height'></div>");
//		$.each(data,function(index,list){
//			var flexItem = $("<div class='weui-flex__item item-padding'><a href='#'><div class='flex-img img1' style='background:"+list.icon+"'></div>"+list.name+"</a></div>");
//			if (index<5){
//				weuiFlex1.append(flexItem);
//			}
//			else if (index<10){
//				weuiFlex2.append(flexItem);
//			}
//		});
////		debugger;
//		industry.append(weuiFlex1);
//		industry.append(weuiFlex2);
//	},
//	error:function(data){
//		alert("请求行业列表失败！");
//	}
//});

var advertisement = $(".advertisement");

$.ajax({
	url:"data/advertisement.json",
	type:"get",
	dataType:"json",
	async:false,
	success:function(data){
		var weuiFlex = $("<div class='weui-flex flex-height2'></div>");
		$.each(data,function(index,list){
			var flexItem = $("<div class='weui-flex__item item-padding2' style='background:"+list.icon+"'></div>");
			weuiFlex.append(flexItem);
		});
//		debugger;
		advertisement.append(weuiFlex);
	},
	error:function(data){
		alert("请求广告列表失败！");
	}
});
