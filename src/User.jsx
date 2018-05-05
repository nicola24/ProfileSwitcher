import React from 'react';
import PropTypes from 'prop-types';

const User = ({ singleUser }) => (
  <div>
    <div id="profile_photo">
      <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="profile_photo" height="100" width="100" />
    </div>
    <div id="profile">
      <h2>Profile</h2>
      <p>{singleUser.name}</p>
      <p>{singleUser.username}</p>
      <p>{singleUser.email}</p>
      <p>{singleUser.phone}</p>
      <p>{singleUser.website}</p>
    </div>
    <div>
      <h2 id="about_me">About Me</h2>
      <p>{singleUser.company.name}</p>
      <p>{singleUser.company.catchPhrase}</p>
      <p>{singleUser.company.bs}</p>
    </div>
    <div id="address">
      <h2>Address</h2>
      <p>{singleUser.address.street}</p>
      <p>{singleUser.address.suite}</p>
      <p>{singleUser.address.city}</p>
      <p>{singleUser.address.zipcode}</p>
    </div>
  </div>
);

User.propTypes = {
  singleUser: PropTypes.shape({
  }).isRequired,
};

export default User;
