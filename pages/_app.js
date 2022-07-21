import dynamic from 'next/dynamic'
import '../styles/globals.css'
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const TopBar = dynamic(() => import('../component/topBar/TopBar'))
const SideBar = dynamic(() => import("../component/sideBar/SideBar"))

function MyApp({ Component, pageProps }) {
  const [menuClicked, setMenuClicked] = useState(false)
  // console.log(menuClicked);
  return (
    <SSRProvider>
      <TopBar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <SideBar menuClicked={menuClicked} />
      <Component menuClicked={menuClicked} {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
