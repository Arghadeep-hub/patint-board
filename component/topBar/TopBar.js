import { Avatar, Badge, Button, IconButton } from '@mui/material'
import dynamic from 'next/dynamic';
import * as fiIcon from "react-icons/fi";
import styles from '../../styles/topBar.module.css';

function TopBar({ menuClicked, setMenuClicked }) {


    return (
        <div className={styles.topBar}>
            <IconButton className={styles.menu} onClick={() => setMenuClicked(!menuClicked)}>
                <img src="/menu.svg" alt='menu' draggable={false} />
            </IconButton>
            <div className={styles.logo}>
                <img src="/logo.svg" alt="logo" draggable={false} />
            </div>
            <div className={styles.search}>
                <Button
                    className={styles.dropDown}
                    endIcon={<fiIcon.FiChevronDown />}>
                    all
                </Button>

                <input type="text" className={styles.input} />

                <button className={styles.searchIcon}>
                    <img src="/search.svg" alt="icon" />
                </button>
            </div>

            <button className={styles.userBtn}>
                active user <span className="round">06</span>
            </button>

            <button className={styles.queueBtn}>
                in queue <span className="round">10</span>
            </button>

            <IconButton>
                <Badge badgeContent={10} color="error">
                    <fiIcon.FiMessageSquare color='#000' />
                </Badge>
            </IconButton>
            <IconButton>
                <Badge badgeContent={14} color="error">
                    <fiIcon.FiBell color='#000' />
                </Badge>
            </IconButton>

            <Button disableRipple={true} disableFocusRipple={true} variant='text' style={{ color: "#111", textTransform: "capitalize", letterSpacing: "2px" }}
                endIcon={<fiIcon.FiChevronDown />}>
                <span style={{ lineHeight: "14px", textAlign: "end" }}>
                    <p className='p-0 m-0 text-dark' style={{ fontSize: "16px" }}>Armand</p>
                    <label className='p-0 m-0 text-dark' style={{ fontSize: "12px" }}>Supervisor</label>
                </span> &nbsp;
                <Avatar alt="Avater" src="/avatar.png" variant='circular' />
            </Button>
        </div>
    )
}

export default TopBar