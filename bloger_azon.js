var link1 = 'ASIN1';
var link2 = ' in  picture1';
var link3 = '_.jpg';
var link4 = '-click1';
var link5 = '-click2';
var baru1 = '<a href="https://channelmovie.info/" rel="nofollow" target="_blank">';
var baru2 = '<img src="http://ecx.images-amazon.com/images/I/';
var baru3 = '_.jpg"/></a><br />';
var baru4 = '<b>Check Latest Price</b></a>';
var baru5 = '<div style="text-align:center;"><img width="170" height="70" border="0" src="https://4.bp.blogspot.com/-BUgsmdtI9qw/UBDsSp787kI/AAAAAAAAAEs/57EfkJtHvRw/s1600/8fCpt.gif"/></center></a></div>';
function updateme()
{
var text = document.getElementsByTagName('body')[0].innerHTML;
text = replaceAll(text,link1,baru1);
text = replaceAll(text,link2,baru2);
text = replaceAll(text,link3,baru3);
text = replaceAll(text,link4,baru4);
text = replaceAll(text,link5,baru5);
document.getElementsByTagName('body')[0].innerHTML = text;
}
function replaceAll(txt, replace, with_this) {
return txt.replace(new RegExp(replace, 'g'),with_this);

}
window.setTimeout(updateme,2000);
