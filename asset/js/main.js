// slider 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// apexchart --areachart
var options = {
  series: [{
  name: 'series1',
  data: [60,40,70,40,80,45,70,45,70,40]
},

 ],
  chart: {
    toolbar:{
      show:false,
     },
  height: 300,
  type: 'area'
},
dataLabels: {
  enabled: true,
 
},
fill: {
  colors: ["var(--orange)"],
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'category',
  categories: ["January", "February","March", "April", "May", "June", "July","august","september","October","November","December"]
},

};

var chart = new ApexCharts(document.querySelector("#area"), options);
chart.render();





// apexchart --radial chart
var options = {
  series: [75],
  chart: {
  height: '100%',
  width:200,
  type: 'radialBar',
},
plotOptions: {
  donut: {
    enabled:false,
  },
},
dataLabels: {
  value: {
    show: false,
  },
},
fill: {
  colors: ["var(--orange)"],
},
labels: ['80%'],
};

var chart = new ApexCharts(document.querySelector("#radial"), options);
chart.render();



// apexchart --bar
var options = {
  series: [{
  data: [15, 40, 55, 40, 25, 35, 40, 50, 85 ,40]
}],
  chart: {
    toolbar: {
      show: false,
    },
  height: '80%',
  width: '70%',
  type: 'bar',  
},
grid:{
  show:false,
},
xaxis:{
  labels:{
    show:false,
  },
},
yaxis:{
  labels:{
    show:false,
  },
},
fill: {
  colors: ["var(--orange)"],
},
legend: {
  show: false,
},
dataLabels: {
  enabled: false,
},


};

var chart = new ApexCharts(document.querySelector("#bar"), options);
chart.render();



// apexchart --piechart
var options = {
  series: [25 ,45 ,30],
  chart: {
  type: 'donut',
  foreColor: '#373d3f',
  width:'100%',
  
},
dataLabels:{
  textAnchor: 'middle',
  distributed: false,
  offsetX: 0,
  offsetY: 0,
  style: {
    fontSize: '13px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    colors: ['#fff'],
 
},
},
plotOptions: {
  radialBar: {
    hollow: {
      size:100,
    }
  },
},
fill: {
  colors: ["#214bb8", "#45adda", "var(--orange)"]
},
stroke: {
  show: true,
  curve: 'straight',
  lineCap: 'butt',
  colors:['#fff'],
  width: 5,
  dashArray: 0, 
},

 tooltip: {
  style: {
    fontSize: '15px',
    fontFamily: 'cursive',
    
  },
},
    
legend: {
  show: false,
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: '100%'
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#pie"), options);
chart.render();
// apexchart-dieS
var options = {
  series: [{
    data: [10,20,10,20,10,20]
  }],
  chart: {
    toolbar:{
      show:false,
     },
  type: 'area',
  height: 180,
  width:'100%',
},
fill: {
  colors: [ "var(--orange)"]
},
stroke: {
  curve: 'smooth'
},
grid:{
  show:false,
},
xaxis:{
  labels:{
    show:false,
  },
},
yaxis:{
  labels:{
    show:false,
  },
},

};

var chart = new ApexCharts(document.querySelector("#snack"), options);
chart.render();



$(document).ready(function(){
   $('.switch').click(function(){
   $('.theme-switch').slideToggle(1000);

    });

   
   $('.change-1').click(function(){
    $(':root').css('--orange','#fe634e');
    $(':root').css('--orange-41','#fe634e41');
    $(':root').css('--orange-0','#fe634e00');

   });
   $('.change-2').click(function(){
    $(':root').css('--orange','black');
    $(':root').css('--orange-41','rgba(0, 0, 0, 0.41)');
    $(':root').css('--orange-0','rgba(0, 0, 0, 0)');
   });
   $('.change-3').click(function(){
    $(':root').css('--orange','green');
    $(':root').css('--orange-41','rgba(0, 128, 0, 0.41)');
    $(':root').css('--orange-0','rgba(0, 0, 0, 0)');
  });
  $('.change-4').click(function(){
    $(':root').css('--orange','yellow');
    $(':root').css('--orange-41','rgba(255, 255, 0, 0.41)');
    $(':root').css('--orange-0','rgba(255, 255, 0, 0)');
  });
  $('.change-5').click(function(){
    $(':root').css('--orange','blue');
    $(':root').css('--orange-41','rgba(0, 0, 255, 0.41)');
    $(':root').css('--orange-0','rgba(0, 0, 0, 0)');
  });
  $('.change-6').click(function(){
    $(':root').css('--orange','red');
    $(':root').css('--orange-41','rgba(255, 0, 0, 0.41)');
    $(':root').css('--orange-0','rgba(0, 0, 0, 0)');
  });
  $('.change-7').click(function(){
    $(':root').css('--orange','goldenrod');
    $(':root').css('--orange-41','rgba(218, 165, 32, 0.41)');
    $(':root').css('--orange-0','rgba(0, 0, 0, 0)');
  });
  $('.change-8').click(function(){
    $(':root').css('--orange','violet');
    $(':root').css('--orange-41','rgba(238, 130, 238, 0.41)');
    $(':root').css('--orange-0','rgba(0, 0, 0, 0)');
  });
  $('.change-9').click(function(){
    $(':root').css('--orange','cyan');
    $(':root').css('--orange-41','rgba(0, 255, 255, 0.41)');
    $(':root').css('--orange-0','rgba(0, 0, 0, 0)');
  });
  $('.change-10').click(function(){
    $(':root').css('--orange','darkolivegreen');
    $(':root').css('--orange-41','rgba(85, 107, 47, 0.41)');
    $(':root').css('--orange-0','rgba(0, 0, 0, 0)');
  });
  $('.change-11').click(function(){
    $(':root').css('--orange','slategray');
    $(':root').css('--orange-41','rgba(112, 128, 144, 0.41)');
    $(':root').css('--orange-0','rgba(0, 0, 0, 0)');
  });
  
    $('.sy').click(function(){
   
   $('.fa-bars').toggle('.d-none');    
   $('.fa-arrow-right').toggle('.d-none');
   $('aside').toggleClass('w-60 p-10 j-c-c');
   $('aside .menu ul .parent').toggleClass('m-45 icon');
   $('.main-area').toggleClass('m-60');
   $('aside .menu ul li a i').toggleClass('p-0');
   $('aside .menu').toggleClass('over-f');
   $('header').toggleClass('m-60');
   $('aside span').toggle('.d-none');
   $('.fa-chevron-right').toggle('.d-none');
   $('.form').toggle('.d-none');  
   $('.parent').children('.child').slideUp();
      if($('.child').hasClass('nn')){
        $('.child').removeClass('nn');
       
      }
      else{
        $('.child').addClass('nn');
       
      }
    });  
});

$('.parent').click(function(){
$(this).children('.child').slideToggle(150)
$('.parent').not(this).children('.child').slideUp(150);
$(this).children('.fa-chevron-right').toggleClass('a-90');

}); 