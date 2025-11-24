function changeAgenda(group) {

  const calendarLinks = {
        A1: "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&mode=WEEK&showTz=0&showPrint=0&src=cTF2bjkzYmdyaHBvNDNwa3VndTdmamFmcHFjampoZDRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23b39ddb",
        A2: "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showPrint=0&showTz=0&mode=WEEK&src=ZXNncDVsam5hcThra2tobXFqOHF0ZG1ocmRoNGFlMnBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23f09300",
        B1: "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showPrint=0&showTz=0&mode=WEEK&src=ZWNrZG92djlzYzFvMGxyamJzcGM4amg5NjBib3E2OTRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23f6bf26",
        B2: "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showPrint=0&showTz=0&mode=WEEK&src=c29qODlsc21vZGIxOGJ2cXY3bTI3cW8xYnRjb3Q5cjlAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23a79b8e"
    };

    document.getElementById("agenda-frame").src = calendarLinks[group];
}
function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}
