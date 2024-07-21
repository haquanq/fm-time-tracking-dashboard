const timeTrackingApp = {
    trackingOptions: document.querySelectorAll(".tracking__option__input"),
    hourTexts: document.querySelectorAll(".tracking__item__hours"),
    prevTexts: document.querySelectorAll(".tracking__item__prev"),

    handleTrackingOptionChange(e) {
        const selectDaily = e.target.value == "daily";
        const selectWeekly = e.target.value == "weekly";
        const selectMonthly = e.target.value == "monthly";

        if (selectDaily) {
            this.hourTexts.forEach((el) => {
                el.querySelector(".daily").removeAttribute("hidden");
                el.querySelector(".weekly").setAttribute("hidden", "");
                el.querySelector(".monthly").setAttribute("hidden", "");
            });
            this.prevTexts.forEach((el) => {
                el.querySelector(".daily").removeAttribute("hidden");
                el.querySelector(".weekly").setAttribute("hidden", "");
                el.querySelector(".monthly").setAttribute("hidden", "");
            });
        } else if (selectWeekly) {
            this.hourTexts.forEach((el) => {
                el.querySelector(".daily").setAttribute("hidden", "");
                el.querySelector(".weekly").removeAttribute("hidden");
                el.querySelector(".monthly").setAttribute("hidden", "");
            });
            this.prevTexts.forEach((el) => {
                el.querySelector(".daily").setAttribute("hidden", "");
                el.querySelector(".weekly").removeAttribute("hidden");
                el.querySelector(".monthly").setAttribute("hidden", "");
            });
        } else if (selectMonthly) {
            this.hourTexts.forEach((el) => {
                el.querySelector(".daily").setAttribute("hidden", "");
                el.querySelector(".weekly").setAttribute("hidden", "");
                el.querySelector(".monthly").removeAttribute("hidden");
            });
            this.prevTexts.forEach((el) => {
                el.querySelector(".daily").setAttribute("hidden", "");
                el.querySelector(".weekly").setAttribute("hidden", "");
                el.querySelector(".monthly").removeAttribute("hidden");
            });
        }
    },

    init() {
        this.trackingOptions.forEach((element, index) => {
            element.addEventListener("change", (e) => {
                this.handleTrackingOptionChange(e);
            });
        });
    },
};

timeTrackingApp.init();
