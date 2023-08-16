
//Sort by given parameter
let sortBy = (medals, sortParam, limitQuery) => {
    switch (sortParam) {
        case 'total':
            sortByTotalMedals(medals);
            break;
        case 'silver':
            sortBySilverMedals(medals);
            break;
        case 'bronze':
            sortByBronzeMedals(medals);
            break;
        case 'gold':
            sortByGoldMedals(medals);
            break;
        default:
            // throw new Error('Invalid sort parameter');
            throw new Error(`Invalid sort parameter: ${sortParam}`);
    }
    return medals.slice(0, limitQuery);
}

//Returns the medals array sorted by total medals, if total medals match then sort by gold medals
let sortByTotalMedals = (medals) => {
    medals.sort((a, b) => {
        if (a.total < b.total) {
            return 1;
        } else if (a.total > b.total) {
            return -1;
        } else {
            return b.gold - a.gold;
        }
    });
}

//Returns the medals array sorted by gold medals, if gold medals match then sort by silver medals
let sortByGoldMedals = (medals) => {
    medals.sort((a, b) => {
        if (a.gold < b.gold) {
            return 1;
        } else if (a.gold > b.gold) {
            return -1;
        } else {
            return b.silver - a.silver;

        }
    });
}

//Returns the medals array sorted by silver medals, if silver medals match then sort by gold medals
let sortBySilverMedals = (medals) => {
    medals.sort((a, b) => {
        if (a.silver < b.silver) {
            return 1;
        } else if (a.silver > b.silver) {
            return -1;
        } else {
            return b.gold - a.gold;
        }
    });
}

//Returns the medals array sorted by bronze medals, if bronze medals match then sort by gold medals
let sortByBronzeMedals = (medals) => {
    medals.sort((a, b) => {
        if (a.bronze < b.bronze) {
            return 1;
        } else if (a.bronze > b.bronze) {
            return -1;
        } else {
            return b.gold - a.gold;
        }
    });
}     
