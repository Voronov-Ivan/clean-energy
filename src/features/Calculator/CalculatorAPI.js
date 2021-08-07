import 
{ 
    regions,
    ugol_vozvysheniya,
    azimutalnyj_ugol_solnca,
    pryamaya_na_gorizont,
    rasseyannaya,
    temperatura_yachejki,
    tip_modulej,
    tip_modulej_kbt_m2,
    place_install,
    days_num,
    month
} 
from "./Constants";
// $(document).ready(function() {

var chart;

export function do_calc( angle, azimuth, region, module, place, power, /*graf_type,*/ ploshhad ) {

    var pr = 0.98;

    var i, 
    ploshhad_stancii = 0, 
    vyrabotka_god = 0,/*bars = [],*/ 
    m = [], 
    pryamaya_pereschet = [], 
    summa = [], 
    moshhnost_uchetom_temperatury = [],
    sutochnaya_generaciya = [],
    mesyachnaya_generaciya = [], 
    vyrabotka_stancii= [], 
    out = '';

    if ( typeof ploshhad != "undefined" && ploshhad ) {

        power = ploshhad * tip_modulej_kbt_m2[module] / place_install[place];
        ploshhad_stancii = ploshhad;
        // $( '#power' ).val(  power.toFixed(2) );
        console.log("if",ploshhad_stancii);
        console.log("if",power);
    }
    else {
        ploshhad_stancii = power / tip_modulej_kbt_m2[module]  * place_install[place];
        // $( '#sqv' ).val( ploshhad_stancii.toFixed(2) );
        console.log("else",ploshhad_stancii);
        console.log("else",power);
    }

    for ( i = 0; i < 12; i++ ) {

        m[i] = Math.max( Math.cos( ugol_vozvysheniya[region][i] ) * Math.sin( angle ) * Math.cos( azimuth - azimutalnyj_ugol_solnca[region][i] ) +  Math.sin( ugol_vozvysheniya[region][i] ) * Math.cos( angle ) );

        pryamaya_pereschet[i] = m[i] * pryamaya_na_gorizont[region][i];

        summa[i] = pryamaya_pereschet[i] + rasseyannaya[region][i];

        temperatura_yachejki[region][i] += 0.035;

        moshhnost_uchetom_temperatury[i] = ( tip_modulej[module] / 100 * power ) * ( temperatura_yachejki[region][i] - 25 ) + power;

        sutochnaya_generaciya[i] = summa[i] * moshhnost_uchetom_temperatury[i] / 1000;

        mesyachnaya_generaciya[i] = days_num[i] * sutochnaya_generaciya[i];

        vyrabotka_stancii[i] = mesyachnaya_generaciya[i] * pr;

        vyrabotka_god += vyrabotka_stancii[i];

        // if ( graf_type == 'days' ) {

        //     bars[i] =
        //     {
        //         country: (i+1), //month[0][i],
        //         visits: sutochnaya_generaciya[i].toFixed(2)
        //     };
        // }
        // else {

        //     bars[i] =
        //     {
        //         country: (i+1), // month[0][i],
        //         visits: vyrabotka_stancii[i].toFixed(2)
        //     };
        // }
    }

    // $( '#yearproduction' ).val( vyrabotka_god.toFixed(2) );
    return vyrabotka_god;

    //ploshhad_stancii = power / tip_modulej_kbt_m2[module]  * place_install[place];
    //var power_stancii = ploshhad * tip_modulej_kbt_m2[module] / place_install[place];

    //$( '#sqv' ).val( ploshhad_stancii.toFixed(2) );

    // chart = AmCharts.makeChart("chartdiv", {
    //     "type": "serial",
    //     "theme": "light",
    //     "dataProvider": bars,
    //     "valueAxes": [{
    //         "unit": "кВт*ч",
    //         "gridColor": "#FFFFFF",
    //         "gridAlpha": 0.2,
    //         "dashLength": 0,
    //         "title": "кВт*ч"
    //     }],
    //     "gridAboveGraphs": true,
    //     "startDuration": 1,
    //     "graphs": [{
    //         "balloonText": "<strong>[[value]]</strong> кВт*ч",
    //         "fillAlphas": 0.8,
    //         "lineAlpha": 0.2,
    //         "type": "column",
    //         "valueField": "visits"
    //     }],
    //     "chartCursor": {
    //         "categoryBalloonEnabled": false,
    //         "cursorAlpha": 0,
    //         "zoomable": false
    //     },
    //     "categoryField": "country",
    //     "categoryAxis": {
    //         "gridPosition": "start",
    //         "gridAlpha": 0,
    //         "tickPosition": "start",
    //         "tickLength": 20
    //     },
    //     "export": {
    //         "enabled": true,
    //         "menu": []
    //     }
    // });

}

export function degrees_to_radians( degrees ) {
    var pi = Math.PI;
    return degrees * (pi/180);
}

// function do_calc_( ) {

//     if ( calc_by == 'sqv' )
//         ploshhad = $( '#sqv' ).val();
//     else
//         ploshhad = '';
//     //angle, azimuth, region, module, place, power, graf_type, ploshhad
//     // do_calc(
//     //         degrees_to_radians( parseInt( $('#ugol').html() ) ) ,
//     //         degrees_to_radians( ( 180 + parseInt( $('#azimut').html() ) ) ),
//     //         obl, //$('#tips').html(),region
//     //         $('#module').val(),
//     //         $('#place').val(),
//     //         parseInt( $('#power').val(), 10 ),
//     //         // $('#graf_type').val(),
//     //         ploshhad
//     // );
// }

// var dlina = parseInt($(window).width()/2);

// $('.map').animate( { scrollLeft: '+='+dlina }, 1000);

// $(window).resize(function() {
//     dlina = parseInt($(window).width()/2);
//     // $('.map').animate( { scrollLeft: '+='+dlina }, 1000);
// });

var obl;

//переключаем области на карте
// $('area').click(function(){
//     var name = this.title;

//     // $('#tips').html(name);
//     // $('#tips').css('display','block');

//     // obl = $(this).attr('href');

//     do_calc_();

//     return false;
// });

//обрабатываем кнопки МИНУС
// $('#azimutminus, #ugolminus').click(function(){

//     var ids = this.id;
//     ids = ids.replace(/minus/gi, '');

//     var nowvalue = parseInt($('#'+ids).html())-5;

//     if (nowvalue<-90 && ids=='azimut') nowvalue=-90;
//     if (nowvalue>90 && ids=='azimut') nowvalue = 90;

//     if(nowvalue<0 && ids=='ugol') nowvalue=0;

//     $('#'+ids).html(nowvalue);

//     if(ids=='azimut') $('.'+ids+' div').css('transform','rotate('+nowvalue+'deg)'); //поворачиваем рисунок по азимуту
//     if(ids=='ugol') {
//         $('.'+ids+' div').css('transform','rotate(-'+nowvalue+'deg)'); //поворачиваем рисунок на нужный угол.
//         $('.'+ids+' div').css('margin-left','-'+(nowvalue/3)+'px'); //сдвигаем влево
//     }

//     do_calc_();
// });

// //обрабатываем кнопки ПЛЮС
// $('#azimutplus, #ugolplus').click(function(){

//     var ids = this.id;
//     ids = ids.replace(/plus/gi, '');

//     var nowvalue = parseInt($('#'+ids).html())+5;

//     //if(nowvalue>270 && ids=='azimut') nowvalue=270;
//     if (nowvalue>90 && ids=='azimut') nowvalue = 90;

//     if(nowvalue>90 && ids=='ugol') nowvalue=90;
//     $('#'+ids).html(nowvalue);

//     if(ids=='azimut') $('.'+ids+' div').css('transform','rotate('+nowvalue+'deg)');
//     if(ids=='ugol') {
//         $('.'+ids+' div').css('transform','rotate(-'+nowvalue+'deg)'); //поворачиваем рисунок на нужный угол.
//         $('.'+ids+' div').css('margin-left','-'+(nowvalue/3)+'px'); //сдвигаем влево
//     }

//     do_calc_();

// });

// var calc_by = 'power';

// $( '#place, #module, #power, #sqv, #graf_type' ).on( 'change', function () {

//     switch ( $( this ).attr( 'id' ) )
//     {
//         case 'sqv':

//             calc_by = 'sqv';
//             break;

//         case 'power':

//             calc_by = 'power';
//             break;
//     }

//     do_calc_();

// });

// //$('.reno').maphilight();


// $( '#m' ).vectorMap(
//         {
//             map: 'ukraine',
//             backgroundColor: '',
//             borderColor: '#000000',
//             borderOpacity: 0.60,
//             borderWidth: 2,
//             color: '#FFFFFF',
//             hoverColor: '#F4E436',
//             selectedColor: '#F8A13A',

//             onRegionClick: function (element, code, region) {

//                 $('#tips').html( region );
//                 $('#tips').css( 'display', 'block' );

//                 obl = regions[code];

//                 do_calc_();

//                 return false;
                
//             }
//         }
// );


//     $( '#jqvmap1_9' ).trigger( 'click' );



// do_calc_();

// $( '#send' ).on( 'click', function () {

//     var form = $( this ).closest( "form" );

//     form.validate({

//         rules:
//         {
//             'email': { required:true, email: true },
//             //'name': { required: true },
//             'phone': { required:true, phoneno: true }
//         },
//         messages: {
//             'email': { required: 'Поле email обязательное', phoneno: "Неверный email"},
//             //'name': { required: 'Поле Имя обязательное' },
//             'phone': { required: 'Поле Телефон обязательное', phoneno: "Неверный номер телефона. Правильный формат: +38 (555) 555-55-55"}
//         },
//         errorPlacement: function( error, element ) {
//             //element.after( error );
//         }
//     });

//     if ( form.valid() ) {


//         $( '#send' ).hide();
//         $( '#btn_box' ).html( '<img src="https://rentechno.ua/calc/loading.gif">' );

//         chart["export"].capture({}, function() {

//             this.toPNG({}, function( base64 ) {

//                 $.post( "/do-ajax", {

//                             azimut: parseInt( $('#azimut').html() ),
//                             ugol: parseInt( $('#ugol').html() ),
//                             region: $('#tips').html(),
//                             module: $('#module').val(),
//                             place: $('#place').val(),
//                             power: parseInt( $('#power').val(), 10 ),
//                             graf_type: $('#graf_type').val(),
//                             graf: base64,
//                             sqv: $('#sqv').val(),
//                             yearproduction: $('#yearproduction').val(),
//                             phone: $('#phone').val(),
//                             email: $('#email').val(),
//                             interesno: $('#interesno').is(':checked') ? 'да' : 'нет',
//                             l: lan
//                         },
//                         function (out) {
//                             setTimeout( function(){
//                                 $( '#btn_box' ).html('Расчет успешно отправлен по указанному E-mail');
//                             }, 2000 );

//                             setTimeout( function(){
//                                 $( '#btn_box' ).html('');
//                                 $( '#send' ).show();
//                             }, 6000 );

//                         }
//                 );

//             });
//         });
//     }

// });

// });
