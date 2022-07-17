import React, { useEffect, useState } from 'react';
import P from 'prop-types';

function User({ userInfo }) {
  const [userName, setUserName] = useState(userInfo?.name);

  console.log(userName);

  // useEffect(() => {
  //   const { lastName } = userInfo;

  //   if (lastName) {
  //     setUserName((previousName) => previousName + ' ' + lastName);
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   const { lastName } = userInfo;

  //   if (lastName) {
  //     setUserName((previousName) => previousName + ' ' + lastName);
  //   }
  // }, [userInfo]);

  useEffect(() => {
    const lastName = userInfo?.lastName;

    if (lastName) {
      setUserName((previousName) => previousName + ' ' + lastName);
    }
  }, [userInfo?.lastName]);

  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
}

export default User;

User.propTypes = {
  userInfo: P.object.isRequired,
};
