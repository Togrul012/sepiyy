let mesafe = +prompt('Mesafeni Qeyd Edin: ')
let suret = +prompt('Suretinizi qeyd edin: ')
let vaxt = mesafe/suret

let netice =' Bakıdan Genciye Getsek ' + mesafe + ' km suret ' + suret + ' metr ' + vaxt + ' saata catariq ';

document.getElementById('suret').innerHTML = netice;