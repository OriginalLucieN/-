/*
//首页我们准备把代码这样子改：
function slide(){
	//把下面的所有代码全部粘贴过来
}
slide();
*/
/*
function slide() {
	//规定好每张图片处于的位置和状态
	var states = [{
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

	var lis = $('#box li');
	//让每个 li 对应上面 states 的每个状态
	function move() {
		lis.each(function(index, ele) {
			var state = states[index];
			$(ele).css('z-index', state.ZIndex).finish().animate(state, 1000).find('img').css('opacity', state.ZOpacity);
		})
	}
	//让 li 从正中间展开
	move();

	//点击下一张,让轮播图发生偏移
	function next() {
		//原理：把数组最后一个元素移到数组的第一位
		//var obj = states.pop();
		//states.unshift(obj);
		states.unshift(states.pop());
		move();
	}

	//点击上一张,让轮播图发生偏移
	function prev() {
		//原理：把数组第一个元素移到数组的最后一位
		states.push(states.shift());
		move();
	}
	//点击下一张
	$('#box .next').click(function() {
		next();
	});
	//点击上一张
	$('#box .prev').click(function() {
		prev();
	});

	//自动轮播
	var interval = null;

	function autoPlay() {
		interval = setInterval(function() {
			next();
		}, 1000);
	}
	autoPlay();
	$('#box li').add('#box section').hover(function() {
		clearInterval(interval);
	}, function() {
		autoPlay();
	})
}
//调用全局变量 slide
slide();
*/

/*
 * 变量的作用域问题：
 * 1.全局域		2.函数域名（function 域）    3.（Block  域）
 * 全局域：从页面被打开之后到页面被关闭之前始终存在的。
 * 函数域：存在于函数调用的一瞬间（也不一定，考虑闭包的存在）
 * 
 * 
 * 闭包的理解：
 * 闭包的作用：可以保留函数的作用域（要不然闭包里面的函数比如说 move 就不能使用 slide 函数域里面
 * 的变量 state 、lis 等）
 * 闭包产生的必要条件：函数里面套函数（内层函数要使用外层函数作用域里面的变量）
 * 
 * 全局变量会产生闭包吗？			
 * 不会的，因为全局变量存在于全局域
 */


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
(function(){
	//规定好每张图片处于的位置和状态
	var states = [{
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

	var lis = $('#box li');
	//让每个 li 对应上面 states 的每个状态
	function move() {
		lis.each(function(index, ele) {
			var state = states[index];
			$(ele).css('z-index', state.ZIndex).finish().animate(state, 1000).find('img').css('opacity', state.ZOpacity);
		})
	}
	//让 li 从正中间展开
	move();

	//点击下一张,让轮播图发生偏移
	function next() {
		//原理：把数组最后一个元素移到数组的第一位
		//var obj = states.pop();
		//states.unshift(obj);
		states.unshift(states.pop());
		move();
	}

	//点击上一张,让轮播图发生偏移
	function prev() {
		//原理：把数组第一个元素移到数组的最后一位
		states.push(states.shift());
		move();
	}
	//点击下一张
	$('#box .next').click(function() {
		next();
	});
	//点击上一张
	$('#box .prev').click(function() {
		prev();
	});

	//自动轮播
	var interval = null;

	function autoPlay() {
		interval = setInterval(function() {
			next();
		}, 1000);
	}
	autoPlay();
	$('#box li').add('#box section').hover(function() {
		clearInterval(interval);
	}, function() {
		autoPlay();
	})
})()












/*
 *1、插件中最好不要使用id，原因：插件是能够被重复使用的，也就是说在同一页面中可能多次使用，造成冲突 
 *2、变量的命名和方法的命名：states、interval、move（）、next（）。用户在使用这个插件的时候，可能还会引入
 * 自己创建的js文件，也有这样的命名，那么就产生冲突了。
 *3、标签 class 的值问题：prev、next 。这些标签太大众化了，谁写标签都会想命名为 prev或next，势必会冲突
 *4、插件文件名命名问题：index.js,index.css，命名大众化。可以这样子修改：jQuery.ZYSlide.js
 *
 */