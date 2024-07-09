/*import React, { useState } from 'react';

const HostPage = () => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventHost, setEventHost] = useState('');

  const handleEventCreation = (event) => {
    event.preventDefault();
    const newEvent = { name: eventName, date: eventDate, description: eventDescription, host: eventHost };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEventName('');
    setEventDate('');
    setEventDescription('');
    setEventHost('');
    alert('Event created successfully!');
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px',
      width: '300px',
      textAlign: 'left',
    },
    input: {
      padding: '8px',
      margin: '5px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    textarea: {
      padding: '8px',
      margin: '5px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      resize: 'vertical',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Create a New Event</h2>
      <form onSubmit={handleEventCreation} style={styles.form}>
        <label style={styles.label}>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Date:
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Description:
          <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} required style={styles.textarea} />
        </label>
        <label style={styles.label}>
          Organization Host:
          <input type="text" value={eventHost} onChange={(e) => setEventHost(e.target.value)} required style={styles.input} />
        </label>
        <button type="submit" style={styles.button}>Create Event</button>
      </form>
    </div>
  );
};

export default HostPage;*/
/*import React, { useState } from 'react';

const HostPage = () => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventHost, setEventHost] = useState('');

  const handleEventCreation = (event) => {
    event.preventDefault();
    const newEvent = { name: eventName, date: eventDate, description: eventDescription, host: eventHost };
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const updatedEvents = [...savedEvents, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEventName('');
    setEventDate('');
    setEventDescription('');
    setEventHost('');
    alert('Event created successfully!');
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px',
      width: '300px',
      textAlign: 'left',
    },
    input: {
      padding: '8px',
      margin: '5px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    textarea: {
      padding: '8px',
      margin: '5px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      resize: 'vertical',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Create a New Event</h2>
      <form onSubmit={handleEventCreation} style={styles.form}>
        <label style={styles.label}>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Date:
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Description:
          <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} required style={styles.textarea} />
        </label>
        <label style={styles.label}>
          Organization Host:
          <input type="text" value={eventHost} onChange={(e) => setEventHost(e.target.value)} required style={styles.input} />
        </label>
        <button type="submit" style={styles.button}>Create Event</button>
      </form>
    </div>
  );
};

export default HostPage;*/


/*import React, { useState } from 'react';

const HostPage = () => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventHost, setEventHost] = useState('');
  const [eventImage, setEventImage] = useState(null);

  const handleEventCreation = (event) => {
    event.preventDefault();
    const newEvent = { name: eventName, date: eventDate, description: eventDescription, host: eventHost, image: eventImage };
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const updatedEvents = [...savedEvents, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEventName('');
    setEventDate('');
    setEventDescription('');
    setEventHost('');
    setEventImage(null);
    alert('Event created successfully!');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEventImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px',
      width: '300px',
      textAlign: 'left',
    },
    input: {
      padding: '8px',
      margin: '5px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    textarea: {
      padding: '8px',
      margin: '5px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      resize: 'vertical',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Create a New Event</h2>
      <form onSubmit={handleEventCreation} style={styles.form}>
        <label style={styles.label}>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Date:
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Description:
          <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} required style={styles.textarea} />
        </label>
        <label style={styles.label}>
          Organization Host:
          <input type="text" value={eventHost} onChange={(e) => setEventHost(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Image:
          <input type="file" accept="image/*" onChange={handleImageChange} style={styles.input} />
        </label>
        <button type="submit" style={styles.button}>Create Event</button>
      </form>
    </div>
  );
};

export default HostPage;*/



/*import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const HostPage = () => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventHost, setEventHost] = useState('');
  const [eventImage, setEventImage] = useState(null);

  const history = useHistory();

  const handleEventCreation = (event) => {
    event.preventDefault();
    const newEvent = { name: eventName, date: eventDate, description: eventDescription, host: eventHost, image: eventImage };
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const updatedEvents = [...savedEvents, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEventName('');
    setEventDate('');
    setEventDescription('');
    setEventHost('');
    setEventImage(null);
    alert('Event created successfully!');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEventImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteEvent = () => {
    history.push('/delete-event');
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px',
      width: '300px',
      textAlign: 'left',
    },
    input: {
      padding: '8px',
      margin: '5px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    textarea: {
      padding: '8px',
      margin: '5px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      resize: 'vertical',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
    deleteButton: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#dc3545',
      color: 'white',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Create a New Event</h2>
      <form onSubmit={handleEventCreation} style={styles.form}>
        <label style={styles.label}>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Date:
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Description:
          <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} required style={styles.textarea} />
        </label>
        <label style={styles.label}>
          Organization Host:
          <input type="text" value={eventHost} onChange={(e) => setEventHost(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Image:
          <input type="file" accept="image/*" onChange={handleImageChange} style={styles.input} />
        </label>
        <button type="submit" style={styles.button}>Create Event</button>
      </form>
      <button onClick={handleDeleteEvent} style={styles.deleteButton}>Delete Event</button>
    </div>
  );
};

export default HostPage;*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HostPage = () => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventHost, setEventHost] = useState('');
  const [eventImage, setEventImage] = useState(null);

  const navigate = useNavigate();

  const handleEventCreation = (event) => {
    event.preventDefault();
    const newEvent = { name: eventName, date: eventDate, description: eventDescription, host: eventHost, image: eventImage };
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const updatedEvents = [...savedEvents, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEventName('');
    setEventDate('');
    setEventDescription('');
    setEventHost('');
    setEventImage(null);
    alert('Event created successfully!');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEventImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteEvent = () => {
    navigate('/delete-event');
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px',
      width: '300px',
      textAlign: 'left',
    },
    input: {
      padding: '8px',
      margin: '5px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    textarea: {
      padding: '8px',
      margin: '5px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      resize: 'vertical',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
    deleteButton: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#dc3545',
      color: 'white',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Create a New Event</h2>
      <form onSubmit={handleEventCreation} style={styles.form}>
        <label style={styles.label}>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Date:
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Description:
          <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} required style={styles.textarea} />
        </label>
        <label style={styles.label}>
          Organization Host:
          <input type="text" value={eventHost} onChange={(e) => setEventHost(e.target.value)} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Event Image:
          <input type="file" accept="image/*" onChange={handleImageChange} style={styles.input} />
        </label>
        <button type="submit" style={styles.button}>Create Event</button>
      </form>
      <button onClick={handleDeleteEvent} style={styles.deleteButton}>Delete Event</button>
    </div>
  );
};

export default HostPage;




