import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { IconButton } from '@mui/material';
import OrderList from '../OrderList/OrderList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';


const drawerWidth = 240;

function AdminDashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ textAlign: "left", paddingLeft: "20px" }}>
            <Toolbar />
            <Divider />
            <Link to="/home" style={{ marginRight: "20px", textDecoration: "none", }}>Home</Link> <br />
            <Link to={`${url}/orderList`} style={{ textDecoration: "none", }}>Order List</Link><br />
            <Link to={`${url}/addService`} style={{ textDecoration: "none", }}>Add Service</Link><br />
            <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none", }}>Make Admin</Link><br />
            <Link to={`${url}/manageServices`} style={{ textDecoration: "none", }}>Manage Services</Link><br />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Control
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}><OrderList /></Route>
                    <Route path={`${path}/orderList`}><OrderList /></Route>
                    <Route path={`${path}/addService`}><AddService /></Route>
                    <Route path={`${path}/makeAdmin`}><MakeAdmin /></Route>
                    <Route path={`${path}/manageServices`}><ManageServices /></Route>
                </Switch>
            </Box>
        </Box>
    );
}

AdminDashboard.propTypes = {
    window: PropTypes.func,
};

export default AdminDashboard;
