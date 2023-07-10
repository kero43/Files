try {
    let isNext = false;
    let isScan = true;
    const delay = ms => new Promise(res => setTimeout(res, ms));

    function colorGetter(td) {
        const styles = window.getComputedStyle(td);
        return styles.getPropertyValue("color");
    }

    function scanCells() {
        const table = document.querySelectorAll(".p-datepicker td>span");
        table.forEach((td, _) => {
            if (colorGetter(td) === "rgb(83, 177, 222)") {
                isScan = false;
                window.open('https://dashboard.mindpos.net/Dash/SuccessAlarm.mp3', '_blank')
            }
        });
    }

    while (isScan) {
        await delay(30000);
        scanCells();
        if (isScan) {
            if (isNext) {
                console.log('prev clicked')
                const prevButton = document.querySelector(".p-datepicker-prev");
                prevButton.click();
                isNext = false;
            } else {
                console.log('next clicked')
                const nextButton = document.querySelector(".p-datepicker-next");
                nextButton.click();
                isNext = true;
            }
        }
    }
} catch (error) {
	isScan = false;
	window.open('https://dashboard.mindpos.net/Dash/EmergencyAlarm.mp3', '_blank')
}