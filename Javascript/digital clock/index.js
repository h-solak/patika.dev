const getTime = () => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
}

const getDate = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return date;
}

const getDayName = () => {
    var today = new Date();
    let day = today.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    switch (day) {
        case 0:
            return days[0]
            break;
        case 1:
            return days[1]
            break;
        case 2:
            return days[2]
            break;
        case 3:
            return days[3]
            break;
        case 4:
            return days[4]
            break;
        case 5:
            return days[5]
            break;
        case 6:
            return days[6]
            break;
    }
}

console.log(getDayName())
const updateTime = () => {
    let time = getTime();
    let date = getDate();
    let dayName = getDayName();
    document.getElementById("current-time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
    document.getElementById("day-name").innerHTML = dayName;
}

var interval = window.setInterval(function() {
    updateTime()
}, 1000);


//DYNAMIC FAVICON FOR BOTH DARK THEME AND LIGHT THEME
lightSchemeIcon = document.querySelector('link#light-scheme-icon');
darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

function onUpdate() {
    if (matcher.matches) {
        lightSchemeIcon.remove();
        document.head.append(darkSchemeIcon);
    } else {
        document.head.append(lightSchemeIcon);
        darkSchemeIcon.remove();
    }
}
matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();