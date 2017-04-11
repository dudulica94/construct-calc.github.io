function MyCalc2(){
    
    var Lung = document.getElementById('Lung').value;
    var Lat = document.getElementById('Lat').value;
    var H = document.getElementById('H').value;
    
    var contrezult = document.getElementById('contain-rezult');
    contrezult.style.display="block";
    
            var Lung1 = (Lung/1000);
            var Lat1 = (Lat/1000);
            var H1 = (H/1000);
    
    var A = (Lung1 * Lat1 * H1);
    rezcantbeton.innerHTML=A;
    /*CANTITATEA*/
    var B = (Lung1*Lat1);
    rezamprenta.innerHTML=B;
    /*AMPRENTA*/
    var C = (Lung1/0.15);
    var C1 = (Math.ceil(C));
    var C2 = (C1*(Lat1+1));
    var D = (Lat1/0.15);
    var D1 = (Math.ceil(D));
    var D2 = (D1*(Lung1+1));
    var E = ((C2+D2)*2);
    var E1 = (E/6);
    var E2 = (Math.ceil(E1));
    rezvergi.innerHTML=E2;
    var E3 = (E2*6);
    rezmetrvergi.innerHTML=E3;
    var E4 = (E2*5.328);
    var E5 = E4.toFixed(2);
    rezkgvergi.innerHTML=E5;
    /*ARMATURA 12*/
    var F = (C1*D1);
    var F1 = (F*H1);
    var F2 = (Math.ceil(F1));
    var F3 = (F2/6);
    rezvergi6.innerHTML=F3;
    var F4 = (F3*6);
    rezmetrvergi6.innerHTML=F4;
    var F5 = (F3*1.332);
    var F6 = F5.toFixed(2);
    rezkgvergi6.innerHTML=F6;
    /*ARMATURA 6*/
    var G = (((Lung1*2)+(Lat1*2))*H1);
    rezcofraje.innerHTML=G;
    var G1 = (G/1.2);
    var G2 = (Math.ceil(G1));
    var G3 = ((G2/1)+4);
    var G4 = (G3*H1);
    var G5 = (Math.ceil(G4));
    var G6 = (G5/6);
    var G7 = (Math.ceil(G6));
    var G8 = (G2+G7);
    rezcherestea.innerHTML=G8;
}
    var btnrezult=document.getElementById('btnrezult');
    btnrezult.onclick=MyCalc;