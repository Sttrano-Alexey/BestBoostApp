var w = window.screen.availWidth;
if(w > 1000){
	let head__decor_a = document.querySelector('.item_1');
	let head__decor_b = document.querySelector('.item_2'); 
	window.addEventListener('mousemove', function(e) {
	    let x = e.clientX / window.innerWidth;
	    let y = e.clientY / window.innerHeight;  
	    head__decor_a.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
	    head__decor_b.style.transform = 'translate(+' + x * 40 + 'px, +' + y * 40 + 'px)';
	});
};
window.onscroll = function scroll(e) {
	let scroll = window.pageYOffset;
	scroll = Math.round(scroll);
	if(scroll > 150){
		document.querySelector(".item_1").classList.add("scroll");
		document.querySelector(".item_2").classList.add("scroll");
	}else{
		document.querySelector(".item_1").classList.remove("scroll");
		document.querySelector(".item_2").classList.remove("scroll");
	};
	if(scroll > 500){
		document.querySelector(".header__container").classList.add("scroll");
	}else{
		document.querySelector(".header__container").classList.remove("scroll");
	};
}

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
	spaceBetween: 30,
  });

//  TABS 
const tabsBtn = document.querySelectorAll(".serv__button");

tabsBtn.forEach(function(item){
	item.addEventListener("click", function(){
		let currentBtn = item;
		let tabId  = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);
		currentTab.classList.add("active");
		document.querySelector(".menu").classList.add("active");
		document.querySelector(".body").style.overflow = "hidden";
		document.querySelector(".item_1").classList.add("scroll");
		document.querySelector(".item_2").classList.add("scroll");
	});
});

function close__menu(){
	document.querySelector(".menu").classList.remove("active");
	document.querySelector(".menu__instagram").classList.remove("active");
	document.querySelector(".menu__tiktok").classList.remove("active");
	document.querySelector(".menu__youtube").classList.remove("active");
	document.querySelector(".menu__twitter").classList.remove("active");
	document.querySelector(".body").style.overflow = "auto";
	let scroll = window.pageYOffset;
	scroll = Math.round(scroll);
	if(scroll < 150){
		document.querySelector(".item_1").classList.remove("scroll");
		document.querySelector(".item_2").classList.remove("scroll");	
	}
}