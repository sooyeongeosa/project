$(document).ready(function(){
  const menuBtn = $('.mobile-btn')
  const menuMobile = $('.menu-mobile')
  const navItems = $('.menu-mobile li');
  let layerMask = $('.layer-mask')
  const menuItems = $('.menu li')
  const sections = $('section');

  console.log(menuItems);
  console.log(sections);
  // 메뉴바 클릭시 배경색 바뀜  
    
//   $.each(menuItems, function(index, item){
//     menuItems.eq(index).click(function(){
//       console.log(this)
//       menuItems.removeClass('active')
//       $(this).addClass('active');
//     })
// })
  menuItems.click(function(){
    e.preventDefault();
    let idx = $(this).index();
    // console.log("몇번 메뉴가 클릭되었나 ",idx);
    let section = sections.eq(idx);
    // console.log("몇번 section인가 ",section);
    let sectionDistance = section.offset().top;
    // console.log("sectionDistance : ",sectionDistance)
    $('html, body').stop().animate({scrollTop: sectionDistance})
  })
  $(window).scroll(function(){ // 윈도우를 스크롤 했을 때
    sections.each(function(index, section){ // 컨텐츠 마다 할 일
      if($(this).offset().top <= $(window).scrollTop()+(82.5)){        
        // console.log("sectiontop : ", $(this).offset().top)
        // console.log("window.scrollTop : ",$(window).scrollTop())       
        menuItems.removeClass("active");
        menuItems.eq(index).addClass("active");
        navItems.removeClass("active")
        navItems.eq(index).addClass("active")
        }
    });
});
  menuBtn.click(function(e){
      e.preventDefault();
      menuBtn.toggleClass('mobile-btn-active');
      navItems.removeClass('active')
      // navItems.eq(0).addClass('active')
      menuMobile.toggleClass('active')
      layerMask.toggleClass('active')
      // $(header).toggleClass('active')
  })

  // 모바일 메뉴 배경 클릭시 사라짐.
  layerMask.click(function(){
    menuBtn.toggleClass('mobile-btn-active');
          navItems.removeClass('active')
          navItems.eq(0).addClass('active')
          menuMobile.toggleClass('active')
          layerMask.toggleClass('active')
  })
  // 화면사이즈 체크
  $(window).resize(function(){
      // 화면 너비를 계산한다.
      let temp = $(window).width();
      // 1200 px 보다 크면
      if(temp > 1220) {
        // 모바일 버튼 기능 초기화
        menuMobile.removeClass('active');
        menuBtn.removeClass('mobile-btn-active')    
        layerMask.removeClass("active")
        
      }

    });
  
  // read more about
  const readMoreBtn = $('.read-more')
  const readMoreContent = $('.read-more-content')

  readMoreBtn.click(function(e){
    e.preventDefault();
    readMoreContent.toggleClass('show-content')
    let temp = readMoreContent.hasClass('show-content')
    if(temp){
      readMoreBtn.text('Show less')
    }else {
      readMoreBtn.text('Show more')
    }
  })

  // ===============================================
  // jQuery 유틸리티 메서드 
  // $.each(object, function(index, item){ 
    // });
    // jQuery 일반 메서드
  // $(selector).each(function(index, item){ 
    // })
    
    // 스크립트:
    // $(document).ready(function(){
      //     $(".header").bind("click", function(){
  //          $(this).children(".children").toggle();
  //     });
  // })
  // html 코드 :
  // <div class="header">
  //     <a href="link.html">some link</a>
  //     <ul class="children">
  //         <li>some list</li>
  //     </ul>
  // </div>
  // ===============================================

  // show/hide skills' items
  const skillItems = $('section.skills .skill')
  $.each(skillItems,function(index, skill){
    let index_num=index;
    $(this).children(".head").click(function(){
      index_num=index_num.toString();
      console.log(index_num)
      let classname = "show-items"+index_num
      console.log(classname)
      $(this).next('.items').toggleClass(classname)
    })
    })

    /*=============== MIXITUP FILTER PORTFOLIO ===============*/
  var mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
  });
  // Link active work
  const workItem = $('.work__item')

  workItem.each(function(index,item){
    // $(this).click(function(){
      // 바로위 $(this) == $(item)
    $(item).click(function(){
      workItem.removeClass('active-work')
      // $(this).addClass('active-work') 
      // 바로위 $(this) == $(item)
      $(item).addClass('active-work')
    })
  })
  // ==================================================
  // Jquery scroll method
  // $(document).ready(function() {
  //   $(window).scroll(function() {
  //     if ($(document).scrollTop() > 50) {
  //       $("p").addClass("hz");
  //     } else {
  //       $("p").removeClass("hz");
  //     }
  //   });

  // $(window).scroll(function(){
  //   var scroll = $(window).scrollTop();
  //   if (scroll > 300) {
  //       $("P").css("background" , "yellow");
  //   } else {
  //       $("P").css("background" , ""); 
  //   }
  // });
  // ==================================================
  $(window).scroll(function(){
    if($(document).scrollTop()>700){
      $('header').addClass('show-box-shadow')  
      // $('header').css('background','rgba(1,1,1,0.7)')
      // $('.menu-mobile').css('background','rgba(1,1,1,0.5)')  
      $('.menu-mobile').addClass('scroll')  
      $('.menu').addClass('scroll')
      $('.mobile-btn span').addClass('scroll')
    }else {
      $('header').removeClass('show-box-shadow')
      $('.mobile-btn span').removeClass('scroll')
      $('.menu').removeClass('scroll')
      $('.menu-mobile').removeClass('scroll')  
    }
  })
})



