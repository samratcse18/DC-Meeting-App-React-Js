import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { datetime } from '../StyledComponents/Login.Style';

const CustomDateTimePicker = ({ value, onChange }) => {
    const customDateTimeFormat = 'EEE - dd MMM, yyyy HH:mm aa';

    // Custom Input component for DatePicker
    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <div style={{background:'#F0F3F4',width:'229px'}}>
            <input
                type="text"
                value={value||'Select date and time'}
                onClick={onClick}
                readOnly
                ref={ref}
                style={datetime}
            />
        </div>
    ));

    return (
        <div>
            <DatePicker
                selected={value}
                onChange={onChange}
                showTimeSelect
                dateFormat={customDateTimeFormat}
                timeFormat="HH:mm aa"
                timeIntervals={15}
                customInput={<CustomInput value={format(value, customDateTimeFormat)} />}
            />
        </div>
    );
};

export default CustomDateTimePicker;
