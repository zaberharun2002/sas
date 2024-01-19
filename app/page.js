import Image from 'next/image'
import Link from 'next/link'
import style_0 from './page.module.css'
import NavLink from '@/app/components/nevLink'
import Volenteers from './components/volenteers'
import about from './test'



export default function Home() {
  return (
    <main className={style_0.main}>
      <section className={style_0.hero}>
        <div className={style_0.container}>
          <h1>SAS Education Foundation</h1>
          {/* <h1>Seeds Of Knowledge, Harvests Of Success</h1> */}
          <h3>Planting Seeds Of Hope, Cultivating Dreams.</h3>
          <div className={style_0.hRight}>
            <div style={{ backgroundImage: `url('./image/3.jpg')` }}></div>
          </div>
          <p>Planting The Seeds Of Knowledge Today Leads To Harvests Of Success Tomorrow. Every Dollar Donated, Every Volunteer Hour, Every Voice Raised Strengthens Our Collective Mission To Invest In Education And Ensure A Brighter Future For Generations To Come</p>
          <div className={style_0.hBtn_contactNum}>
            <Link href="/donate" className={style_0.btn}>Donate</Link>
            <div className={style_0.contactNum}>
              <svg xmlns="http://www.w3.org/2000/svg" width={15} viewBox="0 0 512 512"><path d="M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 300.7 183.5 494.5 416 510.9c4.5 .3 9.1 .6 13.7 .8c0 0 0 0 0 0c0 0 0 0 .1 0c6.1 .2 12.1 .4 18.3 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM447.7 480C218.1 479.8 32 293.7 32 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c0-3.8 2.6-7 6.3-7.8l112-24c3.7-.8 7.5 1.2 9 4.7l48 112c1.4 3.3 .5 7.1-2.3 9.3l-40.6 33.2c-12.1 9.9-15.3 27.2-7.4 40.8c29.5 50.9 71.9 93.3 122.7 122.7c13.6 7.9 30.9 4.7 40.8-7.4l33.2-40.6c2.3-2.8 6.1-3.7 9.3-2.3l112 48c3.5 1.5 5.5 5.3 4.7 9l-24 112c-.8 3.7-4.1 6.3-7.8 6.3c-.1 0-.2 0-.3 0z" /></svg>
              <Link href="tel:+880 22266 23442">+880 22266 23442</Link>
            </div>
          </div>
        </div>
      </section>
      <section className={style_0.content} id={style_0.about}>
        <div className={style_0.container}>
          <h5>What We Are Doing</h5>
          <div className={style_0.abotLeft}>
            <div style={{ backgroundImage: `url('./image/2.jpeg')` }}></div>
            <div style={{ backgroundImage: `url('./image/1.jpeg')` }}></div>
          </div>
          <div className={style_0.abotRight}>
            <h1>We Are In A Mission To Help The Helpless</h1>
            <p>Imagine a world where every child has access to a quality education, nutritious food, clean water, and the support they need to thrive. At <b>SAS Education Foundation,</b> that's the future we're building, one community at a time.</p>
            <p>To empower underprivileged children and communities through education, health, and sustainable development initiatives, building a brighter future for all.</p>
            <Link href="/about" className={style_0.btn}>about us</Link>
          </div>
        </div>
      </section>
      <section className={style_0.content} id={style_0.lc}>
        <div className={style_0.container}>
          <h5>Our Cases You Can See</h5>
          <div className={style_0.text_boundary}>
            <h1>Explore Our Latest Causes That We Works</h1>
          </div>
          <div className={style_0.cards_1_2}>
            <div className={style_0.card}>
              <div style={{ backgroundImage: `url('./image/3.jpg')` }} className={style_0.img}></div>
              <h3>Ensure Education For Every Poor Children</h3>
              <div className={style_0.progress_ber}>
                <div style={{ width: "40%" }}>
                  <span>40%</span>
                </div>
              </div>
              <div className={style_0.progress_data}>
                <span>Raised: $20,000</span>
                <span>Goal: $35,000</span>
              </div>
            </div>
            <div className={style_0.card}>
              <div style={{ backgroundImage: `url('./image/2.jpeg')` }} className={style_0.img}></div>
              <h3>Providing Healthy Food For The Children</h3>
              <div className={style_0.progress_ber}>
                <div style={{ width: "30%" }}>
                  <span>30%</span>
                </div>
              </div>
              <div className={style_0.progress_data}>
                <span>Raised: $20,000</span>
                <span>Goal: $35,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style_0.content} id={style_0.se}>
        <div className={style_0.container}>
          <h5>What We Are Doing</h5>
          <div className={style_0.text_boundary}>
            <h1>We Arrange Many Social Events For Charity Donations</h1>
          </div>
          <div className={style_0.cards_2_1}>
            <div className={style_0.card}>
              <div style={{ backgroundImage: `url('./image/3.jpg')` }} className={style_0.img}></div>
              <div className={style_0.progress_data}>
                <h3>Donation is Hope</h3>
                <div className={style_0.progress_datas}>
                  <div>
                    <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112V256c0 5.3 2.7 10.3 7.1 13.3l96 64c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2L272 247.4V112c0-8.8-7.2-16-16-16s-16 7.2-16 16z" /></svg>
                    <span> 8:30 - 9:30am</span>
                  </div>
                  <div>
                    <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H64C28.7 64 0 92.7 0 128v32 32V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 160 128c0-35.3-28.7-64-64-64H352V16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H128V16zM32 192H416V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192zM64 96H384c17.7 0 32 14.3 32 32v32H32V128c0-17.7 14.3-32 32-32zm40 160h80c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8V264c0-4.4 3.6-8 8-8zm-40 8v80c0 22.1 17.9 40 40 40h80c22.1 0 40-17.9 40-40V264c0-22.1-17.9-40-40-40H104c-22.1 0-40 17.9-40 40z" /></svg>
                    <span> 20-01-2024</span>
                  </div>
                  <div>
                    <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z" /></svg>
                    <span> Dhaka, BD.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={style_0.card}>
              <div style={{ backgroundImage: `url('./image/3.jpg')` }} className={style_0.img}></div>
              <div className={style_0.progress_data}>
                <h3>A hand for Children</h3>
                <div className={style_0.progress_datas}>
                  <div>
                    <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112V256c0 5.3 2.7 10.3 7.1 13.3l96 64c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2L272 247.4V112c0-8.8-7.2-16-16-16s-16 7.2-16 16z" /></svg>
                    <span> 8:30 - 9:30am</span>
                  </div>
                  <div>
                    <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H64C28.7 64 0 92.7 0 128v32 32V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 160 128c0-35.3-28.7-64-64-64H352V16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H128V16zM32 192H416V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192zM64 96H384c17.7 0 32 14.3 32 32v32H32V128c0-17.7 14.3-32 32-32zm40 160h80c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8V264c0-4.4 3.6-8 8-8zm-40 8v80c0 22.1 17.9 40 40 40h80c22.1 0 40-17.9 40-40V264c0-22.1-17.9-40-40-40H104c-22.1 0-40 17.9-40 40z" /></svg>
                    <span> 01-01-2024</span>
                  </div>
                  <div>
                    <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z" /></svg>
                    <span> Dhaka, BD.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style_0.content} id={style_0.volunteer}>
        <div className={style_0.container}>
          <h5>What We Are Doing</h5>
          <div className={style_0.text_boundary}>
            <h1>Our Expert Volunteer Always Ready</h1>
          </div>
          <Volenteers />
        </div>
      </section>

      <section className={style_0.content} id={style_0.add_volunteer_home}>
        <div className={style_0.container}>

          <h1>Lets Chenge The World With Humanity</h1>
          <div className={style_0.btn}>
            <Link href="/about" className={style_0.btn}>Become A Volunteer</Link>
          </div>
        </div>
      </section>

      <section className={style_0.content}>

      </section>
    </main>
  )
}
