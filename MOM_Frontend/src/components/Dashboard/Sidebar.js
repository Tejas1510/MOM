import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import CallIcon from '@material-ui/icons/Call';
import InfoIcon from '@material-ui/icons/Info';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import logo from './Meet Digest.png';
import './style.css';
import Card from './OutlinedCard.js'
import Chip from '@material-ui/core/Chip';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { NavLink, useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
    height: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,

    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();

  //console.log(props)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="App">
      <div className={classes.toolbar} style={{ backgroundColor: 'white', color: 'black' }} >
        <Typography variant="h5" noWrap style={{ color: 'black', padding: '16px' }}>
          <img src={logo} width="25%" />Meet Digest
          </Typography>
      </div>
      <Divider />
      <List >
        <ListItem>
          <Chip
            avatar={<Avatar style={{fontSize: 'large'}}>{props.name.charAt(0).toUpperCase()}</Avatar>}
            label={props.name}
            clickable
            color="secondary"
            style={{fontSize:'large'}}
          />
        </ListItem>

        <NavLink to="/">
          <ListItem button>
            <HomeIcon style={{ color: 'white' }}></HomeIcon>
            <ListItemText primary="Home" style={{ marginLeft: '30px',color:'white' }} />
          </ListItem>
        </NavLink >

        <NavLink to="/aboutus">
        <ListItem button>
          <InfoIcon style={{ color: 'white' }}></InfoIcon>
          <ListItemText primary="About Us" style={{ marginLeft: '30px',color:'white' }} />
        </ListItem>
        </NavLink>

      </List>
      <Divider style={{ backgroundColor: 'white' }} />
      
      <List>

      <NavLink to="/contactus">
        <ListItem button>
          <CallIcon style={{ color: 'white' }}></CallIcon>
          <ListItemText primary="Contact Us" style={{ marginLeft: '30px',color:'white' }} />
        </ListItem>
        </NavLink>

        <ListItem button onClick={() => {
            props.logoutHandler();
            history.push('/');
          }}>
          <ExitToAppIcon style={{ color: 'white' }}></ExitToAppIcon>
          <ListItemText primary="Logout" style={{ marginLeft: '30px' }} />
        </ListItem>

      </List>


    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  //console.log('hello');
  //console.log(typeof props.meetL)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            Dashboard
          </Typography>




        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
        {
          props.meetL.map((meet, index) => <Card key={index} meet={meet}></Card>)          
        }
        

      </main>
    </div>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
