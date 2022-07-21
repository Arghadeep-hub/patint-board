import { Button, Checkbox, IconButton } from '@mui/material';
import Head from 'next/head'
import * as fiIcon from "react-icons/fi"
import * as ioIcon from "react-icons/io5"
import Display from '../component/graph/Display';
import SelectButton from '../component/graph/SelectButton';
import { CheckBox, H6, HomeDiv, Indicator, MediaBtn, MesrInpt, Nowrap, Para, SideBtn, Small, Strip, TextArea, Visible } from '../component/styledHome';
import styles from "../styles/Home.module.css"

const eventType = [{ small: "event type", p: "Atrial Fibrillation >= 30 seconds" },
{ small: "Event ID", p: "43215-002" },
{ small: "Event date and time", p: "Event date and time" },
{ small: "Time in Queue", p: "07:39 (m:s)" },
{ small: "Max HR", p: "93 BPM" },
{ small: "Patient Name", p: "Sathish Kumar" },
{ small: "Age", p: "34" },
{ small: "Gender", p: "Male" },
]

const measurementInput = [{ sText: "hr", eText: "bpm" }, { sText: "pri", eText: "sec" }, { sText: "qrs", eText: "sec" }, { sText: "qti", eText: "sec" }]

const group1 = [{ name: "1 mm/sec" }, { name: "2 mm/sec" }, { name: "5 mm/sec" }, { name: "10 mm/sec" }, { name: "20 mm/sec" }, { name: "50 mm/sec" }];

const group2 = [{ name: "5 mm/sec" }, { name: "10 mm/sec" }, { name: "25 mm/sec" }, { name: "50 mm/sec" }, { name: "75 mm/sec" }];

const group3 = [{ name: "Lead 1" }, { name: "Lead 2" }, { name: "Lead V2" }, { name: "Lead All" }];




function Home({ menuClicked }) {

  return (
    <HomeDiv width={menuClicked ? 15 : 5}>
      <Head>
        <title>Home</title>
      </Head>

      <div className={styles.dashboard}>
        <div className={styles.heading}>
          <h6 style={{ fontSize: "24px" }}>Event</h6>
          <p><span>Supervisor Queue</span>/ Event</p>
        </div>
        <Nowrap>
          <div className={styles.event}>
            {eventType.map((items, id) => {
              const { small, p } = items
              return (
                <div key={id} className={styles.eventType}>
                  <Small>{small}</Small>
                  <Para color={id === 0 ? "#F45B5B" : "#2B2B2B"}>{p}</Para>
                </div>
              )

            })}
            <div className={styles.eventType}>
              <Small style={{ color: '#F45B5B' }}>Implant device</Small>
              <img src="/heart.svg" alt="hearts" />
            </div>
          </div>

          <div className='d-flex justify-content-center align-items-center'>
            <Indicator color='#9A9A9A'>AF Not Confirmed</Indicator>
            <label className="switch">
              <input type="checkbox" checked />
              <span className="slider"></span>
            </label>
            <Indicator color='#F45B5B'>AFIB</Indicator>
          </div>

          <div className='d-flex justify-content-center align-items-center'>
            <Visible startIcon={<fiIcon.FiEye />}>show criterias</Visible>
          </div>
        </Nowrap>

        <Nowrap>
          <div className={styles.graphDiv}>
            <div className={styles.topGraph}>
              <div className={styles.topLeftGraph}>
                <SelectButton options={group1} width={130} />
                <SelectButton options={group2} width={130} />
                <SelectButton options={group3} width={130} />
              </div>
              <div className={styles.topRightGraph}>
                <Para color='#A0A4A8'>00:05:25</Para>
              </div>
            </div>

            <Display />
          </div>

          <div className={styles.sideButtons}>
            <SideBtn>
              <img src="/search1.svg" alt="search" />
            </SideBtn>
            <SideBtn>
              <img src="/upH.svg" alt="uph" />
            </SideBtn>
            <SideBtn>
              <img src="/downL.svg" alt="downL" />
            </SideBtn>
            <SideBtn>
              <img src="/eyeoff.svg" alt="eyeoff" />
            </SideBtn>
          </div>
        </Nowrap>

        <Nowrap>
          <div className={styles.measurement}>
            <H6>measurement</H6>
          </div>
          {measurementInput.map((param, id) => {
            const { sText, eText } = param
            return (
              <div key={id} className={styles.inputSection}>
                <Para color='#616161' fontSize={20} fw={500}>{sText.toUpperCase()}</Para>
                <MesrInpt disabled />
                <Para color='#616161' fontSize={20} fw={500}>{eText.toUpperCase()}</Para>
              </div>
            )
          })}
        </Nowrap>

        <Nowrap>
          <div className={styles.left}>
            <div className={styles.findItems}>
              <div className={styles.finding}>
                <Para>finding</Para>
                <SelectButton options={group3} width={250} />
              </div>
              <div className={styles.finding}>
                <Para>ectopy</Para>
                <SelectButton options={group3} width={250} />
              </div>
            </div>
            <div className={styles.findItems}>
              <div className={styles.measurement}>
                <H6>comments</H6>
              </div>
              <TextArea name="comments" />
            </div>
            <div className={styles.icons}>
              <Small>
                <img src="/addOn.svg" alt="addon" />
              </Small>
              <Small>
                <img src="/share.svg" alt="share" />
              </Small>
              <Small>
                <img src="/bell.svg" alt="bell" />
              </Small>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <div className={styles.mediaBtn}>
                <MediaBtn><ioIcon.IoPlaySkipBack /></MediaBtn>
                <MediaBtn><ioIcon.IoPlayBack /></MediaBtn>
                <MediaBtn selected={true}><ioIcon.IoPlay /></MediaBtn>
                <MediaBtn><ioIcon.IoPlayForward /></MediaBtn>
                <MediaBtn><ioIcon.IoPlaySkipForward /></MediaBtn>
              </div>
              <Strip bcl="#000" startIcon={<CheckBox defaultChecked />}>Get next strip</Strip>
            </div>
            <div className={styles.rightBottom}>
              <Strip bcl="#8085E9">Caliper</Strip>
              <Strip bcl="#88CE84" startIcon={<ioIcon.IoCheckmarkOutline />}>accept</Strip>
              <Strip bcl="#E5796E" startIcon={<ioIcon.IoCloseOutline />}>reject</Strip>
            </div>
          </div>
        </Nowrap>

      </div>

    </HomeDiv>
  )
}

export default Home