function func1_decode() {
    str1 = '8aZ{E$+rT yU}1#2(IOP<qs,DFg.)H*Jk~L6M7]W;X%VxB:N!^-03/9[4&5|"?Kz';
    func1_output = "s6qgFq;4sW~gs$XBs]1g1P)/}9IOFPE3#+$4s+/6I$?/1sqEF,T";
    text = "";
    cnt = 0;

    do {
        var a, b, c = "";
        var code1, code2, code3, code4 = "";

        code1 = str1.indexOf(func1_output.charAt(cnt++));
        code2 = str1.indexOf(func1_output.charAt(cnt++));
        code3 = str1.indexOf(func1_output.charAt(cnt++));
        code4 = str1.indexOf(func1_output.charAt(cnt++));

        a = (code1 << 2) | (code2 >> 4);
        b = ((code2 & 15) << 4) | (code3 >> 2);
        c = ((code3 & 3) << 6) | code4;

        // if (isNaN(code2)) {
        //     b = c = 0;
        // } else if (isNaN(c)) {
        //     code4 = 0;
        // }
        text += String.fromCharCode(a) + String.fromCharCode(b) + String.fromCharCode(c);
    } while (cnt < func1_output.length);

    console.log(text);
}
