import React, { useState, useEffect } from 'react';

function Reservations(props) {

  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [cell, Setcell] = useState('');
  const [ofGuests, SetofGuests] = useState('');
  const [reservationDate, SetreservationDate] = useState('');
  const [reservationTime, SetreservationTime] = useState('');
  const [reservationType, SetreservationType] = useState('');
  const [ifOther, SetifOther] = useState('');
  const [anySpecial, SetanySpecial] = useState('');

  const [nameErr, SetnameErr] = useState("");
  const [emailErr, SetemailErr] = useState("");
  const [cellErr, SetcellErr] = useState("");
  const [ofGuestsErr, SetofGuestsErr] = useState("");
  const [reservationDateErr, SetreservationDateErr] = useState("");
  const [reservationTimeErr, SetreservationTimeErr] = useState("");
  const [reservationTypeErr, SetreservationTypeErr] = useState("");
  const [ifOtherErr, SetifOtherErr] = useState("");
  const [anySpecialErr, SetanySpecialErr] = useState("");

  const [successBox, SetsuccessBox] = useState(false);
  const [finaldata, Setfinaldata] = useState({});

  function clearSubmission() {
    SetnameErr("");
    SetemailErr("");
    SetcellErr("");
    SetofGuestsErr("");
    SetreservationDateErr("");
    SetreservationTimeErr("");
    SetreservationTypeErr("");
    SetifOtherErr("");
    SetanySpecialErr("");
  }

  const reservedFunc = () => {
    clearSubmission();
    if (name == undefined || name == "" || name.length <= 5) {
      SetnameErr("enter name above 5 character");
    }
    var emailRgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == undefined || email == "" || !emailRgx.test(email)) {
      SetemailErr("enter your valid email address");
    }
    var cellRgx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (cell == undefined || cell == "" || (cellRgx.test(cell) == false)) {
      SetcellErr("enter your valid cell number");
    }
    if (ofGuests == undefined || ofGuests == "") {
      SetofGuestsErr("please enter data");
    }
    if (reservationDate == undefined || reservationDate == "") {
      SetreservationDateErr("select reservation date");
    }
    if (reservationTime == undefined || reservationTime == "") {
      SetreservationTimeErr("select reservation time");
    }
    if (reservationType == undefined || reservationType == "") {
      SetreservationTypeErr("select reservation time");
    }
    if (ifOther == undefined || ifOther == "") {
      SetifOtherErr("please enter if other");
    }
    if (anySpecial == undefined || anySpecial == "") {
      SetanySpecialErr("please enter any special requests");
    }
    if (name != '' &&
      email != '' &&
      cell != '' &&
      ofGuests != '' &&
      reservationDate != '' &&
      reservationTime != '' &&
      reservationType != '' &&
      ifOther != '' &&
      anySpecial != '') {
      const getdata = {
        name,
        email,
        cell,
        ofGuests,
        reservationDate,
        reservationTime,
        reservationType,
        ifOther,
        anySpecial,
      }
      Setfinaldata(getdata);
      setTimeout(() => {
        Setname('');
        Setemail('');
        Setcell('');
        SetofGuests('');
        SetreservationDate('');
        SetreservationTime('');
        SetreservationType('');
        SetifOther('');
        SetanySpecial('');
        SetsuccessBox(true);
      }, 1000);
    }
    else {
      return false
    }
  }


  useEffect(() => {
  }, [])

  return (
    <div>
      {successBox &&
        <dd>
          <div className='overlay' onClick={() => SetsuccessBox(false)}></div>
          <div className='successBox'>
            <button className='close' onClick={() => SetsuccessBox(false)}>X</button>
            <p>
              <strong>All good!</strong>
              Thanks you for the Restaurant Reservation '{finaldata.name}' we will meet in the restaurant with best services.
            </p>
          </div>
        </dd>}
      <div className='container' style={{ paddingBottom: '180px' }}>
        <h3>Reservations</h3>
        <h4>Restaurant Reservation Form</h4>
        <div className='formBox'>
          <div>
            <label>Full Name</label>
            <input type="text" value={name} onChange={(e) => Setname(e.target.value)} />
            <p className='error'>{nameErr}</p>
          </div>
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => Setemail(e.target.value)} />
            <p className='error'>{emailErr}</p>
          </div>
          <div>
            <label>Cell</label>
            <input type="text" value={cell} onChange={(e) => Setcell(e.target.value)} />
            <p className='error'>{cellErr}</p>
          </div>
          <div>
            <label>of Guests</label>
            <input type="text" value={ofGuests} onChange={(e) => SetofGuests(e.target.value)} />
            <p className='error'>{ofGuestsErr}</p>
          </div>
          <div>
            <label>Select Reservation Date</label>
            <input type="date" value={reservationDate} onChange={(e) => SetreservationDate(e.target.value)} />
            <p className='error'>{reservationDateErr}</p>
          </div>
          <div>
            <label>Select Time</label>
            <input type="time" value={reservationTime} onChange={(e) => SetreservationTime(e.target.value)} />
            <p className='error'>{reservationTimeErr}</p>
          </div>
          <div>
            <label>Reservation Type</label>
            <select value={reservationType} onChange={(e) => { SetreservationType(e.target.value) }}>
              <option value="">Please Select</option>
              <option value="Dinner">Dinner</option>
              <option value="VIP/Mezzanine">VIP/Mezzanine</option>
              <option value="Birthday/ Anniversary">Birthday/ Anniversary</option>
              <option value="Nightlife">Nightlife</option>
              <option value="Private">Private</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate">Corporate</option>
              <option value="Holiday">Holiday</option>
              <option value="Other">Other</option>
            </select>
            <p className='error'>{reservationTypeErr}</p>
          </div>
          <div>
            <label>If Other above, please specify</label>
            <input type="text" value={ifOther} onChange={(e) => SetifOther(e.target.value)} />
            <p className='error'>{ifOtherErr}</p>
          </div>
          <div>
            <label>Any special requests</label>
            <textarea value={anySpecial} onChange={(e) => SetanySpecial(e.target.value)}></textarea>
            <p className='error'>{anySpecialErr}</p>
          </div>
        </div>
        <button className='reserveBtn' onClick={() => reservedFunc()}>Reserve</button>
      </div>
    </div>
  );
}

export default Reservations;