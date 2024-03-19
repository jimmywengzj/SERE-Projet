globalvar = 0;

evalstring = '';
function recfn0(){ return 0;}
for (i = 0; i < 100; i++) {
    n = i + 1;
    evalstring += 'function recfn' + n + '(){ return recfn' + i + '();}';
}
eval(evalstring);
eval(recfn100());

for (obj in this) {
    if (obj.length == 10) {
        if (obj.charCodeAt(0) == 115) {
            if (obj.charCodeAt(9) == 116) break;
        }
    }
}
var date1 = new Date();
seconds1 = date1['getSeconds']();
this[obj]('func4("' + login.password.value + '")', 2000);

function func1(input1, input2) {
    str1 = '8aZ{E$+rT yU}1#2(IOP<qs,DFg.)H*Jk~L6M7]W;X%VxB:N!^-03/9[4&5|"?Kz';
    str2 = escape(input2 + input1 + "eDer");
    output = "";
    var a, b, c = "";
    var _3, _1, _2, _0 = "";
    cnt = 0;
    do {
        a = str2.charCodeAt(cnt++);
        b = str2.charCodeAt(cnt++);
        c = str2.charCodeAt(cnt++);
        _3 = a >> 2;
        _1 = ((a & 3) << 4) | (b >> 4);
        _2 = ((b & 15) << 2) | (c >> 6);
        _0 = c & 63;
        if (isNaN(b)) {
            _2 = _0 = 64;
        } else if (isNaN(c)) {
            _0 = 64;
        }
        output = output + str1.charAt(_3) + str1.charAt(_1) + str1.charAt(_2) + str1.charAt(_0);
        if (arguments.callee.toString().length != 1731) {
            output = "ESF0 ('7p(:5J";
        }
        a = b = c = "";
        _3 = _1 = _2 = _0 = "";
    } while (cnt < str2.length);
    if (func2(output, globalvar) == func2("}8iH5:}Ypi}*VL}", 13) + "^2d2S*,~" + ":" + String["fr" + "om" + "C" + "harCode"](74, 76, 69, 83, 70, 48, 32, 40, 39, 55, 112, 40, 44, 53, 74, 39, 60, 44, 50, 112, 114, 70, 69, 47, 87)) {
        window.location.href = input1 + ".php";
    } else {
        alert("MOUHAHAHAHHAHAHAHAHA");
    }
}

function func2(input1, input2) {
    a = "";
    b = "";
    for (i = 0; i < 11; i++) {
        a = input1.length ^ input2;
        if (a != "") a = "";
    }
    c = a;
    b = c;
    for (i = 0; i < input1.length; i++) {
        if (c == "ESF0 ('7p(,5J')") {
            c += String[unescape("66%72%6f%6d%43%68%61%72%43%6f%64%65")](input2 ^ input1.charCodeAt(i) + 12);
        } else {
            c += String.fromCharCode(input2 ^ input1.charCodeAt(i));
        }
    }
    if (arguments.callee.toString().length != 1169) {
        c = "ESF0 ('7p(:5J";
    }
    if (b == "sfeze5825qsde8rfq--") {
        for (i = 0; i > -1; i++) {
            b = "\x6e\x6f\x6f\x62\x20\x6e\x6f\x6f\x62";
        }
    }
    return c;
}

function func3(input) {
    str1 = '37.13R53.14R65.78R37.45R51.14R53.75R90.125R101.2365R37.145R53.789R65.123R37.745R51.258R56.348R90.368R120.125R37.785R53.78R65.1R88.842R37.11R53.785R65.78R37.82R54.46R68.13R90.82R99.193R37.73R53.769R65.71R53.46';
    splited = str1.split('R');
    str2 = '';
    for (n = 0; n < splited.length; n++) {
        str2 += String["f" + "r" + "o" + "m" + "C" + "har" + "Code"](parseInt(splited[n]));
    }
    a = Array('%5A%58', '%5A%65', '%5A%32', '%5A%35', '%5A%72', '%5A%6C', '%5A%73', '%5A%76', '%5A%69', '%5A%70', '%5A%38', '%5A%77', '%5A%66', '%5A%70', '%5A%78', '%5A%6D', '%5A%63');
    str3 = String();
    str4 = '';
    for (i = 0; i < input.length; i++) {
        str4 = input.substr(i, 1);
        for (j = 0; j < a.length; j++) {
            if (unescape(a[j].substr(3, 3)) == str4) {
                str3 += a[j];
            }
            if ((a[j] << 2) == "\x00" || (a[j] << 2) == "\xBF") {
                str3 += "%5D%12";
            }
        }
    }
    if (unescape(str3) == unescape(str2)) {
        func1(input, unescape(str3));
    } else {
        alert('fo');
    }
}

function func4(aaaa) {
    date2 = new Date();
    seconds2 = date2['getSeconds']();
    delta = seconds2 - seconds1; // int
    if (delta > 2) delta = 3;
    if (delta < 0) delta = 3;
    globalvar = 1.565685956 + delta;
    func3(aaaa);
}
