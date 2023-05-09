import React, { useState, useEffect, useCallback, useMemo } from 'react';

function Contact(props) {

  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [cell, Setcell] = useState('');
  const [type, Settype] = useState(''); 
  const [message, Setmessage] = useState('');

  const [nameErr, SetnameErr] = useState("");
  const [emailErr, SetemailErr] = useState("");
  const [cellErr, SetcellErr] = useState("");
  const [typeErr, SettypeErr] = useState("");
  const [messageErr, SetmessageErr] = useState("");

  const [successBox, SetsuccessBox] = useState(false);

  const [finaldata, Setfinaldata] = useState({});

  function clearSubmission() {
    SetnameErr("");
    SetemailErr("");
    SetcellErr("");
    SettypeErr("");
    SetmessageErr("");
  }

  const submitForm = () => {
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
    if (type == undefined || type == "") {
      SettypeErr("select your type");
    }
    if (message == undefined || message == "" || message.length <= 25) {
      SetmessageErr("enter your message");
    }
    if (name != '' &&
      email != '' &&
      cell != '' &&
      type != '' &&
      message != '') {
      const getdata = {
        name,
        email,
        cell,
        type,
        message
      }
      Setfinaldata(getdata);
      setTimeout(() => {
        Setname('');
        Setemail('');
        Setcell('');
        Settype('');
        Setmessage('');
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
              Thanks for your subbmission {finaldata.name}, We will get back to
              you shortly!
            </p>
          </div>
        </dd>}
      <div className='contactContant'>
        <h5>Contact</h5>
        <div className='formBox'>
          <div className='filedBox'>
            <label>Name</label>
            <input type='text' value={name} onChange={(e) => Setname(e.target.value)} />
            <p className='error'>{nameErr}</p>
          </div>
          <div className='filedBox'>
            <label>Email</label>
            <input type='email' value={email} onChange={(e) => Setemail(e.target.value)} />
            <p className='error'>{emailErr}</p>
          </div>
          <div className='filedBox'>
            <label>Cell</label>
            <input type='text' value={cell} onChange={(e) => Setcell(e.target.value)} />
            <p className='error'>{cellErr}</p>
          </div>
          <div className='filedBox'>
            <label>Type Of enquiry</label>
            <select value={type} onChange={(e) => { Settype(e.target.value) }}>
              <option value="">All</option>
              <option value="Freelance Project perposal">Freelance Project perposal</option>
              <option value="Mobile app project">Mobile app project</option>
              <option value="Web app project">Web app project</option>
            </select>
            <p className='error'>{typeErr}</p>
          </div>
          <div className='textareaBox'>
            <label>Your Message</label>
            <textarea value={message} onChange={(e) => Setmessage(e.target.value)}></textarea>
            <p className='error'>{messageErr}</p>
          </div>
          <button onClick={() => submitForm()}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
