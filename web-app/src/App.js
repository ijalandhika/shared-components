import React, { useState, useEffect } from "react";
import { Skeleton, Card  } from 'core-ui';

const practitioner = {
  facility: 'A’dvanced Center for Daycare Surgery Abu Dhabi (ACDS)',
  practitioner: 'Dr. Rashid al Ahmed',
  images: {
    url: 'https://img.okadoc.co/plain/200x200/uploads/doctor/photo/65657/okadoc-doctor-psychiatrist-azeri-mednet-out-network-20220208095351.jpg', 
    alt: 'this is just testing '
  }
}
function App() {
  const delay = 5;

  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);


  if (!show) {
    return <div style={{ padding: "50px"}}>
      <Skeleton />
    </div>
  }

  return (
    <div style={{ padding: "50px"}}>

        <Card facility={practitioner.facility} practitioner={practitioner.practitioner} images={practitioner.images} />
    </div>
  );
}

export default App;
