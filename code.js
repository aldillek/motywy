$___skin = new (function () {
	this.Replace = function () {
		/* Podmiana funkcji */

		/* -- PARSEINPUT -- */
		(function (pI) {
			parseInput = (d, c, x) => {
				r_pi = pI(d, c, x);
				$___skin.Update();
				return r_pi;
			};
		})(parseInput);

		/* -- SHOWDIALOG -- */

		(function (sD) {
			showDialog = (d, a) => {
				r_sd = sD(d, a);
				if (d == 'help-title.png') {
					document.querySelector(`#dlgwin .w2`).style.backgroundImage = `url(http://i.imgur.com/2tEbIss.png)`;
				} else if (d == 'Kopiuj przebieg walki') {
					document.querySelector(`#dlgwin .w2`).style.backgroundImage = `url(http://i.imgur.com/91xh80l.png)`;
					document.querySelector(`#dlgwin #dlgtitle`).innerHTML = ``;
				}

				return r_sd;
			};
		})(showDialog);
	};

	this.Start = () => {
		/* Inicjalizacja */

		this.Replace();

		const style = document.createElement(`link`);
		(style.href = `https://aldill.github.io/motywy/style.css`), (style.rel = `stylesheet`), (style.type = `text/css`);
		document.getElementsByTagName('head')[0].appendChild(style);

		$('#party img').attr('src', 'http://i.imgur.com/abvXEQY.png');
		
		const statsButton = document.createElement(`div`);
		statsButton.id = "motywstats";
		statsButton.append(`#centerbox`);
		
		const statsPanel = document.createElement(`div`);
		statsPanel.id = "motywstatspanel";
		statsPanel.append(`#panel`);

		const exhaustedBar = document.createElement(`div`);
		exhaustedBar.id = "exhausted";
		exhaustedBar.append(`#panel`);
		
		
	};
	this.Update = function () {
		/* hero new name with ranges */
		if (!document.querySelector(`.levelRanges`)) {
			// prevent from updating too much
			const name = document.querySelector(`#nick`);
			name.innerHTML = `${hero.nick} → <span class="levelRanges" style="font-size:9px">${
				hero.lvl - Math.max(hero.lvl - Math.round((hero.lvl - 4) / 1.2), 13) >= 1
					? hero.lvl - Math.max(hero.lvl - Math.round((hero.lvl - 4) / 1.2), 13)
					: 1
			} - </span>${hero.lvl}${hero.prof}<span class="levelRanges" style="font-size:9px"> - ${
				hero.lvl + Math.max(Math.round(hero.lvl * 1.2 + 4) - hero.lvl, 13) >= 300
					? 300
					: hero.lvl + Math.max(Math.round(hero.lvl * 1.2 + 4) - hero.lvl, 13)
			}</span>`;
		}
		document.querySelector(`#motywstats`).setAttribute('tip', 'Kliknij, aby zobaczyć statystyki');
		document.querySelector(`#motywstats`).addEventListener('click', () => {
			document.querySelector('#motywstatspanel').style.display = `block`;
		});
		document.querySelector(`#motywstatspanel`).addEventListener(`dblclick`, () => {
			document.querySelector(`#motywstatspanel`).style.display = `none`;
		});
		document.querySelector(`#life2`).style.width = `${(hero.hp / hero.maxhp) * 262}px`;

		if (hero.ttl > 0) {
			document.querySelector(`#exhausted`).style.width = `${(hero.ttl / hero.ttl_value) * 262}px`;
		}

		(document.querySelector(`#exp2`).style[`width`] = `${
			((hero.exp - Math.pow(hero.lvl - 1, 4)) / (Math.pow(hero.lvl, 4) - Math.pow(hero.lvl - 1, 4))) * 262
		}px`),
			(document.querySelector(`#exp2`).style.backgroundImage = `url(${
				hero.ttl > 0 ? `http://i.imgur.com/OGIwRXk.png` : `http://i.imgur.com/Pdr5qBi.png`
			})`);
		$('#exp1').html(
			'<span>' +
				parseFloat((((hero.exp - Math.pow(hero.lvl - 1, 4)) / (Math.pow(hero.lvl, 4) - Math.pow(hero.lvl - 1, 4))) * 100).toFixed(1)) +
				'%</span>'
		);
		$('#life1').html('<span>' + parseFloat(((hero.hp / hero.maxhp) * 100).toFixed(1)) + '%</span>');
		document.querySelector(`#motywstatspanel`).innerHTML = `
    <h1 style="margin: 20px 0px;"> Statystyki postaci </h1>
    <h3> Zręczność: ${hero.ag} </h3> 
    <h3> Siła: ${hero.st}</h3>
    <h3 style = "margin-bottom:10px;"> Inteligencja: ${hero.it}</h3>
    <p> Obniżanie SA: ${hero.slow / 100}
    <p> Niszczenie pancerza: ${hero.acdmg}
    <p> Niszczenie energii: ${hero.endest}
    <p> Niszczenie many: ${hero.manadest}
    <p> Obniżanie odporności: ${hero.acmdmg}%
    <p> Obniżanie ciosu krytycznego: ${hero.lowcrit}%
    <p> Procent na krytyk: ${hero.crit}%
    <p> Pancerz: ${hero.ac}
    <p> Blok: ${hero.block}
    <p> Unik: ${hero.evade}(${20*hero.evade/hero.lvl}%) 
    <p> Leczenie turowe: ${hero.heal}
    <p> Mana: ${hero.mana}
    <p> Przywracanie many: ${hero.managain}
    <p> SA: ${hero.sa}
    <p> Energia: ${hero.energy}
    <p> Absorpcja: ${hero.absorb}
    <p> Absorpcja magiczna: ${hero.absorbm}
    <p> Siła krytyka ognia: ${hero.critmval_f}
    <p> Siła krytyka od zimna: ${hero.critmval_c}
    <p> Siła krytyka błyskawic: ${hero.critmval_l}
    <p> Siła krytyka fizycznego: ${hero.critmval}
    <p style="font-size:5; margin:10px;"> Kliknij dwa razy, aby zamknąć. 
    `;
	};
})();

$___skin.Start();
