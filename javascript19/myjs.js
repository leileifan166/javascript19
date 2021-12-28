var balance = 10;
var call = 0.2;
var traffic = 0.5;
var minutes = (balance - traffic*10)/call;
document.write(minutes);
document.write('<br>');
document.write("手机话费余额还可以通话" + minutes + "分钟");
document.write('<br>');

var money = 100000;
var year = 3;
var lilv = 5/100;
var all = money*lilv*year + money;
document.write(all);
document.write("还款的总额是" + all + "元");






