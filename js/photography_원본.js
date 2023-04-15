// 아규먼트가 매개변수로 받아서 내부변수로 제이쿼리 사용 외부와 충돌을 피한다.
(function($,window){

    // 섹션별 스클롩 탑값 알아보기
    const sec1ScrTop = $('#section1').offset().top; // 섹션1의 맨위에서 탑값까지 위치
    const sec2ScrTop = $('#section2').offset().top; // 섹션2의 맨위에서 탑값까지 위치
    const sec3ScrTop = $('#section3').offset().top; // 섹션3의 맨위에서 탑값까지 위치
    const sec4ScrTop = $('#section4').offset().top; // 섹션4의 맨위에서 탑값까지 위치
    const sec5ScrTop = $('#section5').offset().top; // 섹션5의 맨위에서 탑값까지 위치
    const sec6ScrTop = $('#section6').offset().top; // 섹션6의 맨위에서 탑값까지 위치
    const sec7ScrTop = $('#section7').offset().top; // 섹션7의 맨위에서 탑값까지 위치
    const sec8ScrTop = $('#section8').offset().top; // 섹션8의 맨위에서 탑값까지 위치
    const sec9ScrTop = $('#section9').offset().top; // 섹션9의 맨위에서 탑값까지 위치
    const sec10ScrTop = $('#section10').offset().top; // 섹션10의 맨위에서 탑값까지 위치
    const sec11ScrTop = $('#section11').offset().top; // 섹션11의 맨위에서 탑값까지 위치
    const sec12ScrTop = $('#section12').offset().top; // 섹션12의 맨위에서 탑값까지 위치
    const sec13ScrTop = $('#section13').offset().top; // 섹션13의 맨위에서 탑값까지 위치
    const sec14ScrTop = $('#section14').offset().top; // 섹션14의 맨위에서 탑값까지 위치
    const sec15ScrTop = $('#section15').offset().top; // 섹션15의 맨위에서 탑값까지 위치
    const footerScrTop= $('#footer').offset().top; // 섹션15의 맨위에서 탑값까지 위치


    // 헤더 /////////////////////////////////////////////////////////////////////// 
    // 1. 스크롤이벤트의 방향 위,아래 결정
    // 2. 아래(DOWN) 스크롤시 헤더영역부분이 부드럽게 위로 올라가서 안보이게 한다.
    // 3. 위(UP)     스크롤시 헤더영역부분이 부드럽게 다시 내려온다.
    // 4-1. 스크롤탑값이 0(맨위에도달하면)이면 헤더영역이 배경이 부드럽게 투명하게 변경된다.
    // 4-2  스크롤탑값이 0보다 크면 방향 결정하고 구현
    let scrNew = 0;      // 스크롤시 새로 스크롤값을 저장변수
    let scrOld = scrNew; // 이전 스크롤값을 저장 

    $(window).scroll(function(){

        // 네비게이션 버튼 첫번째 ABOUT 영역은 섹션5-100부터 ~ 섹션6미만  범위는 그리고(and && )
        if( $(window).scrollTop() > sec5ScrTop-100 && $(window).scrollTop() < sec6ScrTop-100 ){
            $('.nav-btn').eq(0).addClass('on');
        }
        else {
            $('.nav-btn').eq(0).removeClass('on');
        }

        // 네비게이션 버튼 두번째 SERVICES 영역은 섹션6-100부터 ~ 섹션7미만  범위는 그리고(and && )
        if( $(window).scrollTop() >= sec6ScrTop-100 && $(window).scrollTop() < sec8ScrTop-100 ){
            $('.nav-btn').eq(1).addClass('on');
        }
        else {
            $('.nav-btn').eq(1).removeClass('on');
        }

        // 네비게이션 버튼 세번째 PORTFOLIO 영역은 섹션8-100부터 ~ 섹션9미만  범위는 그리고(~하고)(and && )
        if( $(window).scrollTop() >= sec8ScrTop-100 && $(window).scrollTop() < sec9ScrTop-100 ){
            $('.nav-btn').eq(2).addClass('on');
        }
        else {
            $('.nav-btn').eq(2).removeClass('on');
        }


        // 네비게이션 버튼 네번째 AWARDS 영역은 섹션9-100부터 ~ 섹션10미만  범위는 그리고(~하고)(and && )
        if( $(window).scrollTop() >= sec9ScrTop-100 && $(window).scrollTop() < sec10ScrTop ){
            $('.nav-btn').eq(3).addClass('on');
        }
        else {
            $('.nav-btn').eq(3).removeClass('on');
        }


        // 네비게이션 버튼 다섯번째 BLOG 영역은 섹션10-100부터 ~ 섹션15-200  범위는 그리고(~하고)(and && )
        if( $(window).scrollTop() > sec10ScrTop-100 && $(window).scrollTop() < sec15ScrTop-160 ){
            $('.nav-btn').eq(4).addClass('on');
        }
        else {
            $('.nav-btn').eq(4).removeClass('on');
        }


        // 네비게이션 버튼 여섯번째 AWARDS 영역은 섹션15-200부터 나머지 범위
        if( $(window).scrollTop() >= sec15ScrTop-160 ){
            $('.nav-btn').eq(5).addClass('on');
        }
        else {
            $('.nav-btn').eq(5).removeClass('on');
        }



        
        // 새로운(New) 스크롤탑값
        scrNew = $(window).scrollTop();

            if( $(window).scrollTop()===0 ){  // 다중 중첩 조건문
                $('#header').removeClass('up');
                $('#header').removeClass('down');
            }
            else{ // 스크롤 탑값이 0보다 큰경우
                if( scrNew-scrOld > 0 ){
                    $('#header').addClass('down');
                    $('#header').removeClass('up');
                }
                if( scrNew-scrOld < 0 ){
                    $('#header').removeClass('down');
                    $('#header').addClass('up');
                }
            }

        // 이전(Old) 스크롤탑값
        scrOld = scrNew;
    });


















    // 섹션 1~14  ///////////////////////////////////////////////////////////////////////
    // 스크롤이벤트 :윈도우객체 
    // scroll() 메서드는 반드시 스크롤이 변경되면 발생     
    $(window).scroll(function(){
        // 스크롤탑값이 0이면 모두 초기화
        if( $(window).scrollTop()===0 ){
            $('#section2') .removeClass('on'); 
            $('#section3') .removeClass('on'); 
            $('#section4') .removeClass('on'); 
            $('#section5') .removeClass('on'); 
            $('#section6') .removeClass('on'); 
            $('#section7') .removeClass('on'); 
            $('#section8') .removeClass('on'); 
            $('#section9') .removeClass('on'); 
            $('#section10').removeClass('on');
            $('#section11').removeClass('on');
            $('#section12').removeClass('on');
            $('#section13').removeClass('on');
            $('#section14').removeClass('on');
        }

        if( $(window).scrollTop() >= sec2ScrTop-300 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section2').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec3ScrTop-300 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section3').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec4ScrTop-300 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section4').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec5ScrTop-500 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section5').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec6ScrTop-500 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section6').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec7ScrTop-500 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section7').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec8ScrTop-500 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section8').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec9ScrTop-500 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section9').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec10ScrTop-500 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section10').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec11ScrTop-500 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section11').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec12ScrTop-500 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section12').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec13ScrTop-500 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section13').addClass('on'); 
        }
        if( $(window).scrollTop() >= sec14ScrTop-500 ){
            // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
            $('#section14').addClass('on'); 
        }

    });




    // 섹션 8 셔플 갤러리 ///////////////////////////////////////////////////////////
    // 1. 갤러리 버튼 클릭 이벤트 등록한다.
    const galleryBtn = $('#section8 .gallery-btn');
    let btnIndex = 0 ;

    galleryBtn.each(function(index){
        // console.log( index ); // 버튼1 ~ 5 인덱스번호 0 1 2 3 4
        // 클릭이벤트
        $(this).click(function(e){
            e.preventDefault();
            
            btnIndex = index; // 버튼의 번호
            responseGallery();

            galleryBtn.removeClass('on');  //  5개버튼 모두 클래스가 삭제된다.
            $(this).addClass('on');  // 현재 클릭된 버튼만 클래스가 추가된다.
    
        });

    });

    ////////////////////////////////////////////////////////////////////////////



    // 반응형 웹개발 시작
    // 화면의 너비(윈도우너비 창너비)에 반응하는 반응형
    // 창너비에 반응하는 자바스크립트,제이쿼리 함수 resize()
    // $(window).resize();
    // 기본 높이의 비율
    // 이미지1,2 너비 800
    // 이미지1 높이 797
    // 이미지2 높이 1200

    // 전역변수 설정
    const imgWidth = 800;
    const imgHeight1 = 797;
    const imgHeight2 = 1200;
    const heightRate1 =  imgHeight1/imgWidth; // 이미지높이1/이미지너비
    const heightRate2 =  imgHeight2/imgWidth; // 이미지높이2/이미지너비
    const gallery = $('.gallery');

    // 반응형 그리고 버튼 클릭이벤트에 따라 줄수,칸수,이미지너비,이미지높이,전체박스 높이 반응하는 갤러리
    let winW = $(window).innerWidth(); // 창너비 가져오기
    let galleryWidth = 1180;
    let rows = 4;
    let cols = 3;    
    let imgW = $('.gallery img').innerWidth();// 이미지 너비를 가져와서 높이를 구한다. 칸의 left 결정    
    let imgH1 = imgW*heightRate1; // 이미지 높이1 다음줄에 top 값결정
    let imgH2 = imgW*heightRate2; // 이미지 높이2 다음줄에 top 값결정
    let ulH = (imgH1*2+imgH2*2)-(40*(rows-1)); // ul 박스(이미지 전체박스) 높이 
    
    // 창너비가 1140px 이하이면 
    // 갤러리 박스 너비를 창너비로 설정한다.
    // 이미지는 갤러리박스 / 3 - 40 으로 결정한다.
   

    $(window).resize(function(){
        responseGallery();
    });   

    // 버튼별 서플갤러리 포지션 ////////////////////////////////////////////////////
    // ALL 
    function responseGallery(){
        winW = $(window).innerWidth();

        // 화면 너비가 1170 초과인경우 3칸
        // 화면 너비가 600 초과인경우 2칸
        // 화면 너비가 600이하인경 초과인경우 1칸
        if(winW > 1170){
            cols=3;
        }        
        else if(winW > 600){
            cols=2;
        }
        else {
            cols=1;
        }


        if( winW <= 1170 ){
            galleryWidth = winW+40;
        }
        else{
            galleryWidth = 1180;
        }    
        imgW = galleryWidth/cols-40;
         
        // 이미지 너비 반응형 적용하기
        // 창너비가 1140px 이하이면 
        // 갤러리 박스 너비를 창너비로 설정한다.
        // 이미지는 갤러리박스 / 3 - 40 으로 결정한다.
        imgH1 = imgW*heightRate1; // 이미지 높이1 다음줄에 top 값결정
        imgH2 = imgW*heightRate2; // 이미지 높이2 다음줄에 top 값결정
        // 이미지 너비
        $('.gallery img').css({width:imgW });



        // 이미지 너비
        $('.gallery img').css({width:imgW});
        $('.list').removeClass('on');
        if (btnIndex === 0) {

            // 줌 효과
            $('.list').removeClass('on');

            if (cols === 3) {
                $('.list1').stop().show().animate({top:(imgH1+40)*0,left:0},300); //ctrl shift h => 한번에 ,300넣기(replace all)
                $('.list2').stop().show().animate({top:(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                $('.list3').stop().show().animate({top:(imgH1+40)*0,left:(imgW*2)+(40*2)},300);

                $('.list4').stop().show().animate({top:(imgH1+40),left:(imgW*0)+(40*0)},300);
                $('.list5').stop().show().animate({top:(imgH2+40),left:(imgW*1)+(40*1)},300);
                $('.list6').stop().show().animate({top:(imgH1+40),left:(imgW*2)+(40*2)},300);

                $('.list7').stop().show().animate({top:(imgH1+40+imgH2+40),left:(imgW*0)+(40*0)},300);
                $('.list8').stop().show().animate({top:(imgH2+40+imgH1+40),left:(imgW*1)+(40*1)},300);
                $('.list9').stop().show().animate({top:(imgH1+40+imgH2+40),left:(imgW*2)+(40*2)},300);

                $('.list10').stop().show().animate({top:(imgH1+40+imgH2+40+imgH1+40),left:(imgW*0)+(40*0)},300);
                $('.list11').stop().show().animate({top:(imgH2+40+imgH1+40+imgH2+40),left:(imgW*1)+(40*1)},300);
                $('.list12').stop().show().animate({top:(imgH1+40+imgH2+40+imgH1+40),left:(imgW*2)+(40*2)},300);

                rows = 4; 
                ulH = ((imgH1*2)+(imgH2*2))+(40*(rows - 1));
            } else if (cols === 2) {
                $('.list1').stop().show().animate({top:(imgH1+40)*0,left:0},300); 
                $('.list2').stop().show().animate({top:(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                
                $('.list3').stop().show().animate({top:(imgH1+40)*1,left:(imgW*0)+(40*0)},300);
                $('.list4').stop().show().animate({top:(imgH2+40)*1,left:(imgW*1)+(40*1)},300);
                
                $('.list6').stop().show().animate({top:(imgH1+40)*2,left:(imgW*0)+(40*0)},300);
                $('.list5').stop().show().animate({top:(imgH2+40)*2,left:(imgW*1)+(40*1)},300);

                $('.list7').stop().show().animate({top:((imgH1+40)*2)+((imgH2+40)*1),left:(imgW*0)+(40*0)},300);
                $('.list8').stop().show().animate({top:((imgH2+40)*2)+((imgH1+40)*1),left:(imgW*1)+(40*1)},300);
                
                $('.list9').stop().show().animate({top:((imgH1+40)*3)+((imgH2+40)*1),left:(imgW*0)+(40*0)},300);
                $('.list10').stop().show().animate({top:((imgH2+40)*3)+((imgH1+40)*1),left:(imgW*1)+(40*1)},300);
                
                $('.list12').stop().show().animate({top:((imgH1+40)*4)+((imgH2+40)*1),left:(imgW*0)+(40*0)},300);
                $('.list11').stop().show().animate({top:((imgH2+40)*4)+((imgH1+40)*1),left:(imgW*1)+(40*1)},300);

                rows = 6; 
                ulH = ((imgH1*2)+(imgH2*4))+(40*(rows - 1));
            } else {
                $('.list1').stop().show().animate({top:((imgH1+40)*0)+((imgH2+40)*0),left:0},300); 
                $('.list2').stop().show().animate({top:((imgH1+40)*1)+((imgH2+40)*0),left:0},300);             
                $('.list3').stop().show().animate({top:((imgH1+40)*1)+((imgH2+40)*1),left:0},300);
                $('.list4').stop().show().animate({top:((imgH1+40)*2)+((imgH2+40)*1),left:0},300);
                $('.list6').stop().show().animate({top:((imgH1+40)*2)+((imgH2+40)*2),left:0},300);
                $('.list5').stop().show().animate({top:((imgH1+40)*2)+((imgH2+40)*3),left:0},300);
                $('.list7').stop().show().animate({top:((imgH1+40)*3)+((imgH2+40)*3),left:0},300);
                $('.list8').stop().show().animate({top:((imgH1+40)*4)+((imgH2+40)*3),left:0},300);               
                $('.list9').stop().show().animate({top:((imgH1+40)*4)+((imgH2+40)*4),left:0},300);
                $('.list10').stop().show().animate({top:((imgH1+40)*5)+((imgH2+40)*4),left:0},300);                
                $('.list12').stop().show().animate({top:((imgH1+40)*5)+((imgH2+40)*5),left:0},300);
                $('.list11').stop().show().animate({top:((imgH1+40)*5)+((imgH2+40)*6),left:0},300);

                rows = 12; 
                ulH = ((imgH1*6)+(imgH2*6))+(40*(rows - 1));
            }

            // 줌인 효과
            $('.list').addClass('on');
            // ul 높이 설정
            $('.gallery ul').stop().animate({height:ulH},300);

        } else if (btnIndex === 1) {
            // 줌 효과
            // 줌 효과
            $('.list').removeClass('on');


            $('.list1').hide(); //hide가 등장했기때문에 모든 버튼에 show를 해줘야함(btn1fn도)
            $('.list3').hide();
            $('.list7').hide();
        
            switch(cols) {
                case 3:
                    $('.list2').stop().show().animate({top:0,left:(imgW*0)+(40*0)},300);
                    $('.list4').stop().show().animate({top:0,left:(imgW*1)+(40*1)},300);
                    $('.list6').stop().show().animate({top:0,left:(imgW*2)+(40*2)},300);
                
                    $('.list5').stop().show().animate({top:(imgH2+40),left:(imgW*0)+(40*0)},300);
                    $('.list8').stop().show().animate({top:(imgH2+40),left:(imgW*1)+(40*1)},300);
                    $('.list9').stop().show().animate({top:(imgH2+40),left:(imgW*2)+(40*2)},300);

                    $('.list10').stop().show().animate({top:(imgH2+40+imgH1+40),left:(imgW*0)+(40*0)},300);
                    $('.list11').stop().show().animate({top:(imgH2+40+imgH2+40),left:(imgW*1)+(40*1)},300);
                    $('.list12').stop().show().animate({top:(imgH2+40+imgH1+40),left:(imgW*2)+(40*2)},300);

                    rows = 3; 
                    ulH = (imgH1*1) +(imgH2*2)+(40*(rows - 1));
                    break;
                case 2:
                    $('.list2').stop().show().animate({top:(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                    $('.list4') .stop().show().animate({top:(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                    
                    $('.list5') .stop().show().animate({top:(imgH2+40)*1,left:(imgW*0)+(40*0)},300);           
                    $('.list6') .stop().show().animate({top:(imgH2+40)*1,left:(imgW*1)+(40*1)},300);
                    
                    $('.list8') .stop().show().animate({top:((imgH2+40)*1)+((imgH1+40)*1),left:(imgW*0)+(40*0)},300);
                    $('.list9') .stop().show().animate({top:((imgH2+40)*2)+((imgH1+40)*0),left:(imgW*1)+(40*1)},300);
                    
                    $('.list10').stop().show().animate({top:((imgH2+40)*2)+((imgH1+40)*1),left:(imgW*0)+(40*0)},300);
                    $('.list11').stop().show().animate({top:((imgH2+40)*2)+((imgH1+40)*1),left:(imgW*1)+(40*1)},300);
                    
                    $('.list12').stop().show().animate({top:((imgH2+40)*2)+((imgH1+40)*2),left:(imgW*1)+(40*1)},300);

                    rows = 5; 
                    ulH = (imgH1*2)+(imgH2*3)+(40*(rows - 1));
                    break;
                default:
                    $('.list2') .stop().show().animate({top:(imgH2+40)*0,left:0},300);
                    $('.list4') .stop().show().animate({top:(imgH2+40)*1,left:0},300);                   
                    $('.list6') .stop().show().animate({top:(imgH2+40)*2,left:0},300);           
                    $('.list5') .stop().show().animate({top:(imgH2+40)*3,left:0},300);                    
                    $('.list8') .stop().show().animate({top:(imgH2+40)*3+(imgH1+40)*1,left:0},300);
                    $('.list9') .stop().show().animate({top:(imgH2+40)*4+(imgH1+40)*1,left:0},300);                    
                    $('.list10').stop().show().animate({top:(imgH2+40)*4+(imgH1+40)*2,left:0},300);
                    $('.list11').stop().show().animate({top:(imgH2+40)*5+(imgH1+40)*2,left:0},300);                 
                    $('.list12').stop().show().animate({top:(imgH2+40)*5+(imgH1+40)*3,left:0},300);

                    rows = 9; 
                    ulH = (imgH1*3)+(imgH2*6)+(40*(rows - 1));
            }

            // 줌인 효과
            $('.list').addClass('on');
            // ul 높이 설정
            $('.gallery ul').stop().animate({height:ulH},300);

        } else if (btnIndex === 2) {
            // 줌 효과
            $('.list').removeClass('on');

            $('.list1').hide();
            $('.list4').hide();
            $('.list5').hide();
            $('.list10').hide();
            $('.list11').hide();

            switch(cols) {
                case 3:
                    $('.list2').stop().show().animate({top:0,left:(imgW*0)+(40*0)},300);
                    $('.list3').stop().show().animate({top:0,left:(imgW*1)+(40*1)},300);
                    $('.list6').stop().show().animate({top:0,left:(imgW*2)+(40*2)},300);
                    
                    $('.list8').stop().show().animate({top:(imgH2+40),left:(imgW*0)+(40*0)},300);
                    $('.list7').stop().show().animate({top:(imgH1+40),left:(imgW*1)+(40*1)},300);
                    $('.list9').stop().show().animate({top:(imgH2+40),left:(imgW*2)+(40*2)},300);

                    $('.list12').stop().show().animate({top:(imgH1+40+imgH1+40),left:(imgW*1)+(40*1)},300);

                    rows = 3; 
                    ulH = ((imgH1*2)+(imgH2*1))+(40*(rows - 1));
                    break;
                case 2:
                    $('.list2') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                    $('.list3') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                    
                    $('.list6') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*1,left:(imgW*0)+(40*0)},300);                   
                    $('.list8') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                    
                    $('.list7') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*2,left:(imgW*0)+(40*0)},300);
                    $('.list9') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*1,left:(imgW*1)+(40*1)},300);

                    $('.list12').stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*1,left:(imgW*1)+(40*1)},300);

                    rows = 4; 
                    ulH = (imgH1*2)+(imgH2*2)+(40*(rows - 1));
                    break;
                default:
                    $('.list2') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                    $('.list3') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*1,left:(imgW*0)+(40*0)},300);                   
                    $('.list6') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*1,left:(imgW*0)+(40*0)},300);                   
                    $('.list8') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*2,left:(imgW*0)+(40*0)},300);                   
                    $('.list7') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*3,left:(imgW*0)+(40*0)},300);
                    $('.list9') .stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*3,left:(imgW*0)+(40*0)},300);
                    $('.list12').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*3,left:(imgW*0)+(40*0)},300);

                    rows = 7; 
                    ulH = (imgH1*3)+(imgH2*4)+(40*(rows - 1));
            }
        
            // 줌인 효과
            $('.list').addClass('on');
            // ul 높이 설정
            $('.gallery ul').stop().animate({height:ulH},300);
        } else if (btnIndex === 3) {
            // 줌 효과
            $('.list').removeClass('on');

            $('.list2').hide();
            $('.list4').hide();
            $('.list6').hide();
            $('.list7').hide();
            $('.list9').hide();
        
            switch(cols) {
                case 3:
                    $('.list1') .stop().show().animate({top:0,left:(imgW*0)+(40*0)},300);
                    $('.list3') .stop().show().animate({top:0,left:(imgW*1)+(40*1)},300);
                    $('.list5') .stop().show().animate({top:0,left:(imgW*2)+(40*2)},300);
                    
                    $('.list8') .stop().show().animate({top:(imgH1+40),left:(imgW*0)+(40*0)},300);
                    $('.list10').stop().show().animate({top:(imgH1+40),left:(imgW*1)+(40*1)},300);
                    $('.list12').stop().show().animate({top:(imgH1+40),left:(imgW*2)+(40*2)},300);

                    $('.list11').stop().show().animate({top:(imgH1+40+imgH2+40),left:(imgW*0)+(40*0)},300);

                    rows = 3; 
                    ulH = ((imgH1*2)+(imgH2*1))+(40*(rows - 1));
                    break;
                case 2:
                    $('.list1') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                    $('.list3') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                   
                    $('.list5') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);     
                    $('.list8') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                    
                    $('.list10').stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                    $('.list12').stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*1,left:(imgW*1)+(40*1)},300);
                    
                    $('.list11').stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*1,left:(imgW*0)+(40*0)},300);

                    rows = 4; 
                    ulH = ((imgH1*3)+(imgH2*1))+(40*(rows - 1));
                    break;
                default:
                    $('.list1') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:0},300);
                    $('.list3') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:0},300);       
                    $('.list5') .stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*0,left:0},300);     
                    $('.list8') .stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*0,left:0},300);                   
                    $('.list10').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*1,left:0},300);
                    $('.list12').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*2,left:0},300);                
                    $('.list11').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*3,left:0},300);

                    rows = 7; 
                    ulH = ((imgH1*4)+(imgH2*3))+(40*(rows - 1));
            }

            // 줌인 효과
            $('.list').addClass('on');
            // ul 높이 설정
            $('.gallery ul').stop().animate({height:ulH},300);
        } else if (btnIndex === 4) {
            // 줌 효과
            $('.list').removeClass('on');

            $('.list2').hide();
            $('.list3').hide();
            $('.list6').hide();
            $('.list9').hide();
        
            switch(cols) {
                case 3:
                    $('.list1') .stop().show().animate({top:0,left:(imgW*0)+(40*0)},300);
                    $('.list4') .stop().show().animate({top:0,left:(imgW*1)+(40*1)},300);
                    $('.list5') .stop().show().animate({top:0,left:(imgW*2)+(40*2)},300);
                    
                    $('.list7') .stop().show().animate({top:(imgH1+40),left:(imgW*0)+(40*0)},300);
                    $('.list10').stop().show().animate({top:(imgH2+40),left:(imgW*1)+(40*1)},300);
                    $('.list8') .stop().show().animate({top:(imgH1+40),left:(imgW*2)+(40*2)},300);

                    $('.list12').stop().show().animate({top:(imgH1+40+imgH1+40),left:(imgW*0)+(40*0)},300);
                    $('.list11').stop().show().animate({top:(imgH1+40+imgH2+40),left:(imgW*2)+(40*2)},300);

                    rows = 3; 
                    ulH = ((imgH1*2)+(imgH2*1))+(40*(rows - 1));
                    break;
                case 2:
                    $('.list1') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                    $('.list4') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                    
                    $('.list5') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                    $('.list7') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*1,left:(imgW*1)+(40*1)},300);
                    
                    $('.list10').stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                    $('.list8') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*1,left:(imgW*1)+(40*1)},300);
                    
                    $('.list12').stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*1,left:(imgW*0)+(40*0)},300);
                    $('.list11').stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*2,left:(imgW*1)+(40*1)},300);

                    rows = 4; 
                    ulH = ((imgH1*2)+(imgH2*2))+(40*(rows - 1));
                    break;
                default:
                    $('.list1') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:0},300);
                    $('.list4') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:0},300);
                    $('.list5') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*1,left:0},300);
                    $('.list7') .stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*1,left:0},300);
                    $('.list10').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*1,left:0},300);
                    $('.list8') .stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*2,left:0},300);
                    $('.list12').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*3,left:0},300);
                    $('.list11').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*4,left:0},300);

                    rows = 8; 
                    ulH = ((imgH1*4)+(imgH2*4))+(40*(rows - 1));
            }

            // 줌인 효과
            $('.list').addClass('on');
            // ul 높이 설정
            $('.gallery ul').stop().animate({height:ulH},300);
        }


        

    }   
    responseGallery();  // 초기 실행 함수



   




})(jQuery,window);