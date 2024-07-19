/* eslint-disable no-unused-vars */
/* exported pediatricnutrition00, pediatricnutrition01, pediatricnutrition02 */
/* exported pediatricnutrition03, pediatricnutrition04, pediatricnutrition05 */
/* exported pediatricnutrition06 */

var base = '../../img/wheel/pediatricnutrition';
var Image0 = new Image(384,667);
Image0.src = base + '00.jpg';
var Image1 = new Image(384,667);
Image1.src = base + '01.jpg';
var Image2 = new Image(384,667);
Image2.src = base + '02.jpg';
var Image3 = new Image(384,667);
Image3.src = base + '03.jpg';
var Image4 = new Image(384,667);
Image4.src = base + '04.jpg';
var Image5 = new Image(384,667);
Image5.src = base + '05.jpg';
var Image6 = new Image(384,667);
Image6.src = base + '06.jpg';

var $img;

jQuery(document).ready(function() {
    var $elt = jQuery('.pediatric-nutrition-map').first();
    if ($elt) {
        $img = $elt.find('img');
        $img.attr('usemap', '#pediatricnutritionmap');
    }
});

function pediatricnutrition00() {
    $img.attr('src', Image0.src);
    return true;
}

function pediatricnutrition01() {
    $img.attr('src', Image1.src);
    return true;
}
function pediatricnutrition02() {
    $img.attr('src', Image2.src);
    return true;
}
function pediatricnutrition03() {
    $img.attr('src', Image3.src);
    return true;
}
function pediatricnutrition04() {
    $img.attr('src', Image4.src);
    return true;
}
function pediatricnutrition05() {
    $img.attr('src', Image5.src);
    return true;
}
function pediatricnutrition06() {
    $img.attr('src', Image6.src);
    return true;
}

