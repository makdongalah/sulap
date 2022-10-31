var link1 = 'picture5';
var link2 = '_.jpg';
var link3 = 'ASIN1';
var link4 = '-click1';
var link5 = 'ASIN2';
var link6 = '-click2';
var baru1 = '<div style="text-align:center;"><img src="http://ecx.images-amazon.com/images/I/';
var baru2 = '_.jpg"/></center></div><br />';
var baru3 = '<a href="https://movieright.us/" rel="nofollow" target="_blank">';
var baru4 = '<b>Check Latest Price</b></a>';
var baru5 = '<a href="https://movieright.us/" rel="nofollow" target="_blank">';
var baru6 = '<div style="text-align:center;"><img width="170" height="70" border="0" src="https://4.bp.blogspot.com/-BUgsmdtI9qw/UBDsSp787kI/AAAAAAAAAEs/57EfkJtHvRw/s1600/8fCpt.gif"/></center></a></div>';
function updateme()
{
var text = document.getElementsByTagName('body')[0].innerHTML;
text = replaceAll(text,link1,baru1);
text = replaceAll(text,link2,baru2);
text = replaceAll(text,link3,baru3);
text = replaceAll(text,link4,baru4);
text = replaceAll(text,link5,baru5);
text = replaceAll(text,link6,baru6);
document.getElementsByTagName('body')[0].innerHTML = text;
}
function replaceAll(txt, replace, with_this) {
return txt.replace(new RegExp(replace, 'g'),with_this);

}
window.setTimeout(updateme,2000);
