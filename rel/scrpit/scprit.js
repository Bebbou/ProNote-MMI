function changeAgenda(group) {

  const calendarLinks = {
        A1: "https://calendar.google.com/calendar/embed?src=q1vn93bgrhpo43pkugu7fjafpqcjjhd4%40import.calendar.google.com&ctz=Europe%2FParis",
        A2: "https://calendar.google.com/calendar/embed?src=esgp5ljnaq8kkkhmqj8qtdmhrdh4ae2p%40import.calendar.google.com&ctz=Europe%2FParis",
        B1: "https://calendar.google.com/calendar/embed?src=eckdovv9sc1o0lrjbspc8jh960boq694%40import.calendar.google.com&ctz=Europe%2FParis",
        B2: "https://calendar.google.com/calendar/embed?src=soj89lsmodb18bvqv7m27qo1btcot9r9%40import.calendar.google.com&ctz=Europe%2FParis"
    };

    document.getElementById("agenda-frame").src = calendarLinks[group];
}
function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}