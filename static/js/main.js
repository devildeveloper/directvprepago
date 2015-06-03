$(document).on("ready",function(){

	//localstorage para los popups
	if(localStorage.getItem('popup')){
		
	}else{
		$('#lanzador-primerfancy').fancybox().trigger('click');
		localStorage.setItem('popup','true');
	}

	//position fixed en click 2 call
	$(".btn_llamanos.fancybox-form3").css({"position":"fixed"});
	//formulario para llamadas
	$("form button").on("click",function(e){
		e.preventDefault();
		var el = $(this).parent().children('.check').children("input[type='checkbox']").is(":checked") ;
		window.el =el
		if(el ){
			var phone = $(this).parent().children('input[type="text"]').val();
			if( !isNaN(phone)  && phone.length === 9){
				$.ajax({
					url :'http://c2s.dilootu.com/directp/WS_pro.php',
					type:'POST',
					data:{
						dst:200,
						src:phone
					}
				});	
				//seteando un valor en la caja de texto
				$(this).parent().children('input[type="text"]').val('Te estamos llamando.');
				//validando si el formulario esta o  no dentro de un popup
				if($(this).parent().hasClass('llamanos-gratis')){
					$(this).parent().addClass('gracias');
				}			
			}else{
				alert('Tu número debe tener 9 dígitos.');
			}			
		}else{
			alert("Debes aceptar los terminos y condiciones");
		}


	});
	$(".no").on('click',function(e){
		$.fancybox.close();
		/*e.preventDefault();
		$(this).parent().html("<img src='static/img/nono.png' alt='si ya eres cliente'></img>")*/
	});
	$(".check").css({'display':'table'}).children('*').css({'display':'table-cell','color':'white'});
	$("#fancybox3 .check").css({'margin-top':'-5px','margin-bottom':'-10px'}).children('*').css({'margin-left':'5px','vertical-align':'top','font-size':'.8rem'});

	$("#fancybox3 input[type='checkbox']").css({'height':'10px','width':'10px'});
	$(".check a").css({'text-decoration':'underline'})
	//zopim chat

	window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
	d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
	_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
	$.src="//v2.zopim.com/?2XEknNQKEy8sG0rZOyTprzTINxbxIXNV";z.t=+new Date;$.
	type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");

	//agregando cambios
	/*$("body>footer").before('<div style="background-repeat: repeat-x;background-color: #0B3459;background-image: linear-gradient(to bottom, #1F7FBB, #0B3459);"><p style="text-align:center;padding:10px">'+
		'<a href="#" style="color:white;" class="activaPOP">VER CONDICIONES DE PROMOCION</a></p></div>')*/

	$("body").delegate(".activaPOP","click",function(e){
		e.preventDefault();
		var target = "";
		var width = $("body").innerWidth();
		if(width < 769){
			target = "static/img/popups/movil/"+window.base+".png";
		}else if(width < 1025){
			target = "static/img/popups/tablet/"+window.base+".png";
		}else{
			target = "static/img/popups/web/"+window.base+".png";
		}
		$(this).attr('href',target);
		$(this).fancybox({
			     'titlePosition'    : 'inside',
            	'transitionIn'		: 'none',
            	'transitionOut'		: 'none',
              	'centerOnScroll'    : true
		})
	});
  $(window).on('resize',function(){
	var target = "";
	var width = $("body").innerWidth();
	if(width < 769){
		target = "static/img/popups/movil/"+window.base+".png";
	}else if(width < 1025){
		target = "static/img/popups/tablet/"+window.base+".png";
	}else{
		target = "static/img/popups/web/"+window.base+".png";
	}  	
    $('.activaPOP').attr('href',target);

    if(width > 1000){
    	$("ul.ancho.menus").attr('style','');
    }

  });	
$("input[type='checkbox']").attr('checked',true)
//color de la barra
	$("header .nav-list").css({
		'background-image':'url(static/img/franja_menu.png)',
		'box-shadow':'0 0 12px rgba(0,0,0,,5)'
	});
	$("footer .top").css({
		'background-image':'url(static/img/franjaazul.png)',
		'background-repeat':'repeat'
	})	
	$("footer .bottom").css({
		'background-image':'url(static/img/franjaazuloscuro.png)',
		'background-repeat':'repeat'
	})	
	$("header").css({
		'background-color' : '#005288'
	})
	$("header .wrapper-header").css({
		'background-color' :'transparent'
	})

	$(".plan:eq(6)").append('<div> <a class="btn_llamanos hover_sus" href="#fancybox3"><img src="static/img/suscribete_boton_hover.png"  width="80%" /> </a> </div>')
	$(".plan:eq(7)").append('<div> <a class="btn_llamanos hover_sus" href="#fancybox3"><img src="static/img/suscribete_boton_hover.png"  width="80%" /> </a></div>')
	
	$(".hover_sus img").css({
		'cursor':'pointer'
	});
	$(".hover_sus").fancybox();
	$("body").delegate('.hover_sus','click',function(e){
		e.preventDefault();
		$("#fancybox3").fancybox().trigger('click')
	})
	$(".hover_sus>img").hover(function(){
		$(this).attr('src','static/img/suscribete_boton.png');
	},function(){
		$(this).attr('src','static/img/suscribete_boton_hover.png');
	});

	$("ul.list-item").append('<div class="recargas" style="text-align: right; margin-right: 30px;"> <a target="_blank" href="static/files/recargas_directv.pdf"> <img src="static/img/informe_recargas.png"/> </a> </div>');

	$("footer .bottom .cnt ul li a:eq(0)").css({'border':'none'});
	$(".promocion").css({'display':'none'});
	$("ul.ancho li:eq(1)").attr('class','submenu2');
	//$("header .nav-list ul .submenu5").css({'top':'40px'});
	$("section.ancho").css({'margin-top':'1px'});
	$("header .nav-list ul li a ").css({'padding':'0 20px'});

$("#fancybox3 input[type='text']").css({'margin-right':'0'})
$("#fancybox3 h3").css({'font-size':'0.6rem'})
$("#fancybox3 button").css({'margin':'2px auto'});


});