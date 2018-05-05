import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Face from 'material-ui/svg-icons/action/face';
import Earth from 'material-ui/svg-icons/action/language';
import Call from 'material-ui/svg-icons/communication/call';
import Chat from 'material-ui/svg-icons/communication/chat';
import Email from 'material-ui/svg-icons/communication/email';
import Business from 'material-ui/svg-icons/communication/business';
import Location from 'material-ui/svg-icons/maps/pin-drop';
import MyLocation from 'material-ui/svg-icons/maps/my-location';
import Direction from 'material-ui/svg-icons/maps/directions';
import Navigation from 'material-ui/svg-icons/maps/navigation';
import Assignment from 'material-ui/svg-icons/action/assignment-ind';
import Build from 'material-ui/svg-icons/action/build';
// import { blue500 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridList: {
    width: 700,
    height: 700,
    overflowY: 'auto',
  },
};

const User = ({ singleUser }) => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight="340"
      padding={1}
      style={styles.gridList}
    >
      <GridTile className="animated fadeInLeft">
        <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="profile_photo" />
      </GridTile>
      <GridTile className="animated fadeInLeft">
        <List>
          <ListItem>
            <AppBar title="Profile" showMenuIconButton={false} />
          </ListItem>
          <ListItem primaryText={singleUser.name} leftIcon={<Face />} />
          <ListItem primaryText={singleUser.username} leftIcon={<Chat />} />
          <ListItem primaryText={(singleUser.email).toLowerCase()} leftIcon={<Email />} />
          <ListItem primaryText={singleUser.phone} leftIcon={<Call />} />
          <ListItem primaryText={`www.${singleUser.website}`} leftIcon={<Earth />} />
        </List>
      </GridTile>
      <GridTile className="animated fadeInRight">
        <List>
          <ListItem>
            <AppBar title="About Me" showMenuIconButton={false} />
          </ListItem>
          <ListItem primaryText={singleUser.company.name} leftIcon={<Business />} />
          <ListItem primaryText={singleUser.company.catchPhrase} leftIcon={<Assignment />} />
          <ListItem primaryText={singleUser.company.bs} leftIcon={<Build />} />
        </List>
      </GridTile>
      <GridTile className="animated fadeInRight">
        <List>
          <ListItem>
            <AppBar title="Address" showMenuIconButton={false} />
          </ListItem>
          <ListItem primaryText={singleUser.address.street} leftIcon={<Location />} />
          <ListItem primaryText={singleUser.address.suite} leftIcon={<MyLocation />} />
          <ListItem primaryText={singleUser.address.city} leftIcon={<Navigation />} />
          <ListItem primaryText={singleUser.address.zipcode} leftIcon={<Direction />} />
        </List>
      </GridTile>
    </GridList>
  </div>
);

User.propTypes = {
  singleUser: PropTypes.shape({
  }).isRequired,
};

export default User;
