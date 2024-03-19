## Decode ttt.js
html has 2 script, one is visible, the other is ttt.js, which is encoded into char string. After a lot of research and trial and error, we found out it uses JScript.Encode : 
https://en.wikipedia.org/wiki/JScript.Encode
Which is reverse engineered : 
http://virtualconspiracy.com/content/articles/breaking-screnc

We used Malzilla tool to decode script. Now 2 parts of javascript can be put together. But still, the script is broken : we got errors when executing

## Clean up
Beautify the code using :
https://beautifier.io/
We tried online deobfuscaters but they didn't do a lot. So we have to do it by hand :
Rename function and variable names, simplify useless functions like parseInt(constant), remove several useless functions that does return input

## Dissect the code
maybe not useful:
evalstring = '';
function recfn0(){ return 0;}
for (i = 0; i < 100; i++) {
    n = i + 1;
    evalstring += 'function recfn' + n + '(){ return recfn' + i + '();}';
}
eval(evalstring);
eval(recfn100());
make functions recfn0() through recfn100() which all returns 0

This part : 
for (obj in this) {
    if (obj.length == 10) {
        if (obj.charCodeAt(0) == 115) {
            if (obj.charCodeAt(9) == 116) break;
        }
    }
}
just found "setTimeout" object, so func4(login.password.value) is executed 2 seconds after the page is loaded

So delta is always 2 and the globalvar is constant. we can call directly func3

in func3 first part is constant and
array a = {ZX,Ze,Z2,Z5,Zr,Zl,Zs,Zv,Zi,Zp,Z8,Zw,Zf,Zp,Zx,Zm,Zc} if unescaped 
after further inspection, we found out func3 is a check for the password: we iterate through all the character of the password, if it is one of the second character of array a, we put Z+this character to a output string. Then it checks if the output string matches "Z5ZeZ8ZxZXZmZcZ5".
Thus, we can deduce that the password has a non-continuous sub string "5e8xXmc5", and the rest of the password contains no following characters "258Xcefilmprsvwx" (in ASCII order)

After passing func3 we arrive at func1, which is basically a encoder that converts char string into a special base64 code. instead of using normal base64 sequence, it use `8aZ{E$+rT yU}1#2(IOP<qs,DFg.)H*Jk~L6M7]W;X%VxB:N!^-03/9[4&5|"?Kz` as its character table.
However, if (arguments.callee.toString().length != 1731), which means if the whole function declaration isn't the correct size, the output resets to a specific each time. The original size of the obfuscated function is 1477, which is strange. Some post mentioned that Firefox might optimize the code before calling function.toString(), but it wasn't the case here because we verified it on the old Internet Explorer. 
We still have hope because actually the overriding string is found in later comparison, so maybe it is intended.

Moving on to func2. The second param is used only in bitwize xor, with the value of 11 or 1101 in binary.The escaped string is evidently "fromCharCode", but it missed a "%". After deleting useless parts of the code, it is clear that it take all the characters of the first argument and xor it with the second argument. Except if we stumped upon "ESF0 ('7p(,5J')" we have to change a little bit. However, everything seemed to be quite useless, as it checks the length of the function as well, and all it does now is to return the same weird sting. 

Finally, if all the tests are passed, the script will redirect the page to (password).php. We have to guess that it will give us the final flag to capture, the answer of the problem. Now the whole program make more sense: the steps to check length of function might be broken during the obfuscation process, and the whole javascript code isn't meant to be executed on the web page; instead, we just need to find out a password that checks all the tests, and go directly to the php page. We can thus ignore those function length checks. 

We start working backwards:
We have to have func2(string, globalvar) == func2("}8iH5:}Ypi}*VL}", 13) + "^2d2S*,~:JLESF0 ('7p(,5J'<,2prFE/W"
which means func2(string, 3) == "p5rdEr87pT}dp'[Ap^2d2S*,~:JLESF0 ('7p(,5J'<,2prFE/W"
And since xor is reversable by simply doing another xor, we guess the string is func2("p5rdEr87pT}dp'[Ap^2d2S*,~:JLESF0 ('7p(,5J'<,2prFE/W", 3) which gave us "s6qgFq;4sW~gs$XBs]1g1P)/}9IOFPE3#+$4s+/6I$?/1sqEF,T". 

Then we need to decode it back to char string. Writing a decoder similar to the encoder does the trick, the result :
"Z5ZeZ8ZxZXZmZcZ5753dRe148axXmcD_u5eDer�"
The last character is just a special case and ignored. We immediately recognized the pattern, by truncating the head and tail, this is what is left: "753dRe148axXmcD_u5" and this string checks the first test!

Visiting http://challenge01.root-me.org/web-client/ch15/753dRe148axXmcD_u5.php gave us a blank page, but it also mean that the file is there and it's not a 404. Hence, 753dRe148axXmcD_u5 must be the password and we captured the flag!