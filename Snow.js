/* 
*/

var isIE = false;
var ua = window.navigator.userAgent;
var old_ie = ua.indexOf('MSIE ');
var new_ie = ua.indexOf('Trident/');
if ((old_ie > -1) || (new_ie > -1)) {
    isIE = true;
}
function CheckIsIE()
{
    if (isIE) {
   alert("Unfortunately, Internet Explorer is not supported by Snow, please upgrade to a newer browser like Google Chrome.")
    }
}

function CreateSetting(sname, sval)
{
    localStorage.setItem(sname, sval);
}

function SetTabName(tname)
{
    CreateSetting("TabName", tname);
    document.title = tname;
}

function GetTabName()
{
    if(!localStorage.getItem("TabName"))
    {
        SetTabName("Snow");   
    } else {
document.title = localStorage.getItem("TabName").toString();
    }
}

function redirect(link)
{
    location.replace(link);
}