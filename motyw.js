// Ja jestem autorem motywu świata prywatnego Invisible.
// Zmiana hostingu.

$___skin = new (function(){
	this.Replace = function(){
		/* Podmiana funkcji */
		
		/* -- PARSEINPUT -- */
		(function(pI){
			parseInput = function(d,c,x){
				r_pi = pI(d,c,x);
				$___skin.Update();
				return r_pi;
			}

		})(parseInput);

		

		/* -- SHOWDIALOG -- */

		(function(sD){
			showDialog = function(d,a){
				r_sd = sD(d,a);

				if(d=='quests-title.png'){
					$("#dlgwin .w2").css("background-image", "url(http://i.imgur.com/NIcemzT.png)");
				}
				else if(d=='help-title.png'){
					$("#dlgwin .w2").css("background-image", "url(http://i.imgur.com/2tEbIss.png)");
				}
				else if(d=='Kopiuj przebieg walki'){
					$("#dlgwin .w2").css("background-image", "url(http://i.imgur.com/91xh80l.png)");
					$('#dlgwin #dlgtitle').html('');
				}

				return r_sd;
			}
		})(showDialog);


	}
	this.Start = function(){
		/* Inicjalizacja */
 
		this.Replace();

		$('<link rel="stylesheet" type="text/css" href=""/>').appendTo('head');
		$('#leorn1,#leorn2').remove();
		$('#party img').attr('src','http://i.imgur.com/abvXEQY.png');
		$('#inmap2 img').attr('src','http://i.imgur.com/1Y9xMiH.png');
      	$('<div></div>').attr({
        	'id': 'motywstats'
      }).css({
        position: 'absolute',
        height:'12px',
        width:'75px',
        display:'block',
          top:'79px',
          left:'170px'
     
      }).appendTo("#panel");
	
	$('<div></div>').attr({
        	'id': 'motywstatspanel'
      }).css({
        position: 'absolute',
        height:'474px',
        width:'264px',
        display:'block',
          top:'79px',
          left:'170px',
          background-image:'url(https://i.imgur.com/kOiBHu1.png)'
     
      }).appendTo("#panel");


        };
        
	
	this.Update = function(){
		/* Apdejt */
		$('#life2').css({
			width: (hero.hp/hero.maxhp)*262
		});
		$('#exp2').css({
			width: (hero.exp-Math.pow(hero.lvl-1,4))/(Math.pow(hero.lvl,4)-Math.pow(hero.lvl-1,4))*262,
			background: 'url("'+(hero.ttl>0?'http://i.imgur.com/OGIwRXk.png':'http://i.imgur.com/Pdr5qBi.png')+'")'
		});
		$('#exp1').html('<span>'+parseFloat(((hero.exp-Math.pow(hero.lvl-1,4))/(Math.pow(hero.lvl,4)-Math.pow(hero.lvl-1,4))*100).toFixed(1))+'%</span>');
		$('#life1').html('<span>'+parseFloat(((hero.hp/hero.maxhp)*100).toFixed(1))+'%</span>');
		$("#motywstats").attr("tip", '<b>Siła:</b> '+hero.warrior_stats.st+'<br> <b>Zręczność:</b> '+hero.warrior_stats.ag+'<br> <b>Intelekt:</b> '+hero.warrior_stats.it+'')};
});

$___skin.Start();
