let events = [ 
    { Title: "Lets go to a movie", Date: new Date("06/12/2018") }, 
    { Title: "Dinner time", Date: new Date("06/25/2018") }, 
    { Title: "Meeting with manager", Date: new Date("07/01/2018") }
];

$("#calendar").datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    beforeShowDay: function(date) {
        var result = [true, '', null];
        var matching = $.grep(events, function(event) {
            return event.Date.valueOf() === date.valueOf();
        });
        
        if (matching.length) {
            result = [true, 'highlight', null];
        }
        return result;
    },
    onSelect: function(dateText) {
        var date,
            selectedDate = new Date(dateText),
            i = 0,
            event = null;
        
        while (i < events.length && !event) {
            date = events[i].Date;

            if (selectedDate.valueOf() === date.valueOf()) {
                event = events[i];
            }
            i++;
        }
        if (event) {
            alert(event.Title);
        }
    },
    dayNamesMin: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ]
});
