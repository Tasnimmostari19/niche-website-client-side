import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import WriteReview from '../WriteReview/WriteReview';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Button from '@mui/material/Button';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddAProduct from '../AddAProduct/AddAProduct';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';



const drawerWidth = 250;

const Dashboard = (props) => {


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <Link to={`${url}`}><Button variant="contained">Dashboard</Button></Link>
            <Link to={`${url}/manageAllOrder`}><Button variant="contained">Manage All Order</Button></Link>
            <Link to={`${url}/addAProduct`}><Button variant="contained">Add A Product</Button></Link>
            <Link to={`${url}/makeAdmin`}><Button variant="contained">Make Admin</Button></Link>
            <Link to={`${url}/manageProduct`}><Button variant="contained">Manage Product</Button></Link>
            <Link to={`${url}/pay`}><Button variant="contained">Pay</Button></Link><br />
            <Link to={`${url}/myOrders`}><Button variant="contained">My Orders</Button></Link><br />
            <Link to={`${url}/review`}><Button variant="contained">Review</Button></Link>
            <List>

            </List>

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
                        Dashboard
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
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>

                    </Route>
                    <Route path={`${path}/manageAllOrder`}>
                        <ManageAllOrders></ManageAllOrders>

                    </Route>
                    <Route path={`${path}/addAProduct`}>
                        <AddAProduct></AddAProduct>

                    </Route>
                    <Route path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>

                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>

                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>

                    </Route>

                    <Route path={`${path}/review`}>
                        <WriteReview></WriteReview>

                    </Route>
                </Switch>




            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;