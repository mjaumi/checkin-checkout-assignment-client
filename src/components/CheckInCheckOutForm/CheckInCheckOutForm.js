import React, { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from '../DatePicker/DatePicker';

const CheckInCheckOutForm = () => {
    // integration of react hooks
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [showCheckInDatePicker, setShowCheckInDatePicker] = useState(false);
    const [showCheckOutDatePicker, setShowCheckOutDatePicker] = useState(false);

    // rendering calendar component here 
    return (
        <section className='mt-20'>
            <div className='flex justify-center'>
                <form>
                    <div className='flex'>
                        <div className='form-control w-[312px]'>
                            <label className='label'>
                                <span className='label-text'>Name</span>
                            </label>
                            <input type='text' placeholder='Enter The Event Name' className='input input-bordered w-full' />
                        </div>
                        <div className='relative form-control w-[312px] ml-10'>
                            <label className='label'>
                                <span className='label-text'>Check-in</span>
                            </label>
                            <input onClick={() => setShowCheckInDatePicker(!showCheckInDatePicker)} type='text' placeholder='Select A Date' className='input input-bordered w-full cursor-pointer' readOnly value={format(checkInDate, 'PP')} />
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
                                <span className='label-text'>Check-out</span>
                            </label>
                            <input onClick={() => setShowCheckOutDatePicker(!showCheckOutDatePicker)} type='text' placeholder='Select A Date' className='input input-bordered w-full cursor-pointer' readOnly value={format(checkOutDate, 'PP')} />
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