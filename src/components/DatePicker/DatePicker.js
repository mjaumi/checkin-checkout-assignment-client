import React from 'react';
import { DayPicker } from 'react-day-picker';

const DatePicker = ({ setDate, setShowDatePicker, disableDateTill }) => {

    // counting disabled days
    const disabledDays = { before: disableDateTill };

    // event handler for selecting the date
    const handleSelectDate = (date) => {
        setDate(date);
        setShowDatePicker(false)
    }

    // rendering date picker component here
    return (
        <div className='bg-neutral rounded-2xl absolute top-full z-[999]'>
            <DayPicker
                mode='single'
                onSelect={handleSelectDate}
                disabled={disabledDays}
            />
        </div>
    );
};

export default DatePicker;