import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
  },
  paper: {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
};

const User = ({ singleUser }) => (
  <div style={styles.root}>
    <GridList
      cellHeight={250}
      style={styles.gridList}
    >
      <GridTile className="animated slideInLeft">
        <Paper style={styles.paper} zDepth={3} rounded={false}>
          <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="profile_photo" height="100" width="100" />
        </Paper>
      </GridTile>
      <GridTile className="animated slideInLeft">
        <Paper style={styles.paper} zDepth={3} rounded={false}>
          <h2>Profile</h2>
          <p>{singleUser.name}</p>
          <p>{singleUser.username}</p>
          <p>{singleUser.email}</p>
          <p>{singleUser.phone}</p>
          <p>{singleUser.website}</p>
        </Paper>
      </GridTile>
      <GridTile className="animated slideInRight">
        <Paper style={styles.paper} zDepth={3} rounded={false}>
          <h2>About Me</h2>
          <p>{singleUser.company.name}</p>
          <p>{singleUser.company.catchPhrase}</p>
          <p>{singleUser.company.bs}</p>
        </Paper>
      </GridTile>
      <GridTile className="animated slideInRight">
        <Paper style={styles.paper} zDepth={3} rounded={false}>
          <h2>Address</h2>
          <p>{singleUser.address.street}</p>
          <p>{singleUser.address.suite}</p>
          <p>{singleUser.address.city}</p>
          <p>{singleUser.address.zipcode}</p>
        </Paper>
      </GridTile>
    </GridList>
  </div>
);

User.propTypes = {
  singleUser: PropTypes.shape({
  }).isRequired,
};

export default User;


// import React from 'react';
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
//
// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//     overflowY: 'auto',
//   },
// };
//
// const tilesData = [
//   {
//     img: 'images/grid-list/00-52-29-429_640.jpg',
//     title: 'Breakfast',
//     author: 'jill111',
//   },
//   {
//     img: 'images/grid-list/burger-827309_640.jpg',
//     title: 'Tasty burger',
//     author: 'pashminu',
//   },
// ];
//
// const GridListExampleSimple = () => (
//   <div style={styles.root}>
//     <GridList
//       cellHeight={180}
//       style={styles.gridList}
//     >
//       <Subheader>December</Subheader>
//       {tilesData.map((tile) => (
//         <GridTile
//           key={tile.img}
//           title={tile.title}
//           subtitle={<span>by <b>{tile.author}</b></span>}
//           actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
//         >
//           <img src={tile.img} />
//         </GridTile>
//       ))}
//     </GridList>
//   </div>
// );
//
// export default GridListExampleSimple;
