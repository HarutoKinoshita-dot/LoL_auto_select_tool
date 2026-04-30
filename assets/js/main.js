// HTMLの要素を取得
const btn = document.getElementById('myButton');
const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');
const display3 = document.getElementById('display3');
const display4 = document.getElementById('display4');
const display5 = document.getElementById('display5');

// クリックイベントの処理
btn.addEventListener('click', () => {
    showDragon();
    showSupport();
    showMid();
    showBaron();
    showJungle();
});

function showDragon() {
    const champ = getRandomChampExcluding('ドラゴン');
    const items = getRandomItems(5);
    const boots = getBoots();
    const enchants = getEnchants();
    display1.innerHTML = `
        <div class="lane-card">
            <h3>【ドラゴン】</h3>
            <p>チャンピオン：${champ.name}</p><img src="${champ.image}" alt="${champ.name}">
            <p>アイテム1：${items[0].name}(${items[0].type})</p>
            <p>アイテム2：${items[1].name}(${items[1].type})</p>
            <p>アイテム3：${items[2].name}(${items[2].type})</p>
            <p>アイテム4：${items[3].name}(${items[3].type})</p>
            <p>アイテム5：${items[4].name}(${items[4].type})</p>
            <p>アイテム6：${boots.name}</p>
            <p>アイテム7：${enchants.name}</p>
        </div>
    `;
}

function showSupport() {
    const champ = getRandomChampExcluding('サポート');
    const items = getRandomItems(4);
    const boots = getBoots();
    const supportItem = getSupportItem();
    display2.innerHTML = `
        <div class="lane-card">
            <h3>【サポート】</h3>
            <p>チャンピオン：${champ.name}</p>
            <p>アイテム1：${items[0].name}(${items[0].type})</p>
            <p>アイテム2：${items[1].name}(${items[1].type})</p>
            <p>アイテム3：${items[2].name}(${items[2].type})</p>
            <p>アイテム4：${items[3].name}(${items[3].type})</p>
            <p>アイテム5：${boots.name}</p>
            <p>アイテム6：${supportItem.name}</p>
        </div>
    `;
}

function showMid() {
    const champ = getRandomChampExcluding('ミッド');
    const items = getRandomItems(5);
    const boots = getBoots();
    const enchants = getEnchants();
    display3.innerHTML = `
        <div class="lane-card">
            <h3>【ミッド】</h3>
            <p>チャンピオン：${champ.name}</p>
            <p>アイテム1：${items[0].name}(${items[0].type})</p>
            <p>アイテム2：${items[1].name}(${items[1].type})</p>
            <p>アイテム3：${items[2].name}(${items[2].type})</p>
            <p>アイテム4：${items[3].name}(${items[3].type})</p>
            <p>アイテム5：${items[4].name}(${items[4].type})</p>
            <p>アイテム6：${boots.name}</p>
            <p>アイテム7：${enchants.name}</p>
        </div>
    `;
}

function showBaron() {
    const champ = getRandomChampExcluding('バロン');
    const items = getRandomItems(5);
    const boots = getBoots();
    const enchants = getEnchants();
    display4.innerHTML = `
        <div class="lane-card">
            <h3>【バロン】</h3>
            <p>チャンピオン：${champ.name}</p>
            <p>アイテム1：${items[0].name}(${items[0].type})</p>
            <p>アイテム2：${items[1].name}(${items[1].type})</p>
            <p>アイテム3：${items[2].name}(${items[2].type})</p>
            <p>アイテム4：${items[3].name}(${items[3].type})</p>
            <p>アイテム5：${items[4].name}(${items[4].type})</p>
            <p>アイテム6：${boots.name}</p>
            <p>アイテム7：${enchants.name}</p>
        </div>
    `;
}

function showJungle() {
    const champ = getRandomChampExcluding('ジャングル');
    const items = getRandomItems(5);
    const boots = getBoots();
    const enchants = getEnchants();
    display5.innerHTML = `
        <div class="lane-card">
            <h3>【ジャングル】</h3>
            <p>チャンピオン：${champ.name}</p>
            <p>アイテム1：${items[0].name}(${items[0].type})</p>
            <p>アイテム2：${items[1].name}(${items[1].type})</p>
            <p>アイテム3：${items[2].name}(${items[2].type})</p>
            <p>アイテム4：${items[3].name}(${items[3].type})</p>
            <p>アイテム5：${items[4].name}(${items[4].type})</p>
            <p>アイテム6：${boots.name}</p>
            <p>アイテム7：${enchants.name}</p>
        </div>
    `;
}


// champions
function getRandomChampExcluding(excludeRole) {
    const candidates = CHAMPIONS.filter(champ => !champ.roles.includes(excludeRole));
    if (candidates.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * candidates.length);
    return candidates[randomIndex];
}

// items
function getRandomItems(count) {
    const shuffled = [...ALL_ITEMS];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

function getBoots() {
    const randomIndex = Math.floor(Math.random() * BOOTS.length);
    return BOOTS[randomIndex];
}

function getEnchants() {
    const randomIndex = Math.floor(Math.random() * ENCHANTS.length);
    return ENCHANTS[randomIndex];
}

function getSupportItem() {
    const randomIndex = Math.floor(Math.random() * SUPPORT_ITEMS.length);
    return SUPPORT_ITEMS[randomIndex];
}
