$(document).ready(function(){
    
    var menuAnt = "";


    $('.link_prog').click(function () {
        $('.link_prog').removeClass('on');
        $(this).addClass('on');
        //var dia = $(this).attr('id').replace("dia-", "");
        var dia = $(this).attr('filha');
        $('.dia').hide();
        //$('#' + dia).fadeIn();
        $('.' + dia).fadeIn();
    });


  //Navegação Menu
  $('.link-menu').click(function(){
    var menu = $(this).attr('id').replace("link-", "");
    $('.content-sub').hide();
    if (menuAnt != menu)
    {
        $('.sub').css('display', 'block');
        $('#' + menu).css('display', 'block')
        $('#' + menu).addClass('animated fadeIn')
        menuAnt = menu;
    }
    else {
        $('.sub').hide();
        menuAnt = "";
    }

  });


  //Navegação TabMenu
  $('.item-tab').click(function(){
    $('.item-tab').removeClass('ativo');
    $(this).addClass('ativo');
    var tab = $(this).attr('id').replace("tab-", "");
    $('.content-tab').hide();
    $('#'+tab).fadeIn();
  });


  // Navegação sub menu mobile
  $('.btn-nav').click(function(){

    $('#btn-voltar').css('display', 'block');
    $('#btn-fechar').css('display', 'none');

    var menu = $(this).attr('id').replace("link-", "");
    $('.menu-mobi-principal').hide();
    $('.content-sub').hide();
    $('#'+ menu).css('display', 'block')
    $('#'+ menu).addClass('animated fadeInRight');
  });


  $('#btn-voltar').click(function(){
    $(this).css('display', 'none');
    $('#btn-fechar').css('display', 'block');
    $('.content-sub').hide();
    $('.menu-mobi-principal').show();
    $('.menu-mobi-principal').addClass('animated fadeInLeft')
  });


  $('#btn-fechar').click(function(){
    $('.menu-mobi').hide();
    $('.associe-m').hide();
  });


  $('#btn-menu-m').click(function(){
    $('#encontre-na-sbd-m').hide()
    $('.menu-mobi').show();
    $('.menu-mobi-principal').show();

  });


  $('#btn-search-m').click(function(){
    $('.menu-mobi').show();
    $('.menu-mobi-principal').hide();
    $('.content-sub').hide();
    $('#encontre-na-sbd-m').css('display', 'block')
    $('#encontre-na-sbd-m').addClass('animated fadeInRight');
  });


  $('.item-tab-m').click(function(){
    $('.item-tab-m').removeClass('ativo');
    $(this).addClass('ativo');
    var tab = $(this).attr('id').replace("tab-", "");
    $('.content-tab').hide();
    $('#'+tab).fadeIn();
    $('.content-sub-m').animate( { scrollLeft: '+=' + $(this).position().left }, 300);
  });


  $('.link').click(function(){
    $('.link').removeClass('ativo');
    $(this).addClass('ativo');
    var tab = $(this).attr('id').replace("li-", "");
    $('.content-tab').hide();
    $('#'+tab).fadeIn();
    $('.tab-menu-interno-m').animate( { scrollLeft: '+=' + ($(this).position().left - 10)}, 300);
  });


  $('.t_timeline').click(function(){

      var card_time = $(this).parent();

      var content = card_time.find('.content-timeline');

      content.toggle();
      if ( content.css('display') == 'none'){
          $(this).css('background-image', 'url("../images/ico-seta-baixo.png")');
      }else{
          $(this).css('background-image', 'url("../images/ico-seta-cima.png")');
      }


  });

  $('.header-option').click(function(){

      var card_time = $(this).parent();

      var content = card_time.find('.content-option');

      content.toggle();
      if ( content.css('display') == 'none'){
          $(this).css('background-image', 'url("../images/ico-seta-baixo.png")');
      }else{
          $(this).css('background-image', 'url("../images/ico-seta-cima.png")');
      }


  });


  $('.card-acordion').click(function(){
      var info = $(this).find('.info-card-anuidades');
      info.toggle();
      console.log(info);
  });


  $('.btn-ver-mais').click(function(){
      $('#modal').toggle();
      console.log('clicou');
  });


  $('.btn-fechar').click(function(){
      $('#modal').toggle();
  });


  $('.linkted').click(function () {
      $('.linkted').removeClass('onted');
      $(this).addClass('onted');
      var tab = $(this).attr('id').replace("li-", "");
      $('.content-tab').hide();
      $('#' + tab).fadeIn();
      //$('.tab-menu-interno-m').animate({ scrollLeft: '+=' + ($(this).position().left - 10) }, 300);
  });


  $('.link-login').click(function () {
      var tab = $(this).attr('esc');
      $('.content-tab-login').hide();
      $('#' + tab).fadeIn();
  });

  $(".maskcpf").on("keyup", function (e) {
      $(this).val(
          $(this).val()
          .replace(/\D/g, '')
          .replace(/^(\d{3})(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4"));
  });


});


function esconderExibirLogin(h, s) {
    $('.' + h).hide();
    $('#' + s).fadeIn();
}

function fExibir(s) {
    $(s).fadeIn();
}

function fExibirTT(s) {
    if ($(s).attr('exi') == '0') {
        $(s).css('opacity', '100');
        $(s).css('display', 'block');
        $(s).attr('exi', '');
    } else {
        $(s).css('opacity', '100');
        $(s).css('display', 'none');
        $(s).attr('exi', '0');
    }
}


function trocarShowHide(s,h) {
    if ($(s).css('display') == 'none') {
        $(h).hide();
        $(s).show();
    }
    else {
        $(s).hide();
    }
}


function dshow(d) {
    $(d).show();
    return false;
}

function dhide(d) {
    $(d).hide();
    return false;
}


function abrirlbox(d) {
    $('#modalFundo').show();
    $(d).show();
    return false;
}

function fecharlbox(d) {
    $('#modalFundo').hide();
    $(d).hide();
    return false;
}


function validar_cos_twitter() {

    var c1 = document.getElementById('ContentPlaceHolder1_ChildContent2_chkTwitter1');
    var c2 = document.getElementById('ContentPlaceHolder1_ChildContent2_chkTwitter2');
    if ((!c1.checked) || (!c2.checked)) {
        alert('Você precisa concordar com os termos.');
        return false;
    }
    else {
        document.location = "https://api.twitter.com/oauth/authenticate?oauth_token=H8_uXwAAAAAAiSIeAAABX6QRFnY";
    }

}

function validar_cos_face() {

    var c1 = document.getElementById('ContentPlaceHolder1_ChildContent2_chkFace1');
    var c2 = document.getElementById('ContentPlaceHolder1_ChildContent2_chkFace2');
    if ((!c1.checked) || (!c2.checked)) {
        alert('Você precisa concordar com os termos.');
        return false;
    }
    else {
        document.location = "https://www.facebook.com/v2.5/dialog/oauth?client_id=745941485549411&state=eadf3eb08c1cfa5d3152a7915da6c323&response_type=code&sdk=php-sdk-5.0.0&redirect_uri=http%3A%2F%2Fwww.sbd.org.br%2FcontroleOsol%2Fdivulgue-esta-campanha%2F&scope=";
    }

}
