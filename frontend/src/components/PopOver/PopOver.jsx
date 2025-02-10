import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from "./PopOver.module.css"
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";
export default function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const handleClick = (event) => {

        setAnchorEl(event.currentTarget);

    };
    const logOut = () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("authToken");
        navigate('/');
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Typography className={styles.popOver} aria-describedby={id} variant="outlined" onClick={handleClick}>
                !
            </Typography>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{p: 2}}><Button onClick={logOut} sx={{
                    color: "green",
                    padding: 0,
                }}>LogOut <LogoutIcon sx={{
                    marginLeft:1,
                }}/>
                </Button>
                </Typography>
            </Popover>
        </div>
    );
}