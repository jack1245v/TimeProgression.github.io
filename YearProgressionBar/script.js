document.addEventListener("DOMContentLoaded", function() {
    const yearProgressElement = document.getElementById("year-progress");
    const monthProgressElement = document.getElementById("month-progress");
    const weekProgressElement = document.getElementById("week-progress");
    const dayProgressElement = document.getElementById("day-progress");
    const hourProgressElement = document.getElementById("hour-progress");
    const minuteProgressElement = document.getElementById("minute-progress");
    const secondProgressElement = document.getElementById("second-progress");

    const yearPercentageElement = document.getElementById("year-percentage");
    const monthPercentageElement = document.getElementById("month-percentage");
    const weekPercentageElement = document.getElementById("week-percentage");
    const dayPercentageElement = document.getElementById("day-percentage");
    const hourPercentageElement = document.getElementById("hour-percentage");
    const minutePercentageElement = document.getElementById("minute-percentage");
    const secondPercentageElement = document.getElementById("second-percentage");

    function updateProgressBar() {
        const now = new Date();

        // Year Progress
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
        const yearProgress = (now - startOfYear) / (endOfYear - startOfYear);
        const yearPercentage = (yearProgress * 100).toFixed(6);
        yearProgressElement.style.width = `${yearPercentage}%`;
        yearPercentageElement.textContent = `${yearPercentage}% of the year has passed`;

        // Month Progress
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        const monthProgress = (now - startOfMonth) / (endOfMonth - startOfMonth);
        const monthPercentage = (monthProgress * 100).toFixed(6);
        monthProgressElement.style.width = `${monthPercentage}%`;
        monthPercentageElement.textContent = `${monthPercentage}% of the month has passed`;

        // Week Progress
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 7);
        const weekProgress = (now - startOfWeek) / (endOfWeek - startOfWeek);
        const weekPercentage = (weekProgress * 100).toFixed(6);
        weekProgressElement.style.width = `${weekPercentage}%`;
        weekPercentageElement.textContent = `${weekPercentage}% of the week has passed`;

        // Day Progress
        const startOfDay = new Date(now);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(startOfDay);
        endOfDay.setDate(startOfDay.getDate() + 1);
        const dayProgress = (now - startOfDay) / (endOfDay - startOfDay);
        const dayPercentage = (dayProgress * 100).toFixed(6);
        dayProgressElement.style.width = `${dayPercentage}%`;
        dayPercentageElement.textContent = `${dayPercentage}% of the day has passed`;

        // Hour Progress
        const startOfHour = new Date(now);
        startOfHour.setMinutes(0, 0, 0);
        const endOfHour = new Date(startOfHour);
        endOfHour.setHours(startOfHour.getHours() + 1);
        const hourProgress = (now - startOfHour) / (endOfHour - startOfHour);
        const hourPercentage = (hourProgress * 100).toFixed(6);
        hourProgressElement.style.width = `${hourPercentage}%`;
        hourPercentageElement.textContent = `${hourPercentage}% of the hour has passed`;

        // Minute Progress
        const startOfMinute = new Date(now);
        startOfMinute.setSeconds(0, 0);
        const endOfMinute = new Date(startOfMinute);
        endOfMinute.setMinutes(startOfMinute.getMinutes() + 1);
        const minuteProgress = (now - startOfMinute) / (endOfMinute - startOfMinute);
        const minutePercentage = (minuteProgress * 100).toFixed(6);
        minuteProgressElement.style.width = `${minutePercentage}%`;
        minutePercentageElement.textContent = `${minutePercentage}% of the minute has passed`;

        // Second Progress
        const startOfSecond = new Date(now);
        startOfSecond.setMilliseconds(0);
        const endOfSecond = new Date(startOfSecond);
        endOfSecond.setSeconds(startOfSecond.getSeconds() + 1);
        const secondProgress = (now - startOfSecond) / (endOfSecond - startOfSecond);
        const secondPercentage = (secondProgress * 100).toFixed(6);
        secondProgressElement.style.width = `${secondPercentage}%`;
        secondPercentageElement.textContent = `${secondPercentage}% of the second has passed`;

        // Update Date and Time Display
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        document.getElementById("date-time").textContent = now.toLocaleString('en-GB', options);
    }

    updateProgressBar();
    setInterval(updateProgressBar, 100); // Update every 100 milliseconds
});
