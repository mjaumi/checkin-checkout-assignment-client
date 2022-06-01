import React, { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from '../DatePicker/DatePicker';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const CheckInCheckOutForm = ({ setDoRefetch }) => {
    // integration of react hooks
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [showCheckInDatePicker, setShowCheckInDatePicker] = useState(false);
    const [showCheckOutDatePicker, setShowCheckOutDatePicker] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const handleBookEvent = async (event) => {
        event.preventDefault();
        setShowLoading(true);

        const title = event.target.title.value;
        const start = checkInDate;
        const end = checkOutDate;

        const newEvent = { title, start, end };

        console.log(newEvent);

        const { data } = await axios.post('https://boiling-thicket-50389.herokuapp.com/event', newEvent);

        if (data.acknowledged) {
            toast.success('Event Added Successfully!!!');
        } else {
            toast.error('Failed To Add Event!!!');
        }

        event.target.reset();
        setDoRefetch(true);
        setShowLoading(false);
    }

    // rendering calendar component here 
    return (
        <section className='relative mt-20'>
            <div className='flex justify-center'>
                <form onSubmit={handleBookEvent}>
                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <div className='form-control w-[312px]'>
                            <label className='label'>
                                <span className='label-text'>Name <span className='text-red-500'>*</span></span>
                            </label>
                            <input name='title' type='text' placeholder='Enter The Event Name' className='input input-bordered w-full' required />
                        </div>
                        <div className='relative form-control w-[312px] mt-5 md:mt-0 md:ml-10'>
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
                        <div className='relative form-control w-[312px] mt-5 md:mt-0 md:ml-10'>
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
            {
                showLoading &&
                <div>
                    <div className='absolute top-[250%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999]'>
                        <Loading />
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </div>
            }
        </section>
    );
};

export default CheckInCheckOutForm;