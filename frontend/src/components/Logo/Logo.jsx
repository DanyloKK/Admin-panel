import LogoMain from "../../assets/img/main-logo.svg"
import styles from "./Logo.module.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {deepOrange} from '@mui/material/colors';
import BasicPopover from "../PopOver/PopOver.jsx";

const LogoType = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const shortUserName = currentUser.replace(currentUser, currentUser[0])
    return (
        <div className={styles.header__logo__block}>
            <img src={LogoMain} alt="Rozetka-logo"/>
            <Stack direction="row" spacing={2} sx={{
                position:"relative",
            }}>
                <Avatar
                    sx={{bgcolor: deepOrange[500]}}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                >
                    <BasicPopover shorUserName={shortUserName} />
                    {shortUserName}
                </Avatar>
                <p className={styles.header__user}>Welcome <p className={styles.header__user_inner}>{currentUser}</p>
                </p>
            </Stack>
        </div>
    )
}
export default LogoType
