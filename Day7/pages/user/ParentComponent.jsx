// ParentComponent.jsx
import React, { useState } from 'react';
import Enrollment from './enrollment';
import Profile from './Profile';

function ParentComponent() {
  const [enrollmentData, setEnrollmentData] = useState(null);

  return (
    <div>
      <Enrollment onSubmit={setEnrollmentData} />
      {enrollmentData && <Profile enrollmentData={enrollmentData} />}
    </div>
  );
}

export default ParentComponent;
