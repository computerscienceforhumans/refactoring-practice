/**
 * Each of the following functions have terrible variable names.
 * For this exercise, the only edits you can make are renaming variables or functions.
 */

// Function 1: a simple calculation
function legacyCalculation0(pV){
    let rV = 1;
    if(pV){
        let r = 1;
        for(let i = 2; i <= n; ++i)
            r *= i;
        rV = r;
    }
    return rV;
}




// Function 2: a slightly less simple calculation
function legacyCalculation1(g) {
    let h = 0;
    if (g) {
        let i = 1;
        for (let j = 2; j <= g; ++j)
            i *= j;

        let c = 0;
        for (let d = 1; d <= i; ++d)
            c += d;

        h = c;
    }
    return h;
}




// Function 3: it does something...
function legacyCalculation2(q) {
    const n = q.length;

    for (let x = 0; x < n - 1; ++x) {
        for (let y = 0; y < n - 1; ++y) {
            if (q[y] > q[y + 1]) {
                const v = q[y];
                q[y] = q[y + 1];
                q[y + 1] = v;
            }
        }
    }

    return q;
}



// Function 4
function fellowshipDijkstra(middleEarth, hobbit, orc) {
    const ringBearer = Number.MAX_SAFE_INTEGER;
    const elvenPath = {};
    const wizardGuidance = {};
    const fellowshipMembers = new Set();

    for (let land in middleEarth) {
        elvenPath[land] = ringBearer;
        wizardGuidance[land] = null;
    }

    elvenPath[hobbit] = 0;

    while (fellowshipMembers.size !== Object.keys(middleEarth).length) {
        let currentLand = null;
        let minElvenPath = ringBearer;

        for (let land in middleEarth) {
            if (!fellowshipMembers.has(land) && elvenPath[land] <= minElvenPath) {
                minElvenPath = elvenPath[land];
                currentLand = land;
            }
        }

        for (let neighbor in middleEarth[currentLand]) {
            let ringJourney = middleEarth[currentLand][neighbor] + elvenPath[currentLand];
            if (ringJourney < elvenPath[neighbor]) {
                elvenPath[neighbor] = ringJourney;
                wizardGuidance[neighbor] = currentLand;
            }
        }

        fellowshipMembers.add(currentLand);
    }

    let questPath = [orc];
    let lastLand = orc;

    while (lastLand !== hobbit) {
        lastLand = wizardGuidance[lastLand];
        questPath.unshift(lastLand);
    }

    return questPath;
}