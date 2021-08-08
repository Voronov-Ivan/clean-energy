import {
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

export function do_calc(angle, azimuth, region, module, place, power, /*graf_type,*/ ploshhad) {

    var pr = 0.98;

    var i,
        ploshhad_stancii = 0,
        vyrabotka_god = 0,
        m = [],
        pryamaya_pereschet = [],
        summa = [],
        moshhnost_uchetom_temperatury = [],
        sutochnaya_generaciya = [],
        mesyachnaya_generaciya = [],
        vyrabotka_stancii = [],
        out = '';

    if (typeof ploshhad != "undefined" && ploshhad) {

        power = ploshhad * tip_modulej_kbt_m2[module] / place_install[place];
        ploshhad_stancii = ploshhad;
    } else {
        ploshhad_stancii = power / tip_modulej_kbt_m2[module] * place_install[place];
    }

    for (i = 0; i < 12; i++) {

        m[i] = Math.max(Math.cos(ugol_vozvysheniya[region][i]) * Math.sin(angle) * Math.cos(azimuth - azimutalnyj_ugol_solnca[region][i]) + Math.sin(ugol_vozvysheniya[region][i]) * Math.cos(angle));

        pryamaya_pereschet[i] = m[i] * pryamaya_na_gorizont[region][i];

        summa[i] = pryamaya_pereschet[i] + rasseyannaya[region][i];


        moshhnost_uchetom_temperatury[i] = (tip_modulej[module] / 100 * power) * (temperatura_yachejki[region][i] - 25) + power;

        sutochnaya_generaciya[i] = summa[i] * moshhnost_uchetom_temperatury[i] / 1000;

        mesyachnaya_generaciya[i] = days_num[i] * sutochnaya_generaciya[i];

        vyrabotka_stancii[i] = mesyachnaya_generaciya[i] * pr;

        vyrabotka_god += vyrabotka_stancii[i];
    }

    return vyrabotka_god;

}

export function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}


var obl;