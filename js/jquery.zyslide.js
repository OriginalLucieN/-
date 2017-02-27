


//自运行的匿名函数
/*
(function(){
	alert('自运行的匿名函数');
})()
*/

/*
$(function(){
	alert('自运行的匿名函数');
})
*/

//面向对象的轮播图插件的写法:
(function($) {
	//构造函数
	
	function Slide(ele,options){
		//转化为jquery对象
		this.$ele = $(ele);
		//默认设置选项
		this.setting = {
			//控制刚开始炸开的事件
			delay:1000,
			//控制 interval 的时间（轮播速度）
			speed:2000
		};
		$.extend(true, this.setting, options);
		//规定好每张图片处于的位置和状态
		this.states = [{
			ZIndex: 1,
			width: 120,
			height: 150,
			top: 69,
			left: 134,
			ZOpacity: 0.2
		}, {
			ZIndex: 2,
			width: 130,
			height: 170,
			top: 59,
			left: 0,
			ZOpacity: 0.5
		}, {
			ZIndex: 3,
			width: 170,
			height: 218,
			top: 35,
			left: 110,
			ZOpacity: 0.7
		}, {
			ZIndex: 4,
			width: 224,
			height: 288,
			top: 0,
			left: 263,
			ZOpacity: 1
		}, {
			ZIndex: 3,
			width: 170,
			height: 218,
			top: 35,
			left: 470,
			ZOpacity: 0.7
		}, {
			ZIndex: 2,
			width: 130,
			height: 170,
			top: 59,
			left: 620,
			ZOpacity: 0.5
		}, {
			ZIndex: 1,
			width: 120,
			height: 150,
			top: 69,
			left: 500,
			ZOpacity: 0.2
		}, ];

		this.lis = this.$ele.find('li');
		this.interval = null;
		//让 li 从正中间展开
		this.move();
		
		//点击下一张
		this.$ele.find('.zy-next').click(function() {
			this.next();
		}.bind(this));
		//点击上一张
		this.$ele.find('.zy-prev').click(function() {
			this.prev();
		}.bind(this));

		//开启自动轮播
		this.autoPlay();
		
		this.$ele.find('section').add(this.lis).hover(function() {
			clearInterval(this.interval);
		}.bind(this), function() {
			this.autoPlay();
		}.bind(this));
	}
	//原型中的方法
	//让每个 li 对应上面 states 的每个状态
	Slide.prototype.move = function() {
			this.lis.each(function(index,value) {
				//注意这里的 this 指向问题，这里的 this 指向 某个 li
				//两节解决办法：1.定义变量传进去   2.用bind()方法
				var state = this.states[index];
				$(value).css('z-index', state.ZIndex).finish().animate(state,this.setting.delay).find('img').css('opacity', state.ZOpacity);
			}.bind(this));
		}
	
	//点击下一张,让轮播图发生偏移
	Slide.prototype.next = function() {
			//原理：把数组最后一个元素移到数组的第一位
			//var obj = states.pop();
			//states.unshift(obj);
			this.states.unshift(this.states.pop());
			this.move();
	}
		
	//点击上一张,让轮播图发生偏移
	Slide.prototype.prev = function() {
			//原理：把数组第一个元素移到数组的最后一位
			this.states.push(this.states.shift());
			this.move();
	}
	
	//自动轮播
	Slide.prototype.autoPlay = function(){
		var _this = this;
			this.interval = setInterval(function() {	
				//注意这里的 this 指向问题，这里的 this 指向window
				_this.next();
			},this.setting.speed);
	}
	
	//找到要轮播的轮播图根标签，调用 slide 方法
	$.fn.zySlide = function(options){
		$(this).each(function(i,ele){
			new Slide(ele,options);
		})
		//支持链式调用
		return this;
		
	}
	
})(jQuery)


/*
 * 插件类写法：
 * $.fn.customFun = function(){
 * 		//自定义插件的代码
 * }
 * 用法：
 * $('selector').custonFun();
 * 
 * 
 * 工具类写法：
 * $.custonFun = function(){
 *		//自定义工具类代码
 * }
 * 用法：
 * $.custonFun();*/
 