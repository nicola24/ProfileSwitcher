import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import { cyan500 } from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Code from 'material-ui/svg-icons/action/code';
import Apps from 'material-ui/svg-icons/navigation/apps';

const styles = {
  chip: {
    margin: 20,
    height: 32,
  },
};

const Header = () => (
  <header className="animated flash">
    <IconMenu
      iconButtonElement={<IconButton><Apps /></IconButton>}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
      <MenuItem>
        <Chip style={styles.chip}>
          <Avatar icon={<i className="fab fa-github" />} backgroundColor={cyan500} />
          <a href="https://github.com/nicola24" target="_blank" rel="noopener noreferrer">
            By Nicolas Peyrichou
          </a>
        </Chip>
      </MenuItem>
      <MenuItem>
        <Chip style={styles.chip}>
          <Avatar icon={<i className="fab fa-react" />} backgroundColor={cyan500} />
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            ReactJS
          </a>
        </Chip>
      </MenuItem>
      <MenuItem>
        <Chip style={styles.chip}>
          <Avatar icon={<i className="fab fa-node-js" />} backgroundColor={cyan500} />
          <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
            NodeJS
          </a>
        </Chip>
      </MenuItem>
      <MenuItem>
        <Chip style={styles.chip}>
          <Avatar icon={<i className="fab fa-js-square" />} backgroundColor={cyan500} />
          <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
            ExpressJS
          </a>
        </Chip>
      </MenuItem>
      <MenuItem>
        <Chip style={styles.chip}>
          <Avatar icon={<Code />} backgroundColor={cyan500} />
          <a href="http://www.material-ui.com/#/" target="_blank" rel="noopener noreferrer">
            Material-UI
          </a>
        </Chip>
      </MenuItem>
    </IconMenu>
  </header>
);

export default Header;
