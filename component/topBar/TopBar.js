import { Avatar, Badge, Button, IconButton } from '@mui/material'
import * as fiIcon from "react-icons/fi";
import styles from '../../styles/topBar.module.css';
import { CtaButton, LeftTopDiv, ProileBtn, RightTopDiv, TopbarDiv } from './styledTopBar';


function TopBar({ menuClicked, setMenuClicked }) {

    return (
        <TopbarDiv className={styles.topBar}>

            <LeftTopDiv>
                <IconButton className={styles.menu} onClick={() => setMenuClicked(!menuClicked)}>
                    <img src="/menu.svg" alt='menu' draggable={false} />
                </IconButton>
                <div className={styles.logo}>
                    <img src="/logo.svg" alt="logo" draggable={false} />
                </div>
            </LeftTopDiv>

            <RightTopDiv>
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

                <CtaButton bg='#87ce83'>
                    active user
                    <p>06</p>
                </CtaButton>

                <CtaButton bg='#FFD37E'>
                    in queue
                    <p>10</p>
                </CtaButton>

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

                <ProileBtn disableRipple={true} disableFocusRipple={true} variant='text'
                    endIcon={<fiIcon.FiChevronDown />}>
                    <span style={{ lineHeight: "14px", textAlign: "end" }}>
                        <p className='p-0 m-0 text-dark' style={{ fontSize: "16px" }}>Armand</p>
                        <label className='p-0 m-0 text-dark' style={{ fontSize: "12px" }}>Supervisor</label>
                    </span> &nbsp;
                    <Avatar alt="Avater" src="/avatar.png" variant='circular' />
                </ProileBtn>
            </RightTopDiv>
        </TopbarDiv>
    )
}

export default TopBar