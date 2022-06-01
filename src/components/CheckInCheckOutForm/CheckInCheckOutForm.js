import React, { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from '../DatePicker/DatePicker';
import axios from 'axios';

const CheckInCheckOutForm = ({ setDoRefetch }) => {
    // integration of react hooks
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [showCheckInDatePicker, setShowCheckInDatePicker] = useState(false);
    const [showCheckOutDatePicker, setShowCheckOutDatePicker] = useState(false);

    const handleBookEvent = async (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const start = checkInDate;
        const end = checkOutDate;

        const newEvent = { title, start, end };

        console.log(newEvent);

        const { data } = await axios.post('https://boiling-thicket-50389.herokuapp.com/event', newEvent);

        console.log(data);
        event.target.reset();
        setDoRefetch(true);
    }

    // rendering calendar component here 
    return (
        <section className='mt-20'>
            <div className='flex justify-center'>
                <form onSubmit={handleBookEvent}>
                    <div className='flex'>
                        <div className='form-control w-[312px]'>
                            <label className='label'>
                                <span className='label-text'>Name <span className='text-red-500'>*</span></span>
                            </label>
                            <input name='title' type='text' placeholder='Enter The Event Name' className='input input-bordered w-full' required />
                        </div>
                        <div className='relative form-control w-[312px] ml-10'>
                            <label className='label'>
                                <span className='label-text'>Check-in <span className='text-red-500'>*</span></span>
                            </label>
                            <input name='start' onClick={() => setShowCheckInDatePicker(!showCheckInDatePicker)} type='text' placeholder='Select A Date' className='input input-bordered w-full cursor-pointer' readOnly value={format(checkInDate, 'PP')} />
                            {
                                showCheckInDatePicker &&
                                <DatePicker
                                    setDate={setCheckInDate}
                                    setShowDatePicker={setShowCheckInDatePicker}
                                    disableDateTill={new Date()}
                                />
                            }
                        </div>
                        <div className='relative form-control w-[312px] ml-10'>
                            <label className='label'>
                                <span className='label-text'>Check-out <span className='text-red-500'>*</span></span>
                            </label>
                            <input name='end' onClick={() => setShowCheckOutDatePicker(!showCheckOutDatePicker)} type='text' placeholder='Select A Date' className='input input-bordered w-full cursor-pointer' readOnly value={format(checkInDate, 'PP') > format(checkOutDate, 'PP') ? format(checkInDate, 'PP') : format(checkOutDate, 'PP')} />
                            {
                                showCheckOutDatePicker &&
                                <DatePicker
                                    setDate={setCheckOutDate}
                                    setShowDatePicker={setShowCheckOutDatePicker}
                                    disableDateTill={checkInDate}
                                />
                            }
                        </div>
                    </div>
                    <div className='mt-10'>
                        <button className='btn'>Book Now</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CheckInCheckOutForm;