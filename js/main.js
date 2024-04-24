'use strict';

// メインビジュアルスライド
// $(function() {
// 	if(window.matchMedia('(min-width:1025px)').matches){
// 		$('.main_image img:nth-child(n+2)').hide();
// 	  setInterval(function() {
// 		$(".main_image img:first-child").fadeOut(2000);
// 		$(".main_image img:nth-child(2)").fadeIn(2000);
// 		$(".main_image img:first-child").appendTo(".main_image");
// 	},3000);
// 	}
// });

$(function() {
		$('.main_image img:nth-child(n+2)').hide();
	  setInterval(function() {
		$(".main_image img:first-child").fadeOut(2000);
		$(".main_image img:nth-child(2)").fadeIn(2000);
		$(".main_image img:first-child").appendTo(".main_image");
	},3000);
});

// ページトップへスクロール
$('#page_top_link').click(function(){
  $('body,html').animate({
    scrollTop:0
  },700);
  return false;
});

// モーダルウインド
$(function(){
	let open = $('.modal-open'),
		  close = $('.modal-close'),
		  container = $('.modal-container');

	open.on('click',function(){
		container.addClass('active');
		return false;
	});

	close.on('click',function(){
		container.removeClass('active');
	});
});

// ハンバーガーメニュー
$('.openbtn').click(function () {
	$(this).toggleClass('active');
	$('.header__nav__sp').toggleClass('is-active');
	$("body").toggleClass('noscroll');
});
