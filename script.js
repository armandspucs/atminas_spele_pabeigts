
//no adreses iegūst vārdu un ievieto to virsrakstā
let vards = window.location.hash;
vards = vards.replace('#','');
vards = decodeURI(vards);
document.querySelector('.virsraksts').innerHTML = 'Sveiks '+vards;



let punkti = 0

let atvertaisLaukums1 = '';
let atvertaisLaukums2 = '';

let laukumuSaturs = ['😀','🤡','😺','🎃','😺','🤖','😀','🎃','🤖','👽','👽','🤡'];

let vienadieAtvertieLaukumi = Array();



function atvertLaukumu(laukumaID)
{
	//console.log('Palaista funkcija atvertBloku()');
	console.log('Klikšķis uz:'+laukumaID);
	
	//console.log(document.querySelector('#'+laukumaID)+' div');
	//document.querySelector('#'+laukumaID+' div').style.display='block';

	if( atvertaisLaukums1!='' && atvertaisLaukums2!='' ) //abi bloki ar atvērti
	{
		//parbauditBlokus();

	}
	else //neviens bloks nav atvērts
	{



		if( atvertaisLaukums1=='' ) //neviens bloks nav atvērts - atveram pirmo
		{
			atvertaisLaukums1 = laukumaID;
			console.log('atvertaisLaukums1: '+atvertaisLaukums1);
			document.querySelector('#'+laukumaID+' div').style.display='block';
		}
		else //pirmais bloks ir atvērts atveram otro
		{
			atvertaisLaukums2 = laukumaID;
			console.log('atvertaisLaukums2: '+atvertaisLaukums2);
			document.querySelector('#'+laukumaID+' div').style.display='block';
			
			parbauditBlokus();
		}

	}


}



function parbauditBlokus()
{
	//for (let i = 0; i < laukumuSaturs.length; i++) {
	//	console.log( laukumuSaturs[i] );
	//}


		//atvertaLaukuma1Nr = atvertaisLaukums1[1] + atvertaisLaukums1[2];
		let Nr1 = atvertaisLaukums1.substr(1);
		let Nr2 = atvertaisLaukums2.substr(1);
		
		
		if ( laukumuSaturs[Nr1] == laukumuSaturs[Nr2] )
		{
			console.log('atvērti vienādi lauki');

			vienadieAtvertieLaukumi.push(atvertaisLaukums1,atvertaisLaukums2)

			atvertaisLaukums1='';
			atvertaisLaukums2='';
		}
		else
		{
			setTimeout(aizvertLaukumus, 3000);
		}
	

	
}


function aizvertLaukumus()
{
	//alert(1);

	//if( vienadieAtvertieLaukumi.includes[atvertaisLaukums1] )
	//{
		document.querySelector('#'+atvertaisLaukums1+' div').style.display='none';
	//}

	//if( vienadieAtvertieLaukumi.includes[atvertaisLaukums2] )
	//{
		document.querySelector('#'+atvertaisLaukums2+' div').style.display='none';
	//}
	
	//document.querySelector('#'+atvertaisLaukums2+' div').style.display='none';

	atvertaisLaukums1='';
	atvertaisLaukums2='';

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