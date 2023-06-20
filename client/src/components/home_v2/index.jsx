import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import CountUp from 'react-countup';
import 'swiper/swiper.min.css'
import styles from './index.module.css';
import { createLandingPageContacts } from '../../api/landing_page_contacts';
import { notifySuccess, scrollWithOffset } from '../../helpers';

export default function Home() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [companyName, setCompanyName] = useState();
  const [extraInfo, setExtraInfo] = useState();

  const contactUsClick = (e) => {
    e.preventDefault();
    scrollWithOffset('get-started', 0);
    createLandingPageContacts({
      email: email,
    }, () => {
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    createLandingPageContacts({
      first_name: firstName,
      email: email,
      extra_info: extraInfo,
    }, () => {
      notifySuccess("Thank you for your submission. We will reach out to you within 24 hours!")
    });
  }

  return (
    <main className="main">
      <div className="section-box">
        <div className={`banner-hero banner-homepage6 ${styles.banner_hero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mt-50 pb-120">
                <h1 className="text-display-3 mt-20">Crush sales targets without the headcount</h1>
                <p className="text-body-lead-large color-gray-500 mt-30 pr-40">Automated lead acquisition<br className="d-lg-block d-none" />with a cyber sales team</p>
                <div className="mt-40"><a className="btn btn-black shape-square icon-arrow-right-white" href="#">Get Started</a></div>
                <div className="mt-50">
                  <div className="row">
                    <div className="col-lg-3 col-sm-4 col-4">
                      <h3 className="text-heading-4 color-gray-900 mb-15">+ <CountUp end={48} />%</h3>
                      <p className="text-body-text-md color-gray-500">New Qualified Meetings</p>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-4">
                      <h3 className="text-heading-4 color-gray-900 mb-15"><CountUp end={15} /></h3>
                      <p className="text-body-text-md color-gray-500">Hours Saved a week</p>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-4">
                      <h3 className="text-heading-4 color-gray-900 mb-15">+<CountUp end={78} />%</h3>
                      <p className="text-body-text-md color-gray-500">Sales Activity</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <div className="banner-imgs">
                  <div className="block-1 shape-1"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/homepage6/line-chart.svg" alt="Agon" /></div>
                  <div className="block-2 shape-3"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/homepage6/card.png" alt="Agon" /></div><img className="img-banner img-responsive shape-2" alt="Agon" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/homepage6/banner.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-box mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12"></div>
            <div className="col-lg-10 col-sm-10 col-12 text-center">
              <h2 className="text-heading-1 color-gray-900 mb-10">Work smarter. Scale faster</h2>
              <p className="text-body-lead-large color-gray-600 mt-20">We take the time consuming process of lead prospecting and outreach off your hands<br className="d-lg-block d-none" /> so you spend more time closing deals.</p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12"></div>
          </div>
        </div>
        <div className="container mt-40">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons mt-50">
                <div className="item-icon"><span className="icon-left"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/homepage2/icon-acquis.svg" /></span>
                  <h4 className="text-heading-4">1. Lead acquisition</h4>
                  <p className={`text-body-text color-gray-600 mt-15 ${styles.section_2_text}`}>We find the most qualified leads from the millions of contacts in our database.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons mt-50">
                <div className="item-icon"><span className="icon-left"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/homepage2/icon-active.svg" /></span>
                  <h4 className="text-heading-4">2. Engage</h4>
                  <p className={`text-body-text color-gray-600 mt-15 ${styles.section_2_text}`}>We utilize our battle proven, multi-channel outreach to schedule face-to-face meetings with decision-makers.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons mt-50">
                <div className="item-icon"><span className="icon-left"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/homepage2/icon-retent.svg" /></span>
                  <h4 className="text-heading-4">3. Iterate</h4>
                  <p className={`text-body-text color-gray-600 mt-15 ${styles.section_2_text}`}>We perform analytics and get your feedback so we provide more qualified leads and more effiective outreach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-box mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                  <h3 className="text-display-3"> <span className="count">50</span>k+</h3><span className="text-body-quote">Leads Engaged</span>
                  <p className="text-body-text">We have reached over 100K leads through our automated email and LinkedIn outreach</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                  <h3 className="text-display-3"><span className="count">1500</span>+</h3><span className="text-body-quote">Meetings Attended</span>
                  <p className="text-body-text">Get meetings booked on your calendar without going through the hassle</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                  <h3 className="text-display-3"><span className="count">5</span>M+</h3><span className="text-body-quote">Revenue Closed</span>
                  <p className="text-body-text">We have worked with our clients to close large and small deals</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                  <h3 className="text-display-3"><span className="count">500</span>+</h3><span className="text-body-quote">New Customers</span>
                  <p className="text-body-text">We turn emails and phone numbers to new, lasting relationships</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pdl-md">
              <h3 className="text-heading-1">Get started meeting your sales goals today</h3>
              <div className="mt-40 box-mw-610">
                <a className="btn btn-black icon-arrow-right-white" href="blog-1.html">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-box mt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12"></div>
            <div className="col-lg-10 col-sm-10 col-12 text-center">
              <div className="text-center mb-20"><span className="tag-1">How It Work ?</span></div>
              <h2 className="text-display-3 color-gray-900 mb-60">Create your cyber SDR<br className="d-lg-block d-none" /> and see it in action</h2>
            </div>
            <div className="col-lg-1 col-sm-1 col-12"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-sm-12 col-12"></div>
            <div className="col-lg-10 col-sm-12 col-12">
              <ul className="list-steps">
                <li className="icon-asset1 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                  <div className="text-center block-step">
                    <div className="mb-30"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/about/2/icon-start-plan.svg" /></div>
                    <h3 className="text-heading-5 mb-10">Tell us</h3>
                    <p className="text-body-text color-gray-500">Describe your product and target audience</p>
                  </div>
                </li>
                <li className="icon-asset2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <div className="text-center block-step">
                    <div className="mb-30"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/about/2/icon-connect.svg" /></div>
                    <h3 className="text-heading-5 mb-10">Connect</h3>
                    <p className="text-body-text color-gray-500">Setup your email and LinkedIn (optional) account</p>
                  </div>
                </li>
                <li className="icon-asset3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                  <div className="text-center block-step bg-5">
                    <div className="mb-30"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/about/2/icon-match.svg" /></div>
                    <h3 className="text-heading-5 mb-10">Engage</h3>
                    <p className="text-body-text color-gray-500">Your cyber SDR will outreach a batch of potential leads every day via email and LinkedIn</p>
                  </div>
                </li>
                <li className="icon-asset4 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                  <div className="text-center block-step bg-5">
                    <div className="mb-30"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/about/2/icon-complete.svg" /></div>
                    <h3 className="text-heading-5 mb-10">Review</h3>
                    <p className="text-body-text color-gray-500">Your cyber SDR will periodically seek feedback on the quality of the leads</p>
                  </div>
                </li>
                <li className="wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                  <div className="text-center block-step bg-9">
                    <div className="mb-30"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/about/2/icon-review.svg" /></div>
                    <h3 className="text-heading-5 mb-10">Respond</h3>
                    <p className="text-body-text color-gray-500">Responses and meeting requests will start appearing in your inbox</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-1 col-sm-12 col-12"></div>
          </div>
        </div>
      </section>

      {
        /*

        <section id="features" className="section-box">
          <div className="container mt-120">
            <div className="bg-2 bdrd-58 pattern-white pb-60">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12"></div>
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                  <h2 className="text-heading-1 color-gray-900">What We Offer</h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">What makes us different from others? We give holistic solutions with strategy, data &amp; technology.</p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12"></div>
              </div>
              <div className="container mt-70">
                <div className="box-swiper">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    loop={true}
                    navigation={{
                      nextEl: ".swiper-button-next-3",
                      prevEl: ".swiper-button-prev-3",
                    }}
                    pagination={{
                      el: ".swiper-pagination",
                      type: "custom",
                      renderCustom: function (swiper, current, total) {
                        var customPaginationHtml = "";
                        for (var i = 0; i < total; i++) {
                          //Determine which pager should be activated at this time
                          if (i == current - 1) {
                            customPaginationHtml +=
                              '<span className="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                          } else {
                            customPaginationHtml +=
                              '<span className="swiper-pagination-customs"></span>';
                          }
                        }
                        return customPaginationHtml;
                      },
                    }}
                    autoplay={{
                      delay: 10000,
                    }}
                    breakpoints={{
                      1199: {
                        slidesPerView: 3,
                      },
                      800: {
                        slidesPerView: 2,
                      },
                      600: {
                        slidesPerView: 1,
                      },
                      350: {
                        slidesPerView: 1,
                      },
                      310: {
                        slidesPerView: 1,
                      },
                      200: {
                        slidesPerView: 1,
                      },
                    }}
                  >
                    <div className="swiper-wrapper pb-70 pt-5">
                      <SwiperSlide>
                        <div className="card-grid-style-2 hover-up">
                          <div className="grid-2-img"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/homepage1/market.svg" /></div>
                          <h3 className="text-heading-5 mt-20">Data with insights</h3>
                          <p className="text-body-text color-gray-600 mt-20">We not only provide lead data but have proprietary solutions to find the most qualified leads and provide insights.</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card-grid-style-2 hover-up">
                          <div className="grid-2-img"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/homepage1/consulting.svg" /></div>
                          <h3 className="text-heading-5 mt-20">Technology solutions</h3>
                          <p className="text-body-text color-gray-600 mt-20">Automate your multichannel outreach and engagement and manage all your sales efforts with a single dashboard.</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card-grid-style-2 hover-up">
                          <div className="grid-2-img"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/homepage1/cognity.svg" /></div>
                          <h3 className="text-heading-5 mt-20">Sales strategy and research</h3>
                          <p className="text-body-text color-gray-600 mt-20">Our experienced team offers a wide range of services, from strategy development to implementation and execution, to help you optimize your sales performance and drive revenue growth.</p>
                        </div>
                      </SwiperSlide>
                    </div>
                    <div className="swiper-pagination swiper-pagination3"></div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        */
      }



      <div className="section-box">
        <div className="container mt-120">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-sm-12 mb-30"><img className="bdrd-16 img-responsive" src="https://salestiger-assets.s3.us-west-2.amazonaws.com/images/chrisimg.jpg" alt="Agon" /></div>
            <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do"><span className="tag-1 bg-6 color-green-900">Chris Hedum, CEO</span>
              <h3 className="text-heading-1 mt-20">Meet our leadership</h3>
              <p className="text-body-lead-large color-gray-600 mt-30">Chris Hedum is a dedicated husband, girl dad, & seasoned sales executive with over 10 years of experience in scaling and leading high-performing sales teams. He has a proven track record of driving revenue growth and building successful sales organizations in both startup and enterprise environments. He met his cofounder Zhi at PatientPartner where they worked together to automate and scale their sales operations from $1-10 million in revenue. They believe they can replicate their success for other companies</p>
              <div className="row mt-20">
                <div className="col-lg-6 col-sm-6 col-12 mt-20">
                  <h4 className="text-heading-6 icon-leaf">$21,000,000+ In Revenue</h4>
                </div>
                <div className="col-lg-6 col-sm-6 col-12 mt-20">
                  <h4 className="text-heading-6 icon-leaf">$140,000,000+ in Funding</h4>
                </div>
                <div className="col-lg-6 col-sm-6 col-12 mt-20">
                  <h4 className="text-heading-6 icon-leaf">Seed Round, Series A, Series B, Series C</h4>
                </div>
                <div className="col-lg-6 col-sm-6 col-12 mt-20">
                  <h4 className="text-heading-6 icon-leaf">Development of teams in US, Canada, & Mexico</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="testimonials" className="section-box pt-100 pb-100 mt-100 bg-orange-100">
       <div className="container">
         <div className="row">
           <div className="col-lg-5 mb-30"><span className="tag-1 bg-6 color-gray-900">Built Exclusively For You</span>
             <h3 className="text-heading-1 mt-30">Don&rsquo;t take our word for it. See what our clients say.</h3>
           </div>
           <div className="col-lg-7">
             <div className="row">
               <div className="col-lg-6 col-md-12 col-sm-12">
                 <div className="card-grid-style-2 card-square hover-up mb-20">
                   <p className="text-body-text color-gray-600 text-comment">&quot;Being a part of a fast-growing sales team for a start-up can be overwhelming at times, but having SalesTiger always made me feel excited to come to work the next day. I didn't have to spend hours every day finding the right customers and booking meetings - I came into work with a full calendar almost daily. &quot;</p>
                   <div className="box-img-user">
                     <div className="img-user img-user-round"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/homepage2/user-1.png" /></div>
                     <h4 className="text-body-lead color-gray-900 mb-5">Ben B.</h4>
                     <p className="text-body-text-md">Sales Exec @ ServiceNow</p>
                   </div>
                 </div>
               </div>
               <div className="col-lg-6 col-md-12 col-sm-12">
                 <div className="card-grid-style-2 card-square hover-up mb-20">
                   <p className="text-body-text color-gray-600 text-comment">&quot;I had the privilege of working with SalesTiger at my previous company. They went above and beyond to understand our unique needs and tailor their solutions to fit our sales team. The results speak for themselves - they helped our team consistently exceed activity metrics and quota goals and we saw a 25% increase in revenue in just 3 months.&quot;</p>
                   <div className="box-img-user">
                     <div className="img-user img-user-round"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2021/02/TestimonialsImg2.png" /></div>
                     <h4 className="text-body-lead color-gray-900 mb-5">Tyler M.</h4>
                     <p className="text-body-text-md">Sales Exec @ SmartSheets</p>
                   </div>
                 </div>
               </div>
               <div className="col-lg-6 col-md-12 col-sm-12">
                 <div className="card-grid-style-2 card-square hover-up mb-20">
                   <p className="text-body-text color-gray-600 text-comment">&quot;We've been using SalesTiger for several months now and have seen tremendous results. Working with them has been a game-changer for our start-up. Their technology and expertise helped us scale quickly and efficiently.&quot;</p>
                   <div className="box-img-user">
                     <div className="img-user img-user-round"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/saas-clickthrough-new/wp-content/uploads/sites/17/2021/02/TestimonialsImg3.png" /></div>
                     <h4 className="text-body-lead color-gray-900 mb-5">Soovin C.</h4>
                     <p className="text-body-text-md">Sales Enablement @ ServiceTitan</p>
                   </div>
                 </div>
               </div>
               <div className="col-lg-6 col-md-12 col-sm-12">
                 <div className="card-grid-style-2 card-square hover-up mb-20">
                   <p className="text-body-text color-gray-600 text-comment">&quot;Chris's energy, drive, team-first mentality, and his intentional decision to bring positivity every day was just as great as the tangible impacts he made to our team's overall revenue.&quot;</p>
                   <div className="box-img-user">
                     <div className="img-user img-user-round"><img src="https://salestiger-assets.s3.us-west-2.amazonaws.com/alithemes/assets/imgs/page/homepage2/user-2.png" /></div>
                     <h4 className="text-body-lead color-gray-900 mb-5">Jenny Wilson</h4>
                     <p className="text-body-text-md">Sales Rep @HouseCallPro</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>

      <section className="section-box mt-70">
        <div className="container mt-50">
          <h3 className="text-heading-1 text-center mb-10">Choose The Best Plan <br className="d-lg-block d-none" /> That&rsquo;s For You </h3>
        </div>
        <div className="container mt-20">
          <div className="block-pricing block-pricing-2 mt-70">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                    <div className="box-pricing-item hover-up">
                      <div className="box-info-price">
                        <span className="text-heading-3 for-month display-month">$49</span>
                        <span className="text-month for-month text-body-small color-gray-400">/month</span>
                      </div>
                      <div className="line-bd-bottom">
                        <h4 className="text-heading-5 mb-15">Starter</h4>
                        <p className="text-body-small color-gray-400">All the basics for businesses that are just getting started.</p>
                      </div>
                      <ul className="list-package-feature">
                        <li>1 Cyber SDR</li>
                        <li>200 leads/month</li>
                        <li>Automatic lead finder</li>
                        <li>AI powered email templates and sequences</li>
                        <li>5 LinkedIn invitations a day</li>
                      </ul>
                      <div>
                        <a className="btn btn-black text-body-lead icon-arrow-right-white" href="#">Get Started</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                    <div className="box-pricing-item active hover-up">
                      <div className="box-info-price">
                        <span className="text-heading-3 for-month display-month">$99</span>
                        <span className="text-month for-month text-body-small color-gray-400">/month</span>
                      </div>
                      <div className="line-bd-bottom">
                        <h4 className="text-heading-5 mb-15">Essentials</h4>
                        <p className="text-body-small color-gray-400">For businesses that are ready to scale.</p>
                      </div>
                      <ul className="list-package-feature">
                        <li>1 Cyber SDR</li>
                        <li>500 leads/month</li>
                        <li>Automatic lead finder</li>
                        <li>Email templates and sequences</li>
                        <li>10 LinkedIn invitations a day</li>
                      </ul>
                      <div>
                        <a className="btn btn-black text-body-lead icon-arrow-right-white" href="#">Get Started</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="box-pricing-item hover-up">
                      <div className="box-info-price">
                        <span className="text-heading-3 for-month display-month">Contact Us</span>
                      </div>
                      <div className="line-bd-bottom">
                        <h4 className="text-heading-5 mb-15">Enterprise</h4>
                        <p className="text-body-small color-gray-400">For larger teams that want to take over the world.</p>
                      </div>
                      <ul className="list-package-feature">
                        <li>Unlimited Cyber SDR</li>
                        <li>Unlimited leads/month</li>
                        <li>Automatic lead finder</li>
                        <li>Email templates and sequences</li>
                        <li>Unlimited LinkedIn invitations a day</li>
                      </ul>
                      <div>
                        <a className="btn btn-black text-body-lead icon-arrow-right-white" href="#">Get Started</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="get-started" className="section-box box-gray-100 mt-120 mb-20">
        <div className="container">
          <div className="icon-wave">
            <div className="row">
              <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                <h2 className="text-heading-3 color-gray-900 mt-10">Ready to crush your sales targets?</h2>
                <p className="text-body-text color-gray-600 mt-20">Learn how we are revolutionizing the sales game.<br className="d-lg-block d-none" />Get your cyber sales team today.</p>
              </div>
              <div className="col-lg-4 mb-40">
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)} className="form-control" placeholder="Tell us what you are looking for"></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-15">
                    <button onClick={onSubmit} className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit">Send Message</button><br className="d-lg-none d-block" /><span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
