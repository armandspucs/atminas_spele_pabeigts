
//no adreses iegūst vārdu un ievieto to virsrakstā
let vards = window.location.hash;
vards = vards.replace('#','');
vards = decodeURI(vards);
document.querySelector('.virsraksts').innerHTML = 'Sveiks '+vards;



let punkti = 0

let atvertsBloks1 = '';
let atvertsBloks2 = '';

let bloki1 = ['b1','b2' ,'b3','b4','b6','b10'];
let bloki2 = ['b7','b12','b5','b8','b9','b11'];


function atvertBloku(blokaNosaukums)
{
	//console.log('Palaista funkcija atvertBloku()');
	console.log('Klikšķis uz:'+blokaNosaukums);
	
	//console.log(document.querySelector('#'+blokaNosaukums)+' div');
	//document.querySelector('#'+blokaNosaukums+' div').style.display='block';

	if( atvertsBloks1!='' && atvertsBloks2!='' ) //abi bloki ar atvērti
	{
		parbauditBlokus();

	}
	else //neviens bloks nav atvērts
	{



		if( atvertsBloks1=='' ) //neviens bloks nav atvērts - atveram pirmo
		{
			atvertsBloks1 = blokaNosaukums;
			console.log('atvertsBloks1: '+atvertsBloks1);
			document.querySelector('#'+blokaNosaukums+' div').style.display='block';
		}
		else //pirmais bloks ir atvērts atveram otro
		{
			atvertsBloks2 = blokaNosaukums;
			console.log('atvertsBloks2: '+atvertsBloks2);
			document.querySelector('#'+blokaNosaukums+' div').style.display='block';
		}

	}


}



function parbauditBlokus()
{
	for (let i = 0; i < bloki1.length; i++) {
		//console.log( bloki1[i] );

		if( bloki1[i]==atvertsBloks1 )
		{

		}
	} 
	
	document.querySelector('#'+atvertsBloks1+' div').style.display='none';
	document.querySelector('#'+atvertsBloks2+' div').style.display='none';
	atvertsBloks1='';
	atvertsBloks2='';
}


/*
document.querySelector("#b1").addEventListener('click', function(event) {
	alert(1)
})*/

/*
document.querySelector("#b1").onclick = function()
{
	document.querySelector("#b1 div").style.visibility="visible";
}

document.querySelector("#b2").onclick = function()
{
	document.querySelector("#b2 div").style.visibility="visible";
}
*/