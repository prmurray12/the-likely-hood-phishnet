export function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

export function calculateTimeSince(lastDateString, currentDateString) {
    const lastDate = new Date(lastDateString);
    const currentDate = new Date(currentDateString);
    
    if (isNaN(lastDate.getTime()) || isNaN(currentDate.getTime()) || lastDate > currentDate) {
        return 'N/A (Error)';
    }

    const diffInMilliseconds = currentDate.getTime() - lastDate.getTime();
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const days = Math.floor(diffInMilliseconds / MS_PER_DAY);

    const years = Math.floor(days / 365);
    const remainingDaysAfterYears = days % 365;
    const months = Math.floor(remainingDaysAfterYears / 30.44); 
    const remainingDays = Math.round(remainingDaysAfterYears % 30.44);

    const parts = [];
    if (years > 0) parts.push(`${years} year${years !== 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} month${months !== 1 ? 's' : ''}`);
    if (remainingDays > 0 && years === 0) parts.push(`${remainingDays} day${remainingDays !== 1 ? 's' : ''}`);
    
    return parts.slice(0, 2).join(', ') || `${days} total days`;
}