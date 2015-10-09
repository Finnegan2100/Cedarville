
(function () {


	var canvas = document.getElementById("theCanvas"),
		context = canvas.getContext("2d"),

		currentPage = 1,
		pages = [];
		bubbleSequence = 1,

		disableSpace = false,

		choice1 = "",
		choice2 = "",
		choice3 = "",
		choice4 = "",
		choice5 = "",
		choice6 = "",

		randomArray = ["A","B"],

		timerValue = 10,

		counter1 = 10,
		timerPlay1 = true,
		timesUp1 = false,

		counter2 = 10,
		timerPlay2 = true,
		timesUp2 = false,

		counter3 = 10,
		timerPlay3 = true,
		timesUp3 = false,
		
		counter4 = 10,
		timerPlay4 = true,
		timesUp4 = false,

		counter5 = 10,
		timerPlay5 = true,
		timesUp5 = false,

		counter6 = 10,
		timerPlay6 = true,
		timesUp6 = false,

		beat = document.getElementById("theme");


	var cedarville = Object.create(spriteObject);
	cedarville.x = 0;
	cedarville.y = 0;
	cedarville.width = 375;
	cedarville.height = 400;

	var cedarvilleImage = new Image();
	cedarvilleImage.src = "images/cedarville.png";

	var instructions1 = Object.create(spriteObject);
	instructions1.x = 30;
	instructions1.y = 30;
	instructions1.width = 450;
	instructions1.height = 400;

	var instructions1Image = new Image();
	instructions1Image.src = "images/instructions1.png";

	var instructions2 = Object.create(spriteObject);
	instructions2.x = 30;
	instructions2.y = 50;
	instructions2.width = 450;
	instructions2.height = 360;

	var instructions2Image = new Image();
	instructions2Image.src = "images/instructions2.png";

	var carol = Object.create(spriteObject);
	carol.x = 30;
	carol.y = 250;
	carol.width = 50;
	carol.height = 175;

	var carolImage = new Image();
	carolImage.src = "images/carol.png";

	var roy = Object.create(spriteObject);
	roy.x = 200;
	roy.y = 270;
	roy.width = 110;
	roy.height = 174;
	var royMove = false;

	var royImage = new Image();
	royImage.src = "images/roy.png";

	var dog = Object.create(spriteObject);
	dog.x = 400;
	dog.y = 300;
	dog.width = 150;
	dog.height = 130;

	var dogImage = new Image();
	dogImage.src = "images/dog.png";

	var street = Object.create(spriteObject);
	street.x = -50;
	street.y = 0;
	street.width = 590;
	street.height = 260;

	var streetImage = new Image();
	streetImage.src = "images/background1.png";

	var hotel = Object.create(spriteObject);
	hotel.x = -50;
	hotel.y = 0;
	hotel.width = 550;
	hotel.height = 400;

	var hotelImage = new Image();
	hotelImage.src = "images/hotel.png";

	var hotelBubble1 = Object.create(spriteObject);
	hotelBubble1.x = 270;
	hotelBubble1.y = 0;
	hotelBubble1.width = 210;
	hotelBubble1.height = 120;

	var hotelBubble1Image = new Image();
	hotelBubble1Image.src = "images/hotelBubble1.png";

	var hotelBubble2 = Object.create(spriteObject);
	hotelBubble2.x = 170;
	hotelBubble2.y = 120;
	hotelBubble2.width = 210;
	hotelBubble2.height = 120;

	var hotelBubble2Image = new Image();
	hotelBubble2Image.src = "images/hotelBubble2.png";

	var hotelBubble3 = Object.create(spriteObject);
	hotelBubble3.x = 270;
	hotelBubble3.y = 0;
	hotelBubble3.width = 210;
	hotelBubble3.height = 120;

	var hotelBubble3Image = new Image();
	hotelBubble3Image.src = "images/hotelBubble3.png";

	var streetBubble1 = Object.create(spriteObject);
	streetBubble1.x = 360;
	streetBubble1.y = 0;
	streetBubble1.width = 210;
	streetBubble1.height = 120;

	var streetBubble1Image = new Image();
	streetBubble1Image.src = "images/streetBubble1.png";

	var streetBubble2 = Object.create(spriteObject);
	streetBubble2.x = 70;
	streetBubble2.y = 0;
	streetBubble2.width = 210;
	streetBubble2.height = 120;

	var streetBubble2Image = new Image();
	streetBubble2Image.src = "images/streetBubble2.png";

	var streetBubble3 = Object.create(spriteObject);
	streetBubble3.x = -20;
	streetBubble3.y = 0;
	streetBubble3.width = 200;
	streetBubble3.height = 100;

	var streetBubble3Image = new Image();
	streetBubble3Image.src = "images/streetBubble3.png";

	var officeBubble1 = Object.create(spriteObject);
	officeBubble1.x = 340;
	officeBubble1.y = 100;
	officeBubble1.width = 200;
	officeBubble1.height = 100;

	var officeBubble1Image = new Image();
	officeBubble1Image.src = "images/officeBubble1.png";

	var officeBubble2 = Object.create(spriteObject);
	officeBubble2.x = 80;
	officeBubble2.y = 30;
	officeBubble2.width = 200;
	officeBubble2.height = 100;

	var officeBubble2Image = new Image();
	officeBubble2Image.src = "images/officeBubble2.png";

	var officeBubble3 = Object.create(spriteObject);
	officeBubble3.x = 340;
	officeBubble3.y = 100;
	officeBubble3.width = 200;
	officeBubble3.height = 100;

	var officeBubble3Image = new Image();
	officeBubble3Image.src = "images/officeBubble3.png";

	var officeBubble4 = Object.create(spriteObject);
	officeBubble4.x = 80;
	officeBubble4.y = 30;
	officeBubble4.width = 200;
	officeBubble4.height = 100;

	var officeBubble4Image = new Image();
	officeBubble4Image.src = "images/officeBubble4.png";

	var officeBubble5 = Object.create(spriteObject);
	officeBubble5.x = 340;
	officeBubble5.y = 100;
	officeBubble5.width = 200;
	officeBubble5.height = 100;

	var officeBubble5Image = new Image();
	officeBubble5Image.src = "images/officeBubble5.png";

	var chuck = Object.create(spriteObject);
	chuck.x = 0;
	chuck.y = 200;
	chuck.width = 155;
	chuck.height = 210;
	var chuckMove = false;

	var chuckImage = new Image();
	chuckImage.src = "images/chuck.png";

	var office = Object.create(spriteObject);
	office.x = 0;
	office.y = 100;
	office.width = 550;
	office.height = 400;

	var officeImage = new Image();
	officeImage.src = "images/office.png";

	var apartment = Object.create(spriteObject);
	apartment.x = 0;
	apartment.y = 100;
	apartment.width = 550;
	apartment.height = 400;

	var apartmentImage = new Image();
	apartmentImage.src = "images/apartment.png";

	var wife = Object.create(spriteObject);
	wife.x = 200;
	wife.y = 170;
	wife.width = 80;
	wife.height = 210;

	var wifeImage = new Image();
	wifeImage.src = "images/wife.png";

	var bob = Object.create(spriteObject);
	bob.x = 120;
	bob.y = 140;
	bob.width = 72;
	bob.height = 190;

	var bobImage = new Image();
	bobImage.src = "images/bob.png";

	var apartmentBubble1 = Object.create(spriteObject);
	apartmentBubble1.x = 180;
	apartmentBubble1.y = 110;
	apartmentBubble1.width = 200;
	apartmentBubble1.height = 100;

	var apartmentBubble1Image = new Image();
	apartmentBubble1Image.src = "images/apartmentBubble1.png";

	var apartmentBubble2 = Object.create(spriteObject);
	apartmentBubble2.x = 180;
	apartmentBubble2.y = 110;
	apartmentBubble2.width = 200;
	apartmentBubble2.height = 100;

	var apartmentBubble2Image = new Image();
	apartmentBubble2Image.src = "images/apartmentBubble2.png";

	var map = Object.create(spriteObject);
	map.x = 0;
	map.y = 100;
	map.width = 550;
	map.height = 400;

	var mapImage = new Image();
	mapImage.src = "images/map.png";

	var mapBubble1 = Object.create(spriteObject);
	mapBubble1.x = 60;
	mapBubble1.y = 160;
	mapBubble1.width = 234;
	mapBubble1.height = 168;

	var mapBubble1Image = new Image();
	mapBubble1Image.src = "images/mapBubble1.png";

	var mapBubble2 = Object.create(spriteObject);
	mapBubble2.x = 180;
	mapBubble2.y = 310;
	mapBubble2.width = 275;
	mapBubble2.height = 180;

	var mapBubble2Image = new Image();
	mapBubble2Image.src = "images/mapBubble2.png";

	var shed = Object.create(spriteObject);
	shed.x = 0;
	shed.y = 0;
	shed.width = 550;
	shed.height = 400;

	var shedImage = new Image();
	shedImage.src = "images/shed.png";

	var shedBubble1 = Object.create(spriteObject);
	shedBubble1.x = 70;
	shedBubble1.y = 0;
	shedBubble1.width = 350;
	shedBubble1.height = 300;

	var shedBubble1Image = new Image();
	shedBubble1Image.src = "images/shedBubble1.png";

	var shedBubble2 = Object.create(spriteObject);
	shedBubble2.x = 70;
	shedBubble2.y = 0;
	shedBubble2.width = 350;
	shedBubble2.height = 300;

	var shedBubble2Image = new Image();
	shedBubble2Image.src = "images/shedBubble2.png";

	var shedBubble3 = Object.create(spriteObject);
	shedBubble3.x = 70;
	shedBubble3.y = 0;
	shedBubble3.width = 350;
	shedBubble3.height = 300;

	var shedBubble3Image = new Image();
	shedBubble3Image.src = "images/shedBubble3.png";

	var chuckTitle = Object.create(spriteObject);
	chuckTitle.x = 70;
	chuckTitle.y = 60;
	chuckTitle.width = 350;
	chuckTitle.height = 40;

	var chuckTitleImage = new Image();
	chuckTitleImage.src = "images/chuckTitle.png";

	var royTitle = Object.create(spriteObject);
	royTitle.x = 70;
	royTitle.y = 60;
	royTitle.width = 380;
	royTitle.height = 130;

	var royTitleImage = new Image();
	royTitleImage.src = "images/royTitle.png";

	var lisaTitle = Object.create(spriteObject);
	lisaTitle.x = 70;
	lisaTitle.y = 60;
	lisaTitle.width = 390;
	lisaTitle.height = 135;

	var lisaTitleImage = new Image();
	lisaTitleImage.src = "images/lisaTitle.png";

	var bobTitle = Object.create(spriteObject);
	bobTitle.x = 120;
	bobTitle.y = 60;
	bobTitle.width = 265;
	bobTitle.height = 60;

	var bobTitleImage = new Image();
	bobTitleImage.src = "images/bobTitle.png";

	var leoTitle = Object.create(spriteObject);
	leoTitle.x = 50;
	leoTitle.y = 60;
	leoTitle.width = 420;
	leoTitle.height = 135;

	var leoTitleImage = new Image();
	leoTitleImage.src = "images/leoTitle.png";

	var carolTitle = Object.create(spriteObject);
	carolTitle.x = 70;
	carolTitle.y = 60;
	carolTitle.width = 390;
	carolTitle.height = 150;

	var carolTitleImage = new Image();
	carolTitleImage.src = "images/carolTitle.png";

	var chuckChoice1 = Object.create(spriteObject);
	chuckChoice1.x = 70;
	chuckChoice1.y = 150;
	chuckChoice1.width = 400;
	chuckChoice1.height = 208;

	var chuckChoice1Image = new Image();
	chuckChoice1Image.src = "images/chuckChoice1.png";

	var chuckChoice2 = Object.create(spriteObject);
	chuckChoice2.x = 70;
	chuckChoice2.y = 150;
	chuckChoice2.width = 400;
	chuckChoice2.height = 392;

	var chuckChoice2Image = new Image();
	chuckChoice2Image.src = "images/chuckChoice2.png";

	var chuckChoice3 = Object.create(spriteObject);
	chuckChoice3.x = 70;
	chuckChoice3.y = 150;
	chuckChoice3.width = 400;
	chuckChoice3.height = 162;

	var chuckChoice3Image = new Image();
	chuckChoice3Image.src = "images/chuckChoice3.png";

	var chuckChoice4 = Object.create(spriteObject);
	chuckChoice4.x = 70;
	chuckChoice4.y = 150;
	chuckChoice4.width = 400;
	chuckChoice4.height = 116;

	var chuckChoice4Image = new Image();
	chuckChoice4Image.src = "images/chuckChoice4.png";

	var royChoice1 = Object.create(spriteObject);
	royChoice1.x = 70;
	royChoice1.y = 250;
	royChoice1.width = 400;
	royChoice1.height = 182;

	var royChoice1Image = new Image();
	royChoice1Image.src = "images/royChoice1.png";

	var royChoice2 = Object.create(spriteObject);
	royChoice2.x = 70;
	royChoice2.y = 250;
	royChoice2.width = 400;
	royChoice2.height = 182;

	var royChoice2Image = new Image();
	royChoice2Image.src = "images/royChoice2.png";

	var royChoice3 = Object.create(spriteObject);
	royChoice3.x = 70;
	royChoice3.y = 250;
	royChoice3.width = 400;
	royChoice3.height = 296;

	var royChoice3Image = new Image();
	royChoice3Image.src = "images/royChoice3.png";

	var lisaChoice1 = Object.create(spriteObject);
	lisaChoice1.x = 70;
	lisaChoice1.y = 250;
	lisaChoice1.width = 400;
	lisaChoice1.height = 231;

	var lisaChoice1Image = new Image();
	lisaChoice1Image.src = "images/lisaChoice1.png";

	var lisaChoice2 = Object.create(spriteObject);
	lisaChoice2.x = 70;
	lisaChoice2.y = 250;
	lisaChoice2.width = 400;
	lisaChoice2.height = 185;

	var lisaChoice2Image = new Image();
	lisaChoice2Image.src = "images/lisaChoice2.png";

	var lisaChoice3 = Object.create(spriteObject);
	lisaChoice3.x = 70;
	lisaChoice3.y = 250;
	lisaChoice3.width = 400;
	lisaChoice3.height = 254;

	var lisaChoice3Image = new Image();
	lisaChoice3Image.src = "images/lisaChoice3.png";

	var lisaChoice4 = Object.create(spriteObject);
	lisaChoice4.x = 70;
	lisaChoice4.y = 250;
	lisaChoice4.width = 400;
	lisaChoice4.height = 208;

	var lisaChoice4Image = new Image();
	lisaChoice4Image.src = "images/lisaChoice4.png";

	var bobChoice1 = Object.create(spriteObject);
	bobChoice1.x = 70;
	bobChoice1.y = 250;
	bobChoice1.width = 400;
	bobChoice1.height = 185;

	var bobChoice1Image = new Image();
	bobChoice1Image.src = "images/bobChoice1.png";

	var bobChoice2 = Object.create(spriteObject);
	bobChoice2.x = 70;
	bobChoice2.y = 250;
	bobChoice2.width = 400;
	bobChoice2.height = 162;

	var bobChoice2Image = new Image();
	bobChoice2Image.src = "images/bobChoice2.png";

	var bobChoice3 = Object.create(spriteObject);
	bobChoice3.x = 70;
	bobChoice3.y = 250;
	bobChoice3.width = 400;
	bobChoice3.height = 185;

	var bobChoice3Image = new Image();
	bobChoice3Image.src = "images/bobChoice3.png";

	var leoChoice1 = Object.create(spriteObject);
	leoChoice1.x = 70;
	leoChoice1.y = 250;
	leoChoice1.width = 400;
	leoChoice1.height = 230;

	var leoChoice1Image = new Image();
	leoChoice1Image.src = "images/leoChoice1.png";

	var leoChoice2 = Object.create(spriteObject);
	leoChoice2.x = 70;
	leoChoice2.y = 250;
	leoChoice2.width = 400;
	leoChoice2.height = 162;

	var leoChoice2Image = new Image();
	leoChoice2Image.src = "images/leoChoice2.png";

	var leoChoice3 = Object.create(spriteObject);
	leoChoice3.x = 70;
	leoChoice3.y = 250;
	leoChoice3.width = 400;
	leoChoice3.height = 162;

	var leoChoice3Image = new Image();
	leoChoice3Image.src = "images/leoChoice3.png";

	var leoChoice4 = Object.create(spriteObject);
	leoChoice4.x = 70;
	leoChoice4.y = 250;
	leoChoice4.width = 400;
	leoChoice4.height = 270;

	var leoChoice4Image = new Image();
	leoChoice4Image.src = "images/leoChoice4.png";

	var carolChoice1 = Object.create(spriteObject);
	carolChoice1.x = 70;
	carolChoice1.y = 250;
	carolChoice1.width = 490;
	carolChoice1.height = 320;

	var carolChoice1Image = new Image();
	carolChoice1Image.src = "images/carolChoice1.png";

	var carolChoice2 = Object.create(spriteObject);
	carolChoice2.x = 70;
	carolChoice2.y = 250;
	carolChoice2.width = 380;
	carolChoice2.height = 200;

	var carolChoice2Image = new Image();
	carolChoice2Image.src = "images/carolChoice2.png";

	var carolChoice3 = Object.create(spriteObject);
	carolChoice3.x = 70;
	carolChoice3.y = 250;
	carolChoice3.width = 400;
	carolChoice3.height = 229;

	var carolChoice3Image = new Image();
	carolChoice3Image.src = "images/carolChoice3.png";

	var carolChoice4 = Object.create(spriteObject);
	carolChoice4.x = 70;
	carolChoice4.y = 250;
	carolChoice4.width = 400;
	carolChoice4.height = 185;

	var carolChoice4Image = new Image();
	carolChoice4Image.src = "images/carolChoice4.png";

	var carolChoice5 = Object.create(spriteObject);
	carolChoice5.x = 70;
	carolChoice5.y = 250;
	carolChoice5.width = 400;
	carolChoice5.height = 135;

	var carolChoice5Image = new Image();
	carolChoice5Image.src = "images/carolChoice5.png";

	var chuckPic = Object.create(spriteObject);
	chuckPic.x = 550;
	chuckPic.y = 0;
	chuckPic.width = 442;
	chuckPic.height = 549;

	var chuckPicImage = new Image();
	chuckPicImage.src = "images/chuckImage.png";

	var royPic = Object.create(spriteObject);
	royPic.x = 550;
	royPic.y = 0;
	royPic.width = 442;
	royPic.height = 549;

	var royPicImage = new Image();
	royPicImage.src = "images/royPic.png";

	var lisaPic = Object.create(spriteObject);
	lisaPic.x = 550;
	lisaPic.y = 0;
	lisaPic.width = 442;
	lisaPic.height = 549;

	var lisaPicImage = new Image();
	lisaPicImage.src = "images/lisaPic.png";

	var bobPic = Object.create(spriteObject);
	bobPic.x = 550;
	bobPic.y = 0;
	bobPic.width = 442;
	bobPic.height = 549;

	var bobPicImage = new Image();
	bobPicImage.src = "images/bobPic.png";

	var leoPic = Object.create(spriteObject);
	leoPic.x = 550;
	leoPic.y = 0;
	leoPic.width = 442;
	leoPic.height = 549;

	var leoPicImage = new Image();
	leoPicImage.src = "images/leoPic.png";

	var carolPic = Object.create(spriteObject);
	carolPic.x = 550;
	carolPic.y = 0;
	carolPic.width = 442;
	carolPic.height = 549;

	var carolPicImage = new Image();
	carolPicImage.src = "images/carolPic.png";



	function onKeyDown(event) {
	
		if (event.keyCode === 32 && !disableSpace) {
	
			event.preventDefault();
			currentPage++;
			bubbleSequence = 1;
		}
	
		if (event.keyCode === 37) {
			
			event.preventDefault();
			royMove = true;
			roy.vx = -8;
		}
	
		if (event.keyCode === 39) {
			
			event.preventDefault();
			royMove = true;
			roy.vx = 8;
		}
		if (event.keyCode === 51 && currentPage === 5 && bubbleSequence > 3 && !timesUp1) {
			
			event.preventDefault();
			choice1 = "A";
			currentPage = 6;
		}
	
		if (event.keyCode === 52 && currentPage === 5 && bubbleSequence > 3 && !timesUp1) {
	
			event.preventDefault();
			choice1 = "B";
			currentPage = 6;
		}
	
		if (event.keyCode === 83 && currentPage === 7 && bubbleSequence > 3 && !timesUp2) {
	
			event.preventDefault();
			choice2 = "A";
			currentPage = 8;
		}
	
		if (event.keyCode === 89 && currentPage === 9 && bubbleSequence > 5 && !timesUp3) {
	
			event.preventDefault();
			choice3 = "A";
			currentPage = 10;
		}
	
		if (event.keyCode === 78 && currentPage === 9 && bubbleSequence > 5 && !timesUp3) {
		
			event.preventDefault();
			choice3 = "B";
			currentPage = 10;
		}
	
		if (event.keyCode === 69 && currentPage === 11 && bubbleSequence > 2 && !timesUp4) {
	
			event.preventDefault();
			choice4 = "A";
			currentPage = 12;
		}
	
		if (event.keyCode === 76 && currentPage === 11 && bubbleSequence > 2 && !timesUp4) {
	
			event.preventDefault();
			choice4 = "B";
			currentPage = 12;
		}
	
		if (event.keyCode === 77 && currentPage === 13 && !timesUp5) {
		
			event.preventDefault();
			choice5 = "A";
			currentPage = 14;
		}
	
		if (event.keyCode === 68 && currentPage === 13 && !timesUp5) {
	
			event.preventDefault();
			choice5 = "B";
			currentPage = 14;
		}
		if (event.keyCode === 69 && currentPage === 15 && bubbleSequence > 3 && !timesUp6) {
	
			event.preventDefault();
			choice6 = "A";
			currentPage = 16;
		}
	
		if (event.keyCode === 87 && currentPage === 15 && bubbleSequence > 3 && !timesUp6) {
	
			event.preventDefault();
			choice6 = "B";
			currentPage = 16;
		}

		if (event.keyCode === 65) {
	
			event.preventDefault();
			bubbleSequence++;
		}
	}

	function onKeyUp(event)	{
		
		if (event.keyCode === 37) {
			
			royMove = false;
			roy.vx = 0;
		}
		if (event.keyCode === 39) {
			
			royMove = false;
			roy.vx = 0;

		}
	}


	function countdown1() {
	
		if (counter1 > 0) {
			counter1--;
			timerPlay1 = false;
			window.setTimeout(countdown1,1000);
		}
	}

	function countdown2() {
	
		if (counter2 > 0) {
			counter2--;
			timerPlay2 = false;
			window.setTimeout(countdown2,1000);
		}
	}

	function countdown3() {
	
		if (counter3 > 0) {
			counter3--;
			timerPlay3 = false;
			window.setTimeout(countdown3,1000);
		}
	}

	function countdown4() {
	
		if (counter4 > 0) {
			counter4--;
			timerPlay4 = false;
			window.setTimeout(countdown4,1000);
		}
	}

	function countdown5() {
	
		if (counter5 > 0) {
			counter5--;
			timerPlay5 = false;
			window.setTimeout(countdown5,1000);
		}
	}

	function countdown6() {
	
		if (counter6 > 0) {
			counter6--;
			timerPlay6 = false;
			window.setTimeout(countdown6,1000);
		}
	}
	
	
	
	function init() {
	
		fillPageArray();
	
		window.addEventListener("keydown", onKeyDown, false);
		window.addEventListener("keyup", onKeyUp, false);
	}
	
	function fillPageArray() {
		
		for (var i = 1; i < 30; i++) {
			pages.push(i);	
		}	
	}
	
	console.log(pages);

	function update() {
			
		context.clearRect(0,0,canvas.width,canvas.height);
		window.setTimeout(update,103);
		checkCurrentPage();
	}
	
	function checkCurrentPage() {

		var pageFound = false;
		
		if (!pageFound) {
			for (var i = 0; i < pages.length; i++) {
				if (i === currentPage) {
					pageFound = true;
					renderCurrentPage(i);
				}
			}
		}
	}
	
	function renderCurrentPage(pageNumber) {

		if (pageNumber === 1) {
		
			context.drawImage(cedarvilleImage,cedarville.x,cedarville.y,cedarville.width,cedarville.height);
		
			context.font = "40px verdana";
			context.fillStyle = "000000";
			context.fillText("CEDARVILLE",197,70);
		
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO START",35,430);
		
			context.font = "20px verdana";
			context.fillText("A game by Warm Sea Orchard",450,150);
			context.fillText("code/artwork/story by Ben Savage",450,250);
			context.fillText("Made for Ludum Dare 27",450,350);
		}
			
		if (pageNumber === 2) {
		
			context.drawImage(instructions1Image,instructions1.x,instructions1.y,instructions1.width,instructions1.height);
		
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
			
		if (pageNumber === 3) {
		
			context.drawImage(instructions2Image,instructions2.x,instructions2.y,instructions2.width,instructions2.height);
		
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		
		if (pageNumber === 4) {
		
			context.font = "70px verdana";
			context.fillText("\"CHUCK\"",100,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		
		if (pageNumber === 5) {
		
			window.removeEventListener("keydown", onKeyDown, false);
			context.drawImage(hotelImage,hotel.x,hotel.y,hotel.width,hotel.height);
			context.drawImage(chuckImage,chuck.sourceX,chuck.sourceY,chuck.width,chuck.height,chuck.x,chuck.y,chuck.width,chuck.height);
		
			chuck.vx = 8;
		
			if (chuck.x < 200) {
				chuck.x += chuck.vx;
			}
		
			chuck.sourceX += 155;
		
			if (chuck.sourceX === 310) {
				chuck.sourceX = 0;
			}
		
			if (chuck.x === 200) {
				chuck.x = 200;
				chuck.sourceX = 0;
				window.addEventListener("keydown", onKeyDown, false);
		
				if (bubbleSequence <= 3) {
					context.fillText("PRESS THE A KEY TO ADVANCE",35,480);
					disableSpace = true;
				}
		
				if (bubbleSequence === 1) {
					context.drawImage(hotelBubble1Image,hotelBubble1.x,hotelBubble1.y,hotelBubble1.width,hotelBubble1.height);
				}
				if (bubbleSequence === 2) {
					context.drawImage(hotelBubble2Image,hotelBubble2.x,hotelBubble2.y,hotelBubble2.width,hotelBubble2.height);
				}
				if (bubbleSequence === 3) {
					context.drawImage(hotelBubble3Image,hotelBubble3.x,hotelBubble3.y,hotelBubble3.width,hotelBubble3.height);
				}
				if (bubbleSequence > 3) {
			
					context.font = "30px verdana";
					context.fillText("WHAT DO YOU DO NEXT?",550,50);
					context.fillText("Press 3 to stay for three nights.",550,200);
					context.fillText("Press 4 to stay for four nights.",550,300);

					beat.play();
					
					context.font = "70px verdana";
					context.fillText(counter1,740,400);
		
					if (timerPlay1 === true) {
						countdown1();
					}
					if (counter1 === 0) {
						
						var randomChoice1 = Math.floor(Math.random() * randomArray.length);
						timesUp1 = true;
						
						choice1 = randomArray[randomChoice1];

						disableSpace = false;
		
						context.font = "30px verdana";
						context.fillText("PRESS SPACE TO ADVANCE",35,470);
					}
				}
			}
		}
		
		
		if (pageNumber === 6) {
		
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("\"ROY\"",140,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		
		if (pageNumber === 7) {
		
			roy.x += roy.vx;
		
			if (royMove === true) {
				roy.sourceX += 110;
			
				if (roy.sourceX === 220) {
					roy.sourceX = 0;
				}
			}
		
			if (royMove === false) {
				roy.sourceX = 0;
			}
		
			dog.sourceX += 150;
		
			if (dog.sourceX === 300) {
				dog.sourceX = 0;
			}
		
			context.drawImage(streetImage,street.x,street.y,street.width,street.height);
			context.drawImage(dogImage,dog.sourceX,dog.sourceY,dog.width,dog.height,dog.x,dog.y,dog.width,dog.height);
			context.drawImage(royImage,roy.sourceX,roy.sourceY,roy.width,roy.height,roy.x,roy.y,roy.width,roy.height);
		
			if (bubbleSequence === 1) {
				context.drawImage(streetBubble1Image,streetBubble1.x,streetBubble1.y,streetBubble1.width,streetBubble1.height);
			}
			if (bubbleSequence === 2) {
				context.drawImage(streetBubble2Image,streetBubble2.x,streetBubble2.y,streetBubble2.width,streetBubble2.height);
			}
			if (bubbleSequence === 3) {
				context.drawImage(streetBubble3Image,streetBubble3.x,streetBubble3.y,streetBubble3.width,streetBubble3.height);
			}
			if (bubbleSequence > 3) {
				context.font = "30px verdana";
				context.fillText("WHAT DO YOU DO NEXT?",560,50);
				context.fillText("Press the S key to shoot the dog.",550,200);
				context.fillText("Wait and let the dog escape.",550,300);
		
				beat.play();
				context.font = "70px verdana";
				context.fillText(counter2,740,400);
		
				if (timerPlay2 === true) {
					countdown2();
				}
				if (counter2 === 0) {
		
					//var randomChoice2 = Math.floor(Math.random() * randomArray.length);
					timesUp2 = true;
					choice2 = randomArray[1];

					disableSpace = false;
					context.font = "30px verdana";
					context.fillText("PRESS SPACE TO ADVANCE",35,470);
				}
			}
		
			if (bubbleSequence <= 3) {
				context.fillText("PRESS THE A KEY TO ADVANCE",35,470);
				disableSpace = true;
			}
		}
		
		
		if (pageNumber === 8) {
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("\"LISA\"",130,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		
		if (pageNumber === 9) {
		
			disableSpace = true;
			context.drawImage(officeImage,office.x,office.y,office.width,office.height);
		
			if (bubbleSequence <= 5) {
				context.fillText("PRESS THE A KEY TO ADVANCE",35,530);
			}
		
			if (bubbleSequence === 1) {
				context.drawImage(officeBubble1Image,officeBubble1.x,officeBubble1.y,officeBubble1.width,officeBubble1.height);
			}
			if (bubbleSequence === 2) {
				context.drawImage(officeBubble2Image,officeBubble2.x,officeBubble2.y,officeBubble2.width,officeBubble2.height);
			}
			if (bubbleSequence === 3) {
				context.drawImage(officeBubble3Image,officeBubble3.x,officeBubble3.y,officeBubble3.width,officeBubble3.height);
			}
			if (bubbleSequence === 4) {
				context.drawImage(officeBubble4Image,officeBubble4.x,officeBubble4.y,officeBubble4.width,officeBubble4.height);
			}
			if (bubbleSequence === 5) {
				context.drawImage(officeBubble5Image,officeBubble5.x,officeBubble5.y,officeBubble5.width,officeBubble5.height);
			}
			if (bubbleSequence > 5) {
				context.font = "30px verdana";
				context.fillText("WHAT DO YOU DO NEXT?",550,50);
				context.fillText("Press Y to say the password.",550,200);
				context.fillText("Press N to not say the password.",550,300);
		
				beat.play();
				context.font = "70px verdana";
				context.fillText(counter3,740,400);
		
				if (timerPlay3 === true) {
					countdown3();
				}
				if (counter3 === 0) {
					var randomChoice3 = Math.floor(Math.random() * randomArray.length);
					timesUp3 = true;
					choice3 = randomArray[randomChoice3];

					disableSpace = false;
					context.font = "30px verdana";
					context.fillText("PRESS SPACE TO ADVANCE",35,550);
				}
			}
		}
		
		if (pageNumber === 10) {
			
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("\"BOB\"",140,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		
		if (pageNumber === 11) {
		
			disableSpace = true;
			context.drawImage(apartmentImage,apartment.x,apartment.y,apartment.width,apartment.height);
		
			wife.sourceX += 80;
		
			if (wife.sourceX === 160) {
		
				wife.sourceX = 0;
			}
		
			context.drawImage(bobImage,bob.x,bob.y,bob.width,bob.height);
			context.drawImage(wifeImage,wife.sourceX,wife.sourceY,wife.width,wife.height,wife.x,wife.y,wife.width,wife.height);
		
			if (bubbleSequence === 1) {
		
				context.drawImage(apartmentBubble1Image,apartmentBubble1.x,apartmentBubble1.y,apartmentBubble1.width,apartmentBubble1.height);
			}
			
			if (bubbleSequence === 2) {
		
				context.drawImage(apartmentBubble2Image,apartmentBubble2.x,apartmentBubble2.y,apartmentBubble2.width,apartmentBubble2.height);
			}
		
			if (bubbleSequence > 2) {
		
				context.font = "30px verdana";
				context.fillText("WHAT DO YOU DO NEXT?",550,50);
				context.fillText("Press the E key to explain.",550,200);
				context.fillText("Press the L key to leave forever.",550,300);
		
				beat.play();
		
				context.font = "70px verdana";
				context.fillText(counter4,740,400);
		
				if (timerPlay4 === true) {
					countdown4();
				}
				if (counter4 === 0) {
					var randomChoice4 = Math.floor(Math.random() * randomArray.length);
					timesUp4 = true;
					choice4 = randomArray[randomChoice4];

					disableSpace = false;
					context.font = "30px verdana";
					context.fillText("PRESS SPACE TO ADVANCE",35,550);
				}
			}
		
			if (bubbleSequence <= 2) {
				context.fillText("PRESS THE A KEY TO ADVANCE",35,530);
			}
		}
		
		if (pageNumber === 12) {
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("\"LEO\"",140,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		
		if (pageNumber === 13) {
		
			disableSpace = true;
			context.drawImage(mapImage,map.x,map.y,map.width,map.height);
			context.drawImage(mapBubble1Image,mapBubble1.x,mapBubble1.y,mapBubble1.width,mapBubble1.height);
			context.drawImage(mapBubble2Image,mapBubble2.x,mapBubble2.y,mapBubble2.width,mapBubble2.height);
		
			if (bubbleSequence === 1) {
			
				context.font = "30px verdana";
				context.fillText("A sudden and horrible twist of fate has struck your family.",0,25);
				context.fillText("Unfortunately, you cannot see both your mother and daughter",0,55);
				context.fillText("as fate has decided for them to die on the same day.",0,85);
			}
			if (bubbleSequence >= 2) {
			
				context.font = "30px verdana";
				context.fillText("WHAT DO YOU DO NEXT?",550,50);
				context.fillText("Press M to visit your mother.",550,200);
				context.fillText("Press D to stay with daughter.",550,300);
			
				beat.play();
				context.font = "70px verdana";
				context.fillText(counter5,740,400);
			
				if (timerPlay5 === true) {
			
					countdown5();
				}
				if (counter5 === 0) {
			
					var randomChoice5 = Math.floor(Math.random() * randomArray.length);
					timesUp5 = true;
					choice5 = randomArray[randomChoice5];

					disableSpace = false;
					context.font = "30px verdana";
					context.fillText("PRESS SPACE TO ADVANCE",35,550);
				}
			}
			if (bubbleSequence <= 1) {
			
				context.font = "30px verdana";
				context.fillText("PRESS THE A KEY TO ADVANCE",35,530);
			}
		}
		
		if (pageNumber === 14) {
		
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("\"CAROL\"",100,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}

		if (pageNumber === 15) {
		
			disableSpace = true;
			context.drawImage(shedImage,shed.x,shed.y,shed.width,shed.height);
		
			if (bubbleSequence === 1) {
				context.drawImage(shedBubble1Image,shedBubble1.x,shedBubble1.y,shedBubble1.width,shedBubble1.height);
			}
			if (bubbleSequence === 2) {
				context.drawImage(shedBubble2Image,shedBubble2.x,shedBubble2.y,shedBubble2.width,shedBubble2.height);
			}
			if (bubbleSequence === 3) {
				context.drawImage(shedBubble3Image,shedBubble3.x,shedBubble3.y,shedBubble3.width,shedBubble3.height);
			}
			if (bubbleSequence > 3) {
				context.font = "30px verdana";
				context.fillText("WHAT DO YOU DO NEXT?",550,50);
				context.fillText("Press the E key to enter shed.",550,200);
				context.fillText("Press the W key to walk away.",550,300);

				beat.play();
				context.font = "70px verdana";
				context.fillText(counter6,740,400);
			
				if (timerPlay6 === true) {
					countdown6();
				}
				if (counter6 === 0) {
					var randomChoice6 = Math.floor(Math.random() * randomArray.length);
					timesUp6 = true;
					choice6 = randomArray[randomChoice6];

					disableSpace = false;
					context.font = "30px verdana";
					context.fillText("PRESS SPACE TO ADVANCE",35,550);
				}
			}
		
			if (bubbleSequence <= 3) {
				context.fillText("PRESS THE A KEY TO ADVANCE",35,530);
			}
		
			context.drawImage(carolImage,carol.sourceX,carol.sourceY,carol.width,carol.height,carol.x,carol.y,carol.width,carol.height);
		}
		
		if (pageNumber === 16) {
			
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("CONCLUSIONS",30,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",75,430);
		}

		if (pageNumber === 17) {
			
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("\"CHUCK\"",100,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		
		if (pageNumber === 18) {
		
			context.drawImage(chuckTitleImage,chuckTitle.x,chuckTitle.y,chuckTitle.width,chuckTitle.height);
		
			if (choice1 === "A" && choice6 === "A") {
				context.drawImage(chuckChoice2Image,chuckChoice2.x,chuckChoice2.y,chuckChoice2.width,chuckChoice2.height);
			}
			if (choice1 === "A" && choice6 === "B") {
				context.drawImage(chuckChoice1Image,chuckChoice1.x,chuckChoice1.y,chuckChoice1.width,chuckChoice1.height);
			}
			if (choice1 === "B" && choice4 === "B") {
				context.drawImage(chuckChoice3Image,chuckChoice3.x,chuckChoice3.y,chuckChoice3.width,chuckChoice3.height);
			}
			if (choice1 === "B" && choice4 === "A") {
				context.drawImage(chuckChoice4Image,chuckChoice4.x,chuckChoice4.y,chuckChoice4.width,chuckChoice4.height);
			}
		}	

		if (pageNumber === 19) {
		
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("\"ROY\"",140,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		
		if (pageNumber === 20) {
		
			context.drawImage(royTitleImage,royTitle.x,royTitle.y,royTitle.width,royTitle.height);
		
			if (choice2 === "A") {
				context.drawImage(royChoice1Image,royChoice1.x,royChoice1.y,royChoice1.width,royChoice1.height);
			}
			if (choice2 === "B" && choice6 === "A") {
				context.drawImage(royChoice2Image,royChoice2.x,royChoice2.y,royChoice2.width,royChoice2.height);
			}
			if (choice2 === "B" && choice6 === "B") {
				context.drawImage(royChoice3Image,royChoice3.x,royChoice3.y,royChoice3.width,royChoice3.height);
			}
		}
		
		if (pageNumber === 21) {
			
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("\"LISA\"",130,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		if (pageNumber === 22) {
			
			context.drawImage(lisaTitleImage,lisaTitle.x,lisaTitle.y,lisaTitle.width,lisaTitle.height);
		
			if (choice3 === "A" && choice6 === "B") {
				context.drawImage(lisaChoice1Image,lisaChoice1.x,lisaChoice1.y,lisaChoice1.width,lisaChoice1.height);
			}
			if (choice3 === "A" && choice6 === "A") {
				context.drawImage(lisaChoice2Image,lisaChoice2.x,lisaChoice2.y,lisaChoice2.width,lisaChoice2.height);
			}
			if (choice3 === "B" && choice5 === "A") {
				context.drawImage(lisaChoice3Image,lisaChoice3.x,lisaChoice3.y,lisaChoice3.width,lisaChoice3.height);
			}
			if (choice3 === "B" && choice5 === "B") {
				context.drawImage(lisaChoice4Image,lisaChoice4.x,lisaChoice4.y,lisaChoice4.width,lisaChoice4.height);
			}
		}
		if (pageNumber === 23) {
		
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("\"BOB\"",140,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		if (pageNumber === 24) {

			context.drawImage(bobTitleImage,bobTitle.x,bobTitle.y,bobTitle.width,bobTitle.height);
		
			if (choice4 === "B" && choice1 === "B") {
				context.drawImage(bobChoice1Image,bobChoice1.x,bobChoice1.y,bobChoice1.width,bobChoice1.height);
			}
			if (choice4 === "B" && choice1 === "A") {
				context.drawImage(bobChoice2Image,bobChoice2.x,bobChoice2.y,bobChoice2.width,bobChoice2.height);
			}
			if (choice4 === "A") {
				context.drawImage(bobChoice3Image,bobChoice3.x,bobChoice3.y,bobChoice3.width,bobChoice3.height);
			}	
		}
		
		if (pageNumber === 25) {
		
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("\"LEO\"",140,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		
		if (pageNumber === 26) {

			context.drawImage(leoTitleImage,leoTitle.x,leoTitle.y,leoTitle.width,leoTitle.height);
		
			if (choice5 === "B" && choice4 === "A") {
				context.drawImage(leoChoice1Image,leoChoice1.x,leoChoice1.y,leoChoice1.width,leoChoice1.height);
			}
			if (choice5 === "B" && choice4 === "B") {
				context.drawImage(leoChoice4Image,leoChoice4.x,leoChoice4.y,leoChoice4.width,leoChoice4.height);
			}
			if (choice5 === "A" && choice3 === "B") {
				context.drawImage(leoChoice2Image,leoChoice2.x,leoChoice2.y,leoChoice2.width,leoChoice2.height);
			}
			if (choice5 === "A" && choice3 === "A") {
				context.drawImage(leoChoice3Image,leoChoice3.x,leoChoice3.y,leoChoice3.width,leoChoice3.height);
			}
		}
		
		if (pageNumber === 27) {
			
			disableSpace = false;
			context.font = "70px verdana";
			context.fillText("\"CAROL\"",100,230);
			context.font = "30px verdana";
			context.fillText("PRESS SPACE TO ADVANCE",35,430);
		}
		
		if (pageNumber === 28) {

			context.drawImage(carolTitleImage,carolTitle.x,carolTitle.y,carolTitle.width,carolTitle.height);
		
			if (choice6 === "A" && choice1 === "A") {
				context.drawImage(carolChoice1Image,carolChoice1.x,carolChoice1.y,carolChoice1.width,carolChoice1.height);
			}
			if (choice6 === "A" && choice1 === "B") {
				context.drawImage(carolChoice2Image,carolChoice2.x,carolChoice2.y,carolChoice2.width,carolChoice2.height);
			}
			if (choice6 === "B" && choice3 === "A") {
				context.drawImage(carolChoice3Image,carolChoice3.x,carolChoice3.y,carolChoice3.width,carolChoice3.height);
			}
			if (choice6 === "B" && choice3 === "B") {
				context.drawImage(carolChoice5Image,carolChoice5.x,carolChoice5.y,carolChoice5.width,carolChoice5.height);
			}
			if (choice6 === "B" && choice2 === "B") {
				context.drawImage(carolChoice4Image,carolChoice4.x,carolChoice4.y,carolChoice4.width,carolChoice4.height);
			}
			if (choice6 === "B" && choice2 === "A") {
				context.drawImage(carolChoice5Image,carolChoice5.x,carolChoice5.y,carolChoice5.width,carolChoice5.height);
			}
		}
		
		if (pageNumber === 29) {
		
			disableSpace = true;
			context.drawImage(cedarvilleImage,cedarville.x,cedarville.y,cedarville.width,cedarville.height);
			context.font = "40px verdana";
			context.fillStyle = "000000";
		
			context.fillText("CEDARVILLE",197,70);
			context.font = "30px verdana";
			context.fillText("THE END",35,430);
		}
		
		
	}
	
	init();
	update();
})();