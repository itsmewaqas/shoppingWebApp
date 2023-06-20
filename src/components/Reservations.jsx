import React, { useState, useEffect } from 'react';
import CustomDrop from '../sharedComponents/CustomDrop';
import { useLocation } from "react-router-dom";

function Reservations(props) {


  const location = useLocation();
  const data = location.state;
  console.log(data);

  const [seating, Setseating] = useState('');
  const [reservedDate, SetreservedDate] = useState('');

  const numberOfMembers = [
    {
      id: 0,
      mNum: '1 Diner',
    },
    {
      id: 1,
      mNum: '2 Diners',
    },
    {
      id: 2,
      mNum: '3 Diners',
    },
    {
      id: 3,
      mNum: '4 Diners',
    },
    {
      id: 4,
      mNum: '5 Diners',
    },
    {
      id: 5,
      mNum: '6 Diners',
    },
    {
      id: 6,
      mNum: '7 Diners',
    },
    {
      id: 7,
      mNum: '8 Diners',
    },
    {
      id: 8,
      mNum: '9 Diners',
    },
    {
      id: 9,
      mNum: '10 Diners',
    }
  ];

  const selectTime = [
    {
      id: 0,
      bTime: '5:00 pm',
    },
    {
      id: 1,
      bTime: '6:00 pm',
    },
    {
      id: 2,
      bTime: '7:00 pm',
    },
    {
      id: 3,
      bTime: '8:00 pm',
    },
    {
      id: 4,
      bTime: '9:00 pm',
    },
    {
      id: 5,
      bTime: '10:00 pm',
    }
  ];

  const occasion = [
    {
      id: 0,
      sOccasion: 'Birthday',
    },
    {
      id: 1,
      sOccasion: 'Engagement',
    },
    {
      id: 2,
      sOccasion: 'Anniversary',
    }
  ];

  const [chooseMember, SetchooseMember] = useState('');
  const selectMember = (item) => {
    SetchooseMember(item.mNum);
  }

  const [chooseTime, SetchooseTime] = useState('');
  const seletcTime = (item) => {
    SetchooseTime(item.bTime);
  }

  const [chooseOccasion, SetchooseOccasion] = useState('');
  const selectOccasion = (item) => {
    SetchooseOccasion(item.sOccasion);
  }

  const [firstName, SetfirstName] = useState('');
  const [lastName, SetlastName] = useState('');
  const [email, Setemail] = useState('');
  const [cell, Setcell] = useState('');
  const [specialRequest, SetspecialRequest] = useState('');

  const [seatingErr, SetseatingErr] = useState("");
  const [reservedDateErr, SetreservedDateErr] = useState("");
  const [chooseMemberErr, SetchooseMemberErr] = useState("");
  const [chooseTimeErr, SetchooseTimeErr] = useState("");
  const [chooseOccasionErr, SetchooseOccasionErr] = useState("");

  const [firstNameErr, SetfirstNameErr] = useState("");
  const [lastNameErr, SetlastNameErr] = useState("");
  const [emailErr, SetemailErr] = useState("");
  const [cellErr, SetcellErr] = useState("");
  const [specialRequestErr, SetspecialRequestErr] = useState("");

  const [successBox, SetsuccessBox] = useState(false);
  const [finaldata, Setfinaldata] = useState({});


  function clearSubmission() {
    SetseatingErr("");
    SetreservedDateErr("");
    SetchooseMemberErr("");
    SetchooseTimeErr("");
    SetchooseOccasionErr("");
    SetfirstNameErr("");
    SetlastNameErr("");
    SetemailErr("");
    SetcellErr("");
    SetspecialRequestErr("");
  }

  const [formStep1, SetformStep1] = useState(true);
  const [formStep2, SetformStep2] = useState(false);

  const step1 = () => {
    clearSubmission();
    if (seating == undefined || seating == "") {
      SetseatingErr("Select Seating");
    }
    if (reservedDate == undefined || reservedDate == "") {
      SetreservedDateErr("Select Data");
    }
    if (chooseMember == undefined || chooseMember == "") {
      SetchooseMemberErr("Select No Of Member");
    }
    if (chooseTime == undefined || chooseTime == "") {
      SetchooseTimeErr("Select Time");
    }
    if (chooseOccasion == undefined || chooseOccasion == "") {
      SetchooseOccasionErr("Select Occasion");
    }
    if (seating != '' &&
      reservedDate != '' &&
      chooseMember != '' &&
      chooseTime != '' &&
      chooseOccasion != '') {
      SetformStep1(false);
      SetformStep2(true);
    }
    else {
      return false
    }
  }

  const editInfo = () => {
    SetformStep1(true);
    SetformStep2(false);
  }

  const reservedFunc = () => {
    clearSubmission();
    if (firstName == undefined || firstName == "" || firstName.length <= 5) {
      SetfirstNameErr("enter first name above 5 character");
    }
    if (lastName == undefined || lastName == "" || lastName.length <= 5) {
      SetlastNameErr("enter last name above 5 character");
    }
    var emailRgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == undefined || email == "" || !emailRgx.test(email)) {
      SetemailErr("enter your valid email address");
    }
    var cellRgx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (cell == undefined || cell == "" || (cellRgx.test(cell) == false)) {
      SetcellErr("enter your valid cell number");
    }
    if (specialRequest == undefined || specialRequest == "") {
      SetspecialRequestErr("you can write here special request");
    }
    if (firstName != '' &&
      lastName != '' &&
      email != '' &&
      cell != '' &&
      specialRequest != '') {
      const getdata = {
        seating,
        reservedDate,
        chooseMember,
        chooseTime,
        chooseOccasion,
        firstName,
        lastName,
        email,
        cell,
        specialRequest,
      }
      Setfinaldata(getdata);
      setTimeout(() => {
        Setseating('');
        SetreservedDate('');
        SetchooseMember('');
        SetchooseTime('');
        SetchooseOccasion('');
        SetfirstName('');
        SetlastName('');
        Setemail('');
        Setcell('');
        SetspecialRequest('');
        SetformStep1(true);
        SetformStep2(false);
        SetsuccessBox(true);
      }, 1000);
      console.log(getdata);
    }
    else {
      return false
    }
  }

  useEffect(() => {
    // console.log('get res...',props.state);
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
              Thanks you for the Restaurant Reservation '{finaldata.firstName}' we will meet in the restaurant with best services.
            </p>
          </div>
        </dd>}
      <div className='reservationsBlock'>
        <div className='container clearfix'>
          <h3>Reservation</h3>
          {formStep1 &&
            <div className='reservationsFormBlock'>
              <div>
                <label className='venueSelect'>Indoor Seating
                  <input type="radio" checked={seating === 'Indoorseating'} value="Indoorseating" onChange={() => Setseating('Indoorseating')} />
                </label>
              </div>
              <div>
                <label className='venueSelect'>Outdoor Seating
                  <input type="radio" checked={seating === 'Outdoorseating'} value="Outdoorseating" onChange={() => Setseating('Outdoorseating')} />
                </label>
                <p className='error'>{seatingErr}</p>
              </div>
              <div>
                <label className='venueSelect'>Number Of Diners</label>
                <CustomDrop
                  categoryIcon={require('../assets/img/peopleIcon.png')}
                  widthSet={{ width: "50%", float: 'left' }}
                  data={numberOfMembers}
                  selectFinalValue={chooseMember || 'Select No Of Diners'}
                  selectRandomValue={(item) => selectMember(item)}
                />
                <p className='error'>{chooseMemberErr}</p>
              </div>
              <div>
                <label className='venueSelect'>Time</label>
                <CustomDrop
                  categoryIcon={require('../assets/img/timeIcon.png')}
                  widthSet={{ width: "50%", float: 'left' }}
                  data={selectTime}
                  selectFinalValue={chooseTime || 'Select Time'}
                  selectRandomValue={(item) => seletcTime(item)}
                />
                <p className='error'>{chooseTimeErr}</p>
              </div>
              <div>
                <label className='venueSelect'>Occasion</label>
                <CustomDrop
                  categoryIcon={require('../assets/img/occasionIcon.png')}
                  data={occasion}
                  selectFinalValue={chooseOccasion || 'Occasion'}
                  selectRandomValue={(item) => selectOccasion(item)}
                />
                <p className='error'>{chooseOccasionErr}</p>
              </div>
              <div>
                <label className='venueSelect'>Date</label>
                <input type="date" className='customDataStyle' value={reservedDate} onChange={(e) => SetreservedDate(e.target.value)} />
                <p className='error'>{reservedDateErr}</p>
              </div>
              <div></div>
              <div>
                <button className='reserveBtn' onClick={() => step1()}>Next</button>
              </div>
            </div>}
          {formStep2 &&
            <div className='reservationsFormBlock'>
              <div className='reservationsForm'>
                <label>First Name</label>
                <input type="text" value={firstName} onChange={(e) => SetfirstName(e.target.value)} />
                <p className='error'>{firstNameErr}</p>
              </div>
              <div className='reservationsForm'>
                <label>Last Name</label>
                <input type="text" value={lastName} onChange={(e) => SetlastName(e.target.value)} />
                <p className='error'>{lastNameErr}</p>
              </div>
              <div className='reservationsForm'>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => Setemail(e.target.value)} />
                <p className='error'>{emailErr}</p>
              </div>
              <div className='reservationsForm'>
                <label>Cell</label>
                <input type="text" value={cell} onChange={(e) => Setcell(e.target.value)} />
                <p className='error'>{cellErr}</p>
              </div>
              <div className='fetchInfo'>
                <p><span>{seating}</span></p>
                <p><button className='editInfoBtn' onClick={() => editInfo()}><img src={require('../assets/img/editInfo.png')} /></button></p>
                <div className='clearfix'></div>
                <p><img src={require('../assets/img/peopleIcon1.png')} /><span>{chooseMember}</span></p>
                <p><img src={require('../assets/img/timeIcon1.png')} /><span>{chooseTime}</span></p>
                <p><img src={require('../assets/img/occasionIcon1.png')} /><span>{chooseOccasion}</span></p>
                <p><img src={require('../assets/img/dateIcon1.png')} /><span>{reservedDate}</span></p>
              </div>
              <div className='reservationsForm'>
                <label>Special Request</label>
                <textarea cols={30} rows={5} value={specialRequest} onChange={(e) => SetspecialRequest(e.target.value)}></textarea>
                <p className='error'>{specialRequestErr}</p>
              </div>
              <div></div>
              <div>
                <button className='reserveBtn' onClick={() => reservedFunc()}>Reserved</button>
              </div>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default Reservations;