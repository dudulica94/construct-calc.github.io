function MyCalc(){
    var elm = document.getElementById('imgexe');
    var Lung = document.getElementById('Lung').value;
    var Lat = document.getElementById('Lat').value;
    var H = document.getElementById('H').value;
    var G = document.getElementById('G').value;
    var LatE = document.getElementById('LatE').value;
    
    var contrezult = document.getElementById('contain-rezult');
    contrezult.style.display="none";
    
    if(document.getElementById('option1').checked){
        elm.style.backgroundImage="url('img/pag-f-b/1s.jpg')";
        /*====IMG====*/
        var latur = document.getElementById('lature');
        latur.style.display="none";
        /*====LATURA E====*/
        
            var Lung1 = (Lung/1000);
            var Lat1 = (Lat/1000);
            var H1 = (H/1000);
            var G1 = (G/1000);
            var LatE1 = (LatE/1000);
        
        var A = ((Lung1*2)+(Lat1*2));
        var A1 = (A*H1*G1);
        rezcantbeton.innerHTML=A1;
        /*CANTITATEA*/
        var B = (Lung1*Lat1);
        var B1 = ((Lung1-(G1*2))*(Lat1-(G1*2)));
        var B2 = (B-B1);
        rezamprenta.innerHTML=B2;
        /*AMPRENTA*/   
        var C21 = (Lung1*2+Lat1*2)
        var C = (A/6);
        var C1 = (Math.ceil(C));
        var C2 = ((H1/0.2)+1);
        var C3 = (Math.ceil(C2));
        var C4 = (C3*2);
        var C5 = (C1*C4);
        var C6 = (C5*H1);
        var C7 = (C6/6);
        var C8 = (Math.ceil(C7));
        var C9 = (C5+C8);
        rezvergi.innerHTML=C9;
        var C10 = (C9*6);
        rezmetrvergi.innerHTML=C10;
        var C11 = (C9*5.328);
        var C12 = C11.toFixed(2);
        rezkgvergi.innerHTML=C12;
        /*ARMATURA 12*/
        var D = (((G1*2)+(H1*2)+(H1/2)));
        var D1 = (A/0.25);
        var D2 = ((D1*D));
        var D3 = (Math.ceil(D2));
        var D4 = (D3/6);
        var D5 = (Math.ceil(D4));
        rezvergi6.innerHTML=D5;
        var D8 = (D5*6);
        rezmetrvergi6.innerHTML=D8;
        var D6 = (D5*1.332);
        var D7 = D6.toFixed(2);
        rezkgvergi6.innerHTML=D7;
        /*ARMATURA 6*/    
        var E = (A*H1*2);
        rezcofraje.innerHTML=E;
        var E1 = (0.2*6);
        var E2 = (E/E1);
        var E3 = ((A/1)+8);
        var E4 = (E3*H1);
        var E5 = (Math.ceil(E4));
        var E6 = (E5/6);
        var E7 = (Math.ceil(E6));
        var E8 = (E2+E7);
        var E9 = (Math.ceil(E8));
        rezcherestea.innerHTML=E9
        /*==== CALCULE ====*/            
    }
    else
    if(document.getElementById('option2').checked){
        elm.style.backgroundImage="url('img/pag-f-b/2s.jpg')";
        /*====IMG====*/
        var latur = document.getElementById('lature');
        latur.style.display="none";
        /*====LATURA E====*/
        var contrezult = document.getElementById('contain-rezult');
        contrezult.style.display="block";
        
        var Lung1 = (Lung/1000);
        var Lat1 = (Lat/1000);
        var H1 = (H/1000);
        var G1 = (G/1000);
        var LatE1 = (LatE/1000);
        
        var A = ((Lung1*2)+(Lat1*3));
        var A1 = (A*H1*G1);
        rezcantbeton.innerHTML=A1;
        /*CANTITATEA*/
        var B=((Lung1*Lat1)-((((Lung1-(G1*3))/2)*(Lat1-(G1*2)))*2));
        var B1 = B.toFixed(2);
        rezamprenta.innerHTML=B1;
        /*AMPRENTA*/
        var C21 = (Lung1*2+Lat1*2)
        var C = (A/6);
        var C1 = (Math.ceil(C));
        var C2 = ((H1/0.2)+1);
        var C3 = (Math.ceil(C2));
        var C4 = (C3*2);
        var C5 = (C1*C4);
        var C6 = (C5*H1);
        var C7 = (C6/6);
        var C8 = (Math.ceil(C7));
        var C9 = (C5+C8);
        rezvergi.innerHTML=C9;
        var C10 = (C9*6);
        rezmetrvergi.innerHTML=C10;
        var C11 = (C9*5.328);
        var C12 = C11.toFixed(2);
        rezkgvergi.innerHTML=C12;
        /*ARMATURA 12*/
        var D = (((G1*2)+(H1*2)+(H1/2)));
        var D1 = (A/0.25);
        var D2 = ((D1*D));
        var D3 = (Math.ceil(D2));
        var D4 = (D3/6);
        var D5 = (Math.ceil(D4));
        rezvergi6.innerHTML=D5;
        var D8 = (D5*6);
        rezmetrvergi6.innerHTML=D8;
        var D6 = (D5*1.332);
        var D7 = D6.toFixed(2);
        rezkgvergi6.innerHTML=D7;
        /*ARMATURA 6*/
        var E = (A*H1*2);
        rezcofraje.innerHTML=E;
        var E1 = (0.2*6);
        var E2 = (E/E1);
        var E3 = ((A/1)+12);
        var E4 = (E3*H1);
        var E5 = (Math.ceil(E4));
        var E6 = (E5/6);
        var E7 = (Math.ceil(E6));
        var E8 = (E2+E7);
        var E9 = (Math.ceil(E8));
        rezcherestea.innerHTML=E9;
        /*==== CALCULE ====*/ 
        
    }
    else
    if(document.getElementById('option3').checked){
        elm.style.backgroundImage="url('img/pag-f-b/3s.jpg')";
        /*====IMG====*/
        var latur = document.getElementById('lature');
        latur.style.display="block";
        /*====LATURA E====*/
        var contrezult = document.getElementById('contain-rezult');
        contrezult.style.display="block";
        
        var Lung1 = (Lung/1000);
        var Lat1 = (Lat/1000);
        var H1 = (H/1000);
        var G1 = (G/1000);
        var LatE1 = (LatE/1000);
        
        var A = ((Lung1*2)+(Lat1*3)+LatE1);
        var A1 = (A*H1*G1);
        rezcantbeton.innerHTML=A1;
        /*CANTITATEA*/
        var B = (Lung1*Lat1);
        var B1 = (Lung1-(G1*3))/2;
        var B2 = (Lat1-(G1*2));
        var B3 = B1*B2;
        var B4 = ((((Lat1-(G1*3))/2)*B1)*2);
        var B5 = (B-(B4+B3));
        var B6 = B5.toFixed(2);
        rezamprenta.innerHTML=B6;
        /*AMPRENTA*/
        var C21 = (Lung1*2+Lat1*2)
        var C = (A/6);
        var C1 = (Math.ceil(C));
        var C2 = ((H1/0.2)+1);
        var C3 = (Math.ceil(C2));
        var C4 = (C3*2);
        var C5 = (C1*C4);
        var C6 = (C5*H1);
        var C7 = (C6/6);
        var C8 = (Math.ceil(C7));
        var C9 = (C5+C8);
        rezvergi.innerHTML=C9;
        var C10 = (C9*6);
        rezmetrvergi.innerHTML=C10;
        var C11 = (C9*5.328);
        var C12 = C11.toFixed(2);
        rezkgvergi.innerHTML=C12;
        /*ARMATURA 12*/
        var D = (((G1*2)+(H1*2)+(H1/2)));
        var D1 = (A/0.25);
        var D2 = ((D1*D));
        var D3 = (Math.ceil(D2));
        var D4 = (D3/6);
        var D5 = (Math.ceil(D4));
        rezvergi6.innerHTML=D5;
        var D8 = (D5*6);
        rezmetrvergi6.innerHTML=D8;
        var D6 = (D5*1.332);
        var D7 = D6.toFixed(2);
        rezkgvergi6.innerHTML=D7;
        /*ARMATURA 6*/
        var E = (A*H1*2);
        rezcofraje.innerHTML=E;
        var E1 = (0.2*6);
        var E2 = (E/E1);
        var E21 = (Math.ceil(E2));
        var E3 = ((A/1)+16);
        var E4 = (E3*H1);
        var E5 = (Math.ceil(E4));
        var E6 = (E5/6);
        var E7 = (Math.ceil(E6));
        var E8 = (E21+E7);
        var E9 = (Math.ceil(E8));
        rezcherestea.innerHTML=E9;
        /*==== CALCULE ====*/
        
        
        
    }
    else
    if(document.getElementById('option4').checked){
        elm.style.backgroundImage="url('img/pag-f-b/4s.jpg')";
        /*====IMG====*/
        var latur = document.getElementById('lature');
        latur.style.display="none";
        /*====LATURA E====*/
        var contrezult = document.getElementById('contain-rezult');
        contrezult.style.display="block";
        
        var Lung1 = (Lung/1000);
        var Lat1 = (Lat/1000);
        var H1 = (H/1000);
        var G1 = (G/1000);
        var LatE1 = (LatE/1000);
        
        var A = ((Lung1*3)+(Lat1*3));
        var A1 = (A*H1*G1);
        rezcantbeton.innerHTML=A1;
        /*CANTITATEA*/
        var B=((Lung1*Lat1)-((((Lung1-(G1*3))/2)*((Lat1-(G1*3))/2))*4));
        var B1 = B.toFixed(2);
        rezamprenta.innerHTML=B1;
        /*AMPRENTA*/
        var C21 = (Lung1*2+Lat1*2)
        var C = (A/6);
        var C1 = (Math.ceil(C));
        var C2 = ((H1/0.2)+1);
        var C3 = (Math.ceil(C2));
        var C4 = (C3*2);
        var C5 = (C1*C4);
        var C6 = (C5*H1);
        var C7 = (C6/6);
        var C8 = (Math.ceil(C7));
        var C9 = (C5+C8);
        rezvergi.innerHTML=C9;
        var C10 = (C9*6);
        rezmetrvergi.innerHTML=C10;
        var C11 = (C9*5.328);
        var C12 = C11.toFixed(2);
        rezkgvergi.innerHTML=C12;
        /*ARMATURA 12*/
        var D = (((G1*2)+(H1*2)+(H1/2)));
        var D1 = (A/0.25);
        var D2 = ((D1*D));
        var D3 = (Math.ceil(D2));
        var D4 = (D3/6);
        var D5 = (Math.ceil(D4));
        rezvergi6.innerHTML=D5;
        var D8 = (D5*6);
        rezmetrvergi6.innerHTML=D8;
        var D6 = (D5*1.332);
        var D7 = D6.toFixed(2);
        rezkgvergi6.innerHTML=D7;
        /*ARMATURA 6*/
        var E = (A*H1*2);
        rezcofraje.innerHTML=E;
        var E1 = (0.2*6);
        var E2 = (E/E1);
        var E3 = ((A/1)+12);
        var E4 = (E3*H1);
        var E5 = (Math.ceil(E4));
        var E6 = (E5/6);
        var E7 = (Math.ceil(E6));
        var E8 = (E2+E7);
        var E9 = (Math.ceil(E8));
        rezcherestea.innerHTML=E9;
        /*==== CALCULE ====*/
        
    }
    
    var contrezult = document.getElementById('contain-rezult');
        contrezult.style.display="block";
}
    
    var btnrezult=document.getElementById('btnrezult');
    btnrezult.onclick=MyCalc;