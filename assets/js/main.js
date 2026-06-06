const btn = document.getElementById('myButton');
const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');
const display3 = document.getElementById('display3');
const display4 = document.getElementById('display4');
const display5 = document.getElementById('display5');

btn.addEventListener('click', () => {
    const selectedChampions = [];

    LANE_TYPE.forEach((lane) => {
        let html = "";

        const champ = getRandomChampExcluding(lane.name, selectedChampions);
        selectedChampions.push(champ.name);

        if (lane.name === "サポート") {
            html = createHtmlType1(
                lane.name,
                champ,
                getRandomItems(4),
                getBoots(),
                getSupportItem()
            );
        } else {
            html = createHtmlType2(
                lane.name,
                champ,
                getRandomItems(5),
                getBoots(),
                getEnchants()
            );
        }

        switch (lane.name) {
            case "ドラゴン":
                display1.innerHTML = html;
                break;
            case "ジャングル":
                display2.innerHTML = html;
                break;
            case "ミッド":
                display3.innerHTML = html;
                break;
            case "バロン":
                display4.innerHTML = html;
                break;
            case "サポート":
                display5.innerHTML = html;
                break;
            default:
                console.log("Unknown lane type");
        }
    });
});

// champions
function getRandomChampExcluding(excludeRole, alreadySelected = []) {
    const candidates = CHAMPIONS.filter(champ =>
        !champ.roles.includes(excludeRole) && !alreadySelected.includes(champ.name)
    );

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

function createHtmlType1(laneName, champ, items, boots, supportItem) {
    return `
        <div class="lane-card">
            <div class="lane-header">
                <h3>${laneName}</h3>
            </div>

            <div class="champ-section">
                <img src="${champ.image}" alt="${champ.name}" class="champ-img">
                <div class="champ-info">
                    <span class="label">チャンピオン</span>
                    <p class="name">${champ.name}</p>
                </div>
            </div>

            <div class="items-grid">
                <!-- 通常アイテム 4つ -->
                ${items.map(item => `
                    <div class="item-slot">
                        <img src="${item.image}" alt="${item.name}" title="${item.name}">
                        <span class="item-name">${item.name}</span>
                    </div>
                `).join('')}
                
                <!-- ブーツ -->
                <div class="item-slot boots">
                    <img src="${boots.image}" alt="${boots.name}">
                    <span class="item-name">${boots.name}</span>
                </div>

                <!-- サポートアイテム -->
                <div class="item-slot support">
                    <img src="${supportItem.image}" alt="${supportItem.name}">
                    <span class="item-name">${supportItem.name}</span>
                </div>
            </div>
        </div>
    `;
}

function createHtmlType2(laneName, champ, items, boots, enchants) {
    return `
        <div class="lane-card">
            <div class="lane-header">
                <h3>${laneName}</h3>
            </div>

            <div class="champ-section">
                <img src="${champ.image}" alt="${champ.name}" class="champ-img">
                <div class="champ-info">
                    <span class="label">チャンピオン</span>
                    <p class="name">${champ.name}</p>
                </div>
            </div>

            <div class="items-grid">
                ${items.map(item => `
                    <div class="item-slot">
                        <img src="${item.image}" alt="${item.name}" title="${item.name}">
                        <span class="item-name">${item.name}</span>
                    </div>
                `).join('')}
                
                <div class="item-slot boots">
                    <img src="${boots.image}" alt="${boots.name}">
                    <span class="item-name">${boots.name}</span>
                </div>

                <div class="item-slot enchant">
                    <img src="${enchants.image}" alt="${enchants.name}">
                    <span class="item-name">${enchants.name}</span>
                </div>
            </div>
        </div>
    `;
}