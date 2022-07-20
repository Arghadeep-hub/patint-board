import { IconButton } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { BottomMenu, SideBarCon, TopMenu } from './styledSidebar'

const menuTop = [
  {
    name: "dashboard",
    path: '/play',
    image: '/dashboard.svg'
  },
  {
    name: "play",
    path: '/',
    image: '/play.svg'
  },
  {
    name: "report",
    path: '/report',
    image: '/calculate.svg'
  },
  {
    name: "admin",
    path: '/admin',
    image: '/tree.svg'
  },
]

const menuBottom = [
  {
    name: "question",
    path: '/',
    image: '/question.svg'
  },
  {
    name: "headphoen",
    path: '/',
    image: '/headphone.svg'
  },
]

const FlexDisplay = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.isClicked ? "flex-start" : "center"};
  align-items: center;
  background-color: ${(props) => props.isMatch ? "#DAEFFF" : "transparent"};
  border-left:${(props) => props.isMatch ? "5px solid #76C3FF" : "0"};
`;
const NavText = styled.h6`
  margin: 0;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.isMatch ? "#76C3FF" : "#616161"};
  cursor: inherit;
`;

function SideBar({ menuClicked }) {
  const router = useRouter();
  // console.log(router.pathname);
  return (
    <SideBarCon width={menuClicked ? 15 : 5}>
      <TopMenu isCenter={menuClicked}>
        {menuTop.map((items, id) => {
          const { name, path, image } = items;
          return (
            <FlexDisplay key={id} isClicked={menuClicked} isMatch={menuClicked && router.pathname === path} onClick={() => router.push(path)}>
              <IconButton size='large'>
                <img src={image} alt={name} draggable={false} />
              </IconButton>
              {menuClicked &&
                <NavText isMatch={menuClicked && router.pathname === path}>{name}</NavText>}
            </FlexDisplay>
          )
        })

        }
      </TopMenu>

      <BottomMenu isCenter={menuClicked}>
        {menuBottom.map((items, id) => {
          const { name, path, image } = items;
          return (
            <IconButton key={id} size='large'>
              <img src={image} alt={name} draggable={false} />
            </IconButton>
          )
        })}
      </BottomMenu>
    </SideBarCon>
  )
}

export default SideBar