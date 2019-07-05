function cari() {
var kata = document.formcari.keyword.value;
var hasil = "http://www.google.com/search?q=" + kata ;
var feture = "height=500, width=750, scrollbars=yes location=yes";
window.open(hasil, 'google', feture)
}
