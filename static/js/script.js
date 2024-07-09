document.querySelectorAll('.hour').forEach(hour => {
    hour.addEventListener('click', function() {
        const eventDescription = prompt("Enter event description:");
        if (eventDescription) {
            this.textContent = eventDescription; // Sets the text of the clicked hour to the event description
            this.style.backgroundColor = '#a2d2ff'; // Changes the background to indicate the slot is booked
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('scheduleContainer');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid', 'timeGrid', 'list'], // You need to specify the plugins
        initialView: 'timeGridWeek',
        // Add more options here as needed
    });
    calendar.render();
});
