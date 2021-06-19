// ==UserScript==
// @name         Mikołaj
// @version      1.0
// @match        https://fobos.margonem.pl/
// @match        http://aldous.margonem.pl/
// @grant        none
// @author       aldillek
// ==/UserScript==

((Engine) => {

    const getHpValue = (item, type) => {
        const regExp = new RegExp(`${type}=(\\d+)`);
        const returned = parseInt(item.stat.match(regExp)[1]);
        return returned;
      };

    const healHero = () => {
        const [heroHp, heroMaxHp] = [Engine.hero.d.hp, Engine.hero.d.maxhp];
        if (heroHp !== heroMaxHp && !Engine.dead && !Engine.battle?.show) {
            const items = Engine.items
              .fetchLocationItems('g')
              .filter((item) => item.stat.includes('leczy='));

            const itemsFull = Engine.items
              .fetchLocationItems('g')
              .filter((item) => item.stat.includes('fullheal='));

            if (items && items.length !== 0) {
              const minHealthItem = items.reduce((a, b) => {
                return getHpValue(a, 'leczy') < getHpValue(b, 'leczy') ? a : b;
              });
              const hpNeeded = heroMaxHp - heroHp;
              if (hpNeeded > getHpValue(minHealthItem, 'leczy')) {
                console.log(`Uleczono przedmiotem o nazwie ${minHealthItem.name}`);
                return window._g(`moveitem&st=1&id=${minHealthItem.id}`);
              }
            }
            if (itemsFull && itemsFull.length !== 0) {
              const minHealthItemFull = itemsFull.reduce((a, b) => {
                return getHpValue(a, 'fullheal') < getHpValue(b, 'fullheal') ? a : b;
              });
              console.log(`Uleczono przedmiotem o nazwie ${minHealthItemFull.name}`);
              return window._g(`moveitem&st=1&id=${minHealthItemFull.id}`);
            }
          }
    }

  window.API.addCallbackToEvent('heroUpdate', healHero);
})(window.Engine);


