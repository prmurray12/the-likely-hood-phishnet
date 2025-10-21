const ELEMENTS = {
    loadingSpinner: document.getElementById('loading-spinner'),
    lastDate: document.getElementById('last-date'),
    lastLocation: document.getElementById('last-location'),
    gapNumber: document.getElementById('gap-number'),
    probabilityValue: document.getElementById('probability-value'),
    expectedRateDisplay: document.getElementById('expected-rate-display')
};

async function initApp() {
    ELEMENTS.loadingSpinner.classList.remove('hidden');
    ELEMENTS.lastDate.classList.add('hidden');
    ELEMENTS.lastLocation.classList.add('hidden');

    try {
        const PHISH_DATA = await fetchPhishData();
        const { lastHoodDate, lastHoodLocation, showsSinceLastPerformance, expectedRate } = PHISH_DATA;

        let displayDate = 'N/A';
        try {
            const dateToFormat = new Date(lastHoodDate + 'T00:00:00');
            displayDate = dateToFormat.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC'
            });
        } catch (e) {
            console.error("Error formatting date:", e);
        }

        const timeSinceLastHood = calculateTimeSince(lastHoodDate, CURRENT_DATE, showsSinceLastPerformance);
        
        ELEMENTS.lastDate.textContent = displayDate;
        ELEMENTS.lastLocation.textContent = lastHoodLocation + ` (${timeSinceLastHood})`; 
        ELEMENTS.gapNumber.textContent = showsSinceLastPerformance;

        const probability = calculateLikelyHood(showsSinceLastPerformance, expectedRate);
        ELEMENTS.probabilityValue.textContent = probability;
        ELEMENTS.expectedRateDisplay.textContent = `1 show every ${expectedRate} performances`;

        ELEMENTS.probabilityValue.classList.remove('text-red-400', 'text-yellow-400', 'text-phish-green');
        
        if (showsSinceLastPerformance >= 15) {
            ELEMENTS.probabilityValue.classList.add('text-phish-green');
        } else if (showsSinceLastPerformance > 7) {
            ELEMENTS.probabilityValue.classList.add('text-yellow-400');
        } else {
            ELEMENTS.probabilityValue.classList.add('text-red-400');
        }

        ELEMENTS.loadingSpinner.classList.add('hidden');
        ELEMENTS.lastDate.classList.remove('hidden');
        ELEMENTS.lastLocation.classList.remove('hidden');

    } catch (error) {
        console.error("Application failed to initialize:", error);
        
        ELEMENTS.loadingSpinner.classList.add('hidden');
        ELEMENTS.lastDate.textContent = "DATA ERROR";
        ELEMENTS.lastLocation.textContent = "Could not fetch real-time stats.";
        ELEMENTS.gapNumber.textContent = "N/A";
        ELEMENTS.probabilityValue.textContent = "0.00";
        ELEMENTS.expectedRateDisplay.textContent = "N/A";

        ELEMENTS.lastDate.classList.remove('hidden');
        ELEMENTS.lastLocation.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', initApp);