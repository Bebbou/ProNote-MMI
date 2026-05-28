const calendarLinks = {
    A1: "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&mode=WEEK&showTz=0&showPrint=0&src=cTF2bjkzYmdyaHBvNDNwa3VndTdmamFmcHFjampoZDRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23b39ddb",
    A2: "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showPrint=0&showTz=0&mode=WEEK&src=ZXNncDVsam5hcThra2tobXFqOHF0ZG1ocmRoNGFlMnBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23f09300",
    B1: "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showPrint=0&showTz=0&mode=WEEK&src=ZWNrZG92djlzYzFvMGxyamJzcGM4amg5NjBib3E2OTRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23f6bf26",
    B2: "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showPrint=0&showTz=0&mode=WEEK&src=c29qODlsc21vZGIxOGJ2cXY3bTI3cW8xYnRjb3Q5cjlAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23a79b8e"
};

let activeButton = null;

function changeAgenda(group, button) {
    const frame = document.getElementById('agenda-frame');
    if (!calendarLinks[group]) return;

    frame.src = calendarLinks[group];

    if (activeButton) {
        activeButton.classList.remove('active');
    }
    activeButton = button;
    if (activeButton) {
        activeButton.classList.add('active');
    }

    const textIds = ['group-text-A1', 'group-text-A2', 'group-text-B1', 'group-text-B2'];
    textIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.hidden = true;
    });

    const selectedText = document.getElementById(`group-text-${group}`);
    if (selectedText) {
        selectedText.hidden = false;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const initialText = document.getElementById('group-text-A1');
    if (initialText) initialText.hidden = true;
});