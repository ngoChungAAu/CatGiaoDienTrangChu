$(document).ready(function(){
	//show1
	var slide1 = new Array();
	slide1[0] = "images/1.jpg";
	slide1[1] = "images/9.jpg";
	slide1[2] = "images/17.jpg";
	//show2
	var slide2 = new Array();
	slide2[0] = "images/2.jpg";
	slide2[1] = "images/10.jpg";
	slide2[2] = "images/18.jpg";
	//show3
	var slide3 = new Array();
	slide3[0] = "images/3.jpg";
	slide3[1] = "images/11.jpg";
	slide3[2] = "images/19.jpg";
	//show4
	var slide4 = new Array();
	slide4[0] = "images/4.jpg";
	slide4[1] = "images/12.jpg";
	slide4[2] = "images/20.jpg";
	//show5
	var slide5 = new Array();
	slide5[0] = "images/5.jpg";
	slide5[1] = "images/13.jpg";
	slide5[2] = "images/21.jpg";
	//show6
	var slide6 = new Array();
	slide6[0] = "images/6.jpg";
	slide6[1] = "images/14.jpg";
	slide6[2] = "images/22.jpg";
	//show7
	var slide7 = new Array();
	slide7[0] = "images/7.jpg";
	slide7[1] = "images/15.jpg";
	slide7[2] = "images/23.jpg";
	//show8
	var slide8 = new Array();
	slide8[0] = "images/8.jpg";
	slide8[1] = "images/16.jpg";
	slide8[2] = "images/24.jpg";

	var key = 0;
	// kich chuot phai
	$(".arrow-right").click(function(){
		// show1
		$(".show1").fadeOut(function(){
			$(".show1").attr("src", slide1[key]);
			$(".show1").fadeIn();
			key++;
			if(key == slide1.length) key = 0;
		});
		//show2
		$(".show2").fadeOut(function(){
			$(".show2").attr("src", slide2[key]);
			$(".show2").fadeIn();
			key++;
			if(key == slide2.length) key = 0;
		});
		//show3
		$(".show3").fadeOut(function(){
			$(".show3").attr("src", slide3[key]);
			$(".show3").fadeIn();
			key++;
			if(key == slide3.length) key = 0;
		});
		//show4
		$(".show4").fadeOut(function(){
			$(".show4").attr("src", slide4[key]);
			$(".show4").fadeIn();
			key++;
			if(key == slide4.length) key = 0;
		});
		//show5
		$(".show5").fadeOut(function(){
			$(".show5").attr("src", slide5[key]);
			$(".show5").fadeIn();
			key++;
			if(key == slide5.length) key = 0;
		});
		//show6
		$(".show6").fadeOut(function(){
			$(".show6").attr("src", slide6[key]);
			$(".show6").fadeIn();
			key++;
			if(key == slide6.length) key = 0;
		});
		//show7
		$(".show7").fadeOut(function(){
			$(".show7").attr("src", slide7[key]);
			$(".show7").fadeIn();
			key++;
			if(key == slide7.length) key = 0;
		});
		//show8
		$(".show8").fadeOut(function(){
			$(".show8").attr("src", slide8[key]);
			$(".show8").fadeIn();
			key++;
			if(key == slide8.length) key = 0;
		});
	});

	//kich chuot trai
	$(".arrow-left").click(function(){
		//show1
		$(".show1").fadeOut(function(){
			if(key == 0) key = slide1.length-1;
			$(".show1").attr("src", slide1[key]);
			$(".show1").fadeIn();
			key--;	
		});
		//show2
		$(".show2").fadeOut(function(){
			if(key == 0) key = slide2.length-1;
			$(".show2").attr("src", slide2[key]);
			$(".show2").fadeIn();
			key--;	
		});
		//show3
		$(".show3").fadeOut(function(){
			if(key == 0) key = slide3.length-1;
			$(".show3").attr("src", slide3[key]);
			$(".show3").fadeIn();
			key--;	
		});
		//show4
		$(".show4").fadeOut(function(){
			if(key == 0) key = slide4.length-1;
			$(".show4").attr("src", slide4[key]);
			$(".show4").fadeIn();
			key--;	
		});
		//show5
		$(".show").fadeOut(function(){
			if(key == 0) key = slide5.length-1;
			$(".show5").attr("src", slide5[key]);
			$(".show5").fadeIn();
			key--;	
		});
		//show6
		$(".show6").fadeOut(function(){
			if(key == 0) key = slide6.length-1;
			$(".show6").attr("src", slide6[key]);
			$(".show6").fadeIn();
			key--;	
		});
		//show7
		$(".show7").fadeOut(function(){
			if(key == 0) key = slide7.length-1;
			$(".show7").attr("src", slide7[key]);
			$(".show7").fadeIn();
			key--;	
		});
		//show8
		$(".show8").fadeOut(function(){
			if(key == 0) key = slide8.length-1;
			$(".show8").attr("src", slide8[key]);
			$(".show8").fadeIn();
			key--;	
		});
	});
});