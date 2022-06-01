import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { useQuery } from 'react-query';
import axios from 'axios';
require('react-big-calendar/lib/css/react-big-calendar.css');

// setting locales
const locales = {
    'en-US': enUS,
}

// setting localizer
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const Events = ({ doRefetch, setDoRefetch }) => {
    // integration of react query here
    const { data: events, isLoading, refetch } = useQuery(['events'], () => axios.get('https://boiling-thicket-50389.herokuapp.com/event'));

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (doRefetch) {
        refetch();
        setDoRefetch(false);
    }

    // rendering calender component here
    return (
        <section className='mt-20 w-3/5 mx-auto'>
            {console.log(events)}
            <h2 className='font-bold text-3xl mb-5'>Event Calendar</h2>

            <div className='bg-neutral p-5 rounded-xl'>
                <Calendar
                    localizer={localizer}
                    events={events.data}
                    startAccessor='start'
                    endAccessor='end'
                    style={{ height: 500 }}
                />
            </div>
        </section>
    );

};

export default Events;