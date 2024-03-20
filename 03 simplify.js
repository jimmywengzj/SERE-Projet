func3("testpassword");

function func1(input) {
    str1 = '8aZ{E$+rT yU}1#2(IOP<qs,DFg.)H*Jk~L6M7]W;X%VxB:N!^-03/9[4&5|"?Kz';
    str2 = escape("Z5ZeZ8ZxZXZmZcZ5" + input + "eDer");
    output = "";
    cnt = 0;

    do {
        var a, b, c = "";
        var _3, _1, _2, _0 = "";
        a = str2.charCodeAt(cnt++);
        b = str2.charCodeAt(cnt++);
        c = str2.charCodeAt(cnt++);
        _3 = a >> 2;
        _1 = ((a & 3) << 4) | (b >> 4);
        _2 = ((b & 15) << 2) | (c >> 6);
        _0 = c & 63;
        if (isNaN(b)) { // exeeding length
            _2 = _0 = 64; // str1.charAt(64) == ''
        } else if (isNaN(c)) {
            _0 = 64;
        }
        output = output + str1.charAt(_3) + str1.charAt(_1) + str1.charAt(_2) + str1.charAt(_0);
    } while (cnt < str2.length);

    if (func2(output, 3) == func2("}8iH5:}Ypi}*VL}", 13) + "^2d2S*,~:JLESF0 ('7p(,5J'<,2prFE/W") {
        window.location.href = input + ".php";
    } else {
        console.log("MOUHAHAHAHHAHAHAHAHA");
    }
}

function func2(input1, input2) { //input2 is 11 and 1101 in binary for these two calls
    c = "";
    for (i = 0; i < input1.length; i++) {
        if (c == "ESF0 ('7p(,5J')") {
            c += String.fromCharCode(input2 ^ input1.charCodeAt(i) + 12);
        } else {
            c += String.fromCharCode(input2 ^ input1.charCodeAt(i));
        }
    }
    return c;
}

function func3(input) {
    a = Array('%5A%58', '%5A%65', '%5A%32', '%5A%35', '%5A%72', '%5A%6C', '%5A%73', '%5A%76', '%5A%69', '%5A%70', '%5A%38', '%5A%77', '%5A%66', '%5A%70', '%5A%78', '%5A%6D', '%5A%63');
    ans = '';
    c = '';
    for (i = 0; i < input.length; i++) {
        c = input.substr(i, 1);
        for (j = 0; j < a.length; j++) {
            if (unescape(a[j].substr(3, 3)) == c) {
                ans += a[j];
            }
        }
    }
    if (unescape(ans) == "Z5ZeZ8ZxZXZmZcZ5") {
        func1(input);
    } else {
        console.log('fo');
    }
}
