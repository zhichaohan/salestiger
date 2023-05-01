import React, { Component, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Chart from "react-apexcharts";
import PageTitleSection from '../page_title_section';

export default function Home() {
  const leadsGenerated = 10431;
  const meetingsBooked = Math.floor(leadsGenerated * 0.05);
  const conversionRate = 28
  const newCustomers = Math.floor(meetingsBooked * conversionRate / 100);
  const asp = 11988;
  const totalRevenue = newCustomers * asp;
  const totalPipelineGenerated = meetingsBooked * asp;
  const averageSalesCycle = 13;
  const openRate = 5;

  const renderSummarySection = () => {
    return (
      <div className="row">
        <div className="col-sm-4 col-lg-4">
          <div className="card o-hidden">
            <div className="card-body">
              <div className="d-flex static-widget">
                <div className="flex-grow-1">
                  <h6 className="font-roboto">Leads Generated</h6>
                  <h4 className="mb-0 counter">{leadsGenerated}</h4>
                </div>
                <svg className="fill-danger" width="41" height="46" viewBox="0 0 41 46" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5245 23.3155C24.0019 23.3152 26.3325 16.8296 26.9426 11.5022C27.6941 4.93936 24.5906 0 17.5245 0C10.4593 0 7.35423 4.93899 8.10639 11.5022C8.71709 16.8296 11.047 23.316 17.5245 23.3155Z"></path>
                  <path d="M31.6878 26.0152C31.8962 26.0152 32.1033 26.0214 32.309 26.0328C32.0007 25.5931 31.6439 25.2053 31.2264 24.8935C29.9817 23.9646 28.3698 23.6598 26.9448 23.0998C26.2511 22.8273 25.6299 22.5567 25.0468 22.2485C23.0787 24.4068 20.5123 25.5359 17.5236 25.5362C14.536 25.5362 11.9697 24.4071 10.0019 22.2485C9.41877 22.5568 8.79747 22.8273 8.10393 23.0998C6.67891 23.6599 5.06703 23.9646 3.82233 24.8935C1.6698 26.5001 1.11351 30.1144 0.676438 32.5797C0.315729 34.6148 0.0734026 36.6917 0.00267388 38.7588C-0.0521202 40.36 0.738448 40.5846 2.07801 41.0679C3.75528 41.6728 5.48712 42.1219 7.23061 42.4901C10.5977 43.2011 14.0684 43.7475 17.5242 43.7719C19.1987 43.76 20.8766 43.6249 22.5446 43.4087C21.3095 41.6193 20.5852 39.4517 20.5852 37.1179C20.5853 30.9957 25.5658 26.0152 31.6878 26.0152Z"></path>
                  <path d="M31.6878 28.2357C26.7825 28.2357 22.8057 32.2126 22.8057 37.1179C22.8057 42.0232 26.7824 46 31.6878 46C36.5932 46 40.57 42.0232 40.57 37.1179C40.57 32.2125 36.5931 28.2357 31.6878 28.2357ZM35.5738 38.6417H33.2118V41.0037C33.2118 41.8453 32.5295 42.5277 31.6879 42.5277C30.8462 42.5277 30.1639 41.8453 30.1639 41.0037V38.6417H27.802C26.9603 38.6417 26.278 37.9595 26.278 37.1177C26.278 36.276 26.9602 35.5937 27.802 35.5937H30.1639V33.2318C30.1639 32.3901 30.8462 31.7078 31.6879 31.7078C32.5296 31.7078 33.2118 32.3901 33.2118 33.2318V35.5937H35.5738C36.4155 35.5937 37.0978 36.276 37.0978 37.1177C37.0977 37.9595 36.4155 38.6417 35.5738 38.6417Z"></path>
                </svg>
              </div>
              <div className="progress-widget">
                <div className="progress sm-progress-bar progress-animate">
                  <div className="progress-gradient-secondary" role="progressbar" style={{ width: "75%" }} ariaValuenow="75" ariaValuemin="0" ariaValuemax="100"><span className="animate-circle"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <div className="card o-hidden">
            <div className="card-body">
              <div className="d-flex static-widget">
                <div className="flex-grow-1">
                  <h6 className="font-roboto">Meetings Booked</h6>
                  <h4 className="mb-0 counter">{meetingsBooked}</h4>
                </div>
                <svg className="fill-success" width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.92047 8.49509C5.81037 8.42629 5.81748 8.25971 5.93378 8.20177C7.49907 7.41686 9.01464 6.65821 10.5302 5.89775C14.4012 3.95495 18.2696 2.00762 22.1478 0.0792996C22.3387 -0.0157583 22.6468 -0.029338 22.8359 0.060288C28.2402 2.64315 33.6357 5.24502 39.033 7.84327C39.0339 7.84327 39.0339 7.84417 39.0348 7.84417C39.152 7.90121 39.1582 8.06869 39.0472 8.1375C38.9939 8.17009 38.9433 8.20087 38.8918 8.22984C33.5398 11.2228 28.187 14.2121 22.8385 17.2115C22.5793 17.3572 22.3839 17.3762 22.1131 17.2296C16.7851 14.3507 11.4518 11.4826 6.12023 8.61188C6.05453 8.57748 5.98972 8.53855 5.92047 8.49509Z"></path>
                  <path d="M21.1347 23.3676V38.8321C21.1347 38.958 21.0042 39.0386 20.895 38.9806C20.4182 38.7271 19.9734 38.4918 19.5295 38.2528C14.498 35.5441 9.46833 32.8317 4.43154 30.1339C4.12612 29.97 4.02046 29.7944 4.02224 29.4422C4.03822 26.8322 4.03023 24.2222 4.02934 21.6122C4.02934 21.4719 4.02934 21.3325 4.02934 21.1659C4.02934 21.0428 4.15542 20.9622 4.26373 21.0147C4.35252 21.0581 4.43065 21.0962 4.50434 21.1396C8.18539 23.2888 11.8664 25.438 15.5457 27.5909C16.5081 28.154 17.0622 28.0453 17.7627 27.1464C18.7748 25.8472 19.7896 24.5508 20.8045 23.2535C20.8053 23.2526 20.8062 23.2517 20.8071 23.2499C20.9172 23.1132 21.1347 23.192 21.1347 23.3676Z"></path>
                  <path d="M23.83 23.3784C23.83 23.2019 24.0484 23.1241 24.1567 23.2626C25.2168 24.6178 26.2192 25.9016 27.2233 27.1835C27.8928 28.039 28.4504 28.1494 29.3719 27.6117C33.0521 25.4643 36.7323 23.316 40.4133 21.1686C40.4914 21.1233 40.5713 21.0799 40.6592 21.0337C40.7613 20.9803 40.8856 21.0473 40.8972 21.164C40.9025 21.2184 40.9069 21.2691 40.9069 21.3189C40.9087 23.928 40.9052 26.5371 40.9132 29.1462C40.914 29.4006 40.8421 29.5518 40.6131 29.6794C35.1057 32.7539 29.6037 35.8365 24.099 38.9163C24.0892 38.9218 24.0803 38.9263 24.0706 38.9317C23.9605 38.9879 23.8309 38.9082 23.8309 38.7833L23.83 23.3784Z"></path>
                  <path d="M28.4752 24.454C27.2908 22.9385 26.118 21.4384 24.9203 19.9066C24.6983 19.6232 24.7809 19.2031 25.0925 19.0293L41.3092 9.95809C41.5746 9.80962 41.9076 9.89743 42.0692 10.1582C43.0147 11.6791 43.9541 13.1891 44.9103 14.7264C45.0852 15.0079 44.9946 15.3818 44.7114 15.5475C39.5414 18.5649 34.3875 21.5742 29.2086 24.5979C28.9627 24.74 28.651 24.6794 28.4752 24.454Z"></path>
                  <path d="M20.0132 19.931C18.819 21.4592 17.6506 22.9539 16.4804 24.4512C16.3037 24.6767 15.9921 24.7373 15.747 24.5943C10.586 21.5814 5.45504 18.5857 0.288619 15.5701C6.65486e-05 15.4017 -0.087831 15.0188 0.0968427 14.7372C1.02554 13.3204 1.94269 11.9208 2.86872 10.5085C3.03209 10.2596 3.35349 10.1763 3.61363 10.3157C9.018 13.2254 14.3975 16.1215 19.833 19.0483C20.1508 19.2194 20.2378 19.644 20.0132 19.931Z"></path>
                </svg>
              </div>
              <div className="progress-widget">
                <div className="progress sm-progress-bar progress-animate">
                  <div className="progress-gradient-success" role="progressbar" style={{ width: "60%" }} ariaValuenow="75" ariaValuemin="0" ariaValuemax="100"><span className="animate-circle"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <div className="card o-hidden">
            <div className="card-body">
              <div className="d-flex static-widget">
                <div className="flex-grow-1">
                  <h6 className="font-roboto">Total Revenue</h6>
                  <h4 className="mb-0 counter">${totalRevenue}</h4>
                </div>
                <svg className="fill-secondary" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5938 14.1562V17.2278C20.9604 17.8102 19.7812 19.3566 19.7812 21.1875C19.7812 23.5138 21.6737 25.4062 24 25.4062C24.7759 25.4062 25.4062 26.0366 25.4062 26.8125C25.4062 27.5884 24.7759 28.2188 24 28.2188C23.2241 28.2188 22.5938 27.5884 22.5938 26.8125H19.7812C19.7812 28.6434 20.9604 30.1898 22.5938 30.7722V33.8438H25.4062V30.7722C27.0396 30.1898 28.2188 28.6434 28.2188 26.8125C28.2188 24.4862 26.3263 22.5938 24 22.5938C23.2241 22.5938 22.5938 21.9634 22.5938 21.1875C22.5938 20.4116 23.2241 19.7812 24 19.7812C24.7759 19.7812 25.4062 20.4116 25.4062 21.1875H28.2188C28.2188 19.3566 27.0396 17.8102 25.4062 17.2278V14.1562H22.5938Z"></path>
                  <path d="M25.4062 0V11.4859C31.2498 12.1433 35.8642 16.7579 36.5232 22.5938H48C47.2954 10.5189 37.4829 0.704531 25.4062 0Z"></path>
                  <path d="M14.1556 31.8558C12.4237 29.6903 11.3438 26.9823 11.3438 24C11.3438 17.5025 16.283 12.1958 22.5938 11.4859V0C10.0492 0.731813 0 11.2718 0 24C0 30.0952 2.39381 35.6398 6.14897 39.8624L14.1556 31.8558Z"></path>
                  <path d="M47.9977 25.4062H36.5143C35.8044 31.717 30.4977 36.6562 24.0002 36.6562C21.0179 36.6562 18.3099 35.5763 16.1444 33.8444L8.13779 41.851C12.3604 45.6062 17.905 48 24.0002 48C36.7284 48 47.2659 37.9508 47.9977 25.4062Z"></path>
                </svg>
              </div>
              <div className="progress-widget">
                <div className="progress sm-progress-bar progress-animate">
                  <div className="progress-gradient-danger" role="progressbar" style={{ width: "48%" }} ariaValuenow="75" ariaValuemin="0" ariaValuemax="100"><span className="animate-circle"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderDetailsSection = () => {
    return (
      <div className="col-xl-6 box-col-6">
        <div className="widget-joins card">
          <div className="card-header pb-0">
            <h5></h5>
          </div>
          <div className="card-body">
            <div className="row gy-4">
              <div className="col-sm-6">
                <div className="widget-card">
                  <div className="d-flex align-self-center">
                    <div className="widget-icon bg-light-primary">
                      <svg className="fill-primary" width="41" height="46" viewBox="0 0 41 46" xmlns="http://www.w3.org/2000/svg"><path d="M17.5245 23.3155C24.0019 23.3152 26.3325 16.8296 26.9426 11.5022C27.6941 4.93936 24.5906 0 17.5245 0C10.4593 0 7.35423 4.93899 8.10639 11.5022C8.71709 16.8296 11.047 23.316 17.5245 23.3155Z"></path><path d="M31.6878 26.0152C31.8962 26.0152 32.1033 26.0214 32.309 26.0328C32.0007 25.5931 31.6439 25.2053 31.2264 24.8935C29.9817 23.9646 28.3698 23.6598 26.9448 23.0998C26.2511 22.8273 25.6299 22.5567 25.0468 22.2485C23.0787 24.4068 20.5123 25.5359 17.5236 25.5362C14.536 25.5362 11.9697 24.4071 10.0019 22.2485C9.41877 22.5568 8.79747 22.8273 8.10393 23.0998C6.67891 23.6599 5.06703 23.9646 3.82233 24.8935C1.6698 26.5001 1.11351 30.1144 0.676438 32.5797C0.315729 34.6148 0.0734026 36.6917 0.00267388 38.7588C-0.0521202 40.36 0.738448 40.5846 2.07801 41.0679C3.75528 41.6728 5.48712 42.1219 7.23061 42.4901C10.5977 43.2011 14.0684 43.7475 17.5242 43.7719C19.1987 43.76 20.8766 43.6249 22.5446 43.4087C21.3095 41.6193 20.5852 39.4517 20.5852 37.1179C20.5853 30.9957 25.5658 26.0152 31.6878 26.0152Z"></path><path d="M31.6878 28.2357C26.7825 28.2357 22.8057 32.2126 22.8057 37.1179C22.8057 42.0232 26.7824 46 31.6878 46C36.5932 46 40.57 42.0232 40.57 37.1179C40.57 32.2125 36.5931 28.2357 31.6878 28.2357ZM35.5738 38.6417H33.2118V41.0037C33.2118 41.8453 32.5295 42.5277 31.6879 42.5277C30.8462 42.5277 30.1639 41.8453 30.1639 41.0037V38.6417H27.802C26.9603 38.6417 26.278 37.9595 26.278 37.1177C26.278 36.276 26.9602 35.5937 27.802 35.5937H30.1639V33.2318C30.1639 32.3901 30.8462 31.7078 31.6879 31.7078C32.5296 31.7078 33.2118 32.3901 33.2118 33.2318V35.5937H35.5738C36.4155 35.5937 37.0978 36.276 37.0978 37.1177C37.0977 37.9595 36.4155 38.6417 35.5738 38.6417Z"></path></svg>
                    </div>
                    <div className="flex-grow-1">
                      <h6>New Customers</h6>
                      <h5>{newCustomers}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="widget-card">
                  <div className="d-flex align-self-center">
                    <div className="widget-icon bg-light-secondary">
                      <svg className="fill-secondary" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5938 14.1562V17.2278C20.9604 17.8102 19.7812 19.3566 19.7812 21.1875C19.7812 23.5138 21.6737 25.4062 24 25.4062C24.7759 25.4062 25.4062 26.0366 25.4062 26.8125C25.4062 27.5884 24.7759 28.2188 24 28.2188C23.2241 28.2188 22.5938 27.5884 22.5938 26.8125H19.7812C19.7812 28.6434 20.9604 30.1898 22.5938 30.7722V33.8438H25.4062V30.7722C27.0396 30.1898 28.2188 28.6434 28.2188 26.8125C28.2188 24.4862 26.3263 22.5938 24 22.5938C23.2241 22.5938 22.5938 21.9634 22.5938 21.1875C22.5938 20.4116 23.2241 19.7812 24 19.7812C24.7759 19.7812 25.4062 20.4116 25.4062 21.1875H28.2188C28.2188 19.3566 27.0396 17.8102 25.4062 17.2278V14.1562H22.5938Z"></path>
                        <path d="M25.4062 0V11.4859C31.2498 12.1433 35.8642 16.7579 36.5232 22.5938H48C47.2954 10.5189 37.4829 0.704531 25.4062 0Z"></path>
                        <path d="M14.1556 31.8558C12.4237 29.6903 11.3438 26.9823 11.3438 24C11.3438 17.5025 16.283 12.1958 22.5938 11.4859V0C10.0492 0.731813 0 11.2718 0 24C0 30.0952 2.39381 35.6398 6.14897 39.8624L14.1556 31.8558Z"></path>
                        <path d="M47.9977 25.4062H36.5143C35.8044 31.717 30.4977 36.6562 24.0002 36.6562C21.0179 36.6562 18.3099 35.5763 16.1444 33.8444L8.13779 41.851C12.3604 45.6062 17.905 48 24.0002 48C36.7284 48 47.2659 37.9508 47.9977 25.4062Z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow-1">
                      <h6>ASP</h6>
                      <h5>${asp}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="widget-card">
                  <div className="d-flex align-self-center">
                    <div className="widget-icon bg-light-success">
                      <svg className="fill-success" width="112" height="82" viewBox="0 0 112 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.2301 0.0161888C50.6652 0.0134581 61.103 0.0134581 71.5381 0.0161888C74.6718 0.0161888 75.6717 1.07297 75.6769 4.36891C75.6796 5.82437 75.7532 7.28803 75.6559 8.73529C75.5664 10.046 76.1058 10.3601 77.2582 10.3519C82.7389 10.3109 88.2196 10.33 93.7003 10.3355C97.105 10.3382 98.3048 11.2748 99.252 14.6964C100.946 20.8104 102.601 26.9381 104.341 33.0385C104.512 33.6365 105.098 34.1307 105.556 34.6086C107.556 36.7003 109.616 38.732 111.563 40.8728C111.921 41.266 111.974 42.0661 111.974 42.6778C112 50.0043 112.003 57.3334 111.984 64.6599C111.979 66.9865 110.824 68.2043 108.593 68.2398C105.83 68.2835 103.067 68.2835 100.304 68.248C99.3204 68.2344 98.8836 68.461 98.7389 69.6434C97.9864 75.7219 94.287 80.1812 89.0195 81.5656C81.1181 83.641 73.5115 78.1086 72.6932 69.6106C72.5853 68.4938 72.1854 68.248 71.2382 68.2508C61.0662 68.2671 50.8915 68.2699 40.7195 68.248C39.7407 68.2453 39.4013 68.5648 39.2934 69.6434C38.6199 76.4019 33.6102 81.5001 27.3743 81.907C20.6912 82.3411 15.1185 78.1932 13.5608 71.6259C13.5293 71.4948 13.4872 71.3638 13.4608 71.2299C12.9083 68.259 12.9083 68.2589 9.94563 68.2589C7.75389 68.2589 5.55951 68.2917 3.36777 68.2453C1.13918 68.1989 -0.000101532 66.9755 -0.000101532 64.6381C-0.00273268 45.9301 -0.0185196 27.2248 0.0525214 8.51957C0.0551525 7.50375 0.62348 6.33501 1.26022 5.51308C2.38109 4.06854 3.78612 2.8643 5.02276 1.50988C5.99102 0.447638 7.10662 -0.0056568 8.52744 -0.00019541C19.0941 0.0353036 29.6608 0.0189194 40.2301 0.0161888ZM97.7943 34.1307C97.7549 33.7539 97.7628 33.4836 97.6943 33.2378C96.2972 28.1232 94.8685 23.0196 93.5029 17.8968C93.253 16.9629 92.7136 16.8482 91.9453 16.8509C86.9935 16.8673 82.039 16.8864 77.0872 16.8427C75.9927 16.8318 75.648 17.2332 75.6611 18.3473C75.7085 22.214 75.6717 26.0807 75.6796 29.9473C75.6848 32.8937 76.9372 34.2127 79.7473 34.2181C85.3122 34.229 90.8797 34.2236 96.4445 34.2181C96.8734 34.2154 97.2997 34.1635 97.7943 34.1307ZM32.9392 68.4091C32.9313 64.5425 29.9923 61.4513 26.2903 61.424C22.583 61.3967 19.5835 64.5725 19.6046 68.5047C19.623 72.3386 22.6304 75.4243 26.3219 75.4052C30.0081 75.3833 32.9445 72.2785 32.9392 68.4091ZM79.0553 68.3791C79.0369 72.254 81.9522 75.3642 85.6437 75.4025C89.3273 75.4434 92.3636 72.355 92.39 68.5348C92.4189 64.5944 89.4457 61.4213 85.7332 61.424C82.0417 61.4322 79.0711 64.5261 79.0553 68.3791Z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow-1">
                      <h6>Total Pipeline Generated</h6>
                      <h5>${totalPipelineGenerated}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="widget-card">
                  <div className="d-flex align-self-center">
                    <div className="widget-icon bg-light-warning">
                      <svg className="fill-warning" width="98" height="98" viewBox="0 0 98 98" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.35 84H12.25V77.1167C12.25 61.5883 25.4677 49 41.7725 49C25.4677 49 12.25 36.4117 12.25 20.8833V14H7.35C3.29525 14 0 10.8617 0 7C0 3.13833 3.29525 0 7.35 0H90.65C94.7047 0 98 3.13833 98 7C98 10.8617 94.7047 14 90.65 14H85.75V20.8833C85.75 36.4117 72.5323 49 56.2275 49C72.5323 49 85.75 61.5883 85.75 77.1167V84H90.65C94.7047 84 98 87.1383 98 91C98 94.8617 94.7047 98 90.65 98H7.35C3.29525 98 0 94.8617 0 91C0 87.1383 3.29525 84 7.35 84ZM77.0893 22.6567C77.1505 22.0733 77.175 21.4783 77.175 20.8833V14H20.825V20.8833C20.825 21.4783 20.8495 22.0733 20.9108 22.6567C25.48 27.51 36.3335 30.9167 49 30.9167C61.6665 30.9167 72.52 27.51 77.0893 22.6567ZM56.2275 57.1667H41.7725C30.2207 57.1667 20.825 66.115 20.825 77.1167V77.9567C25.3575 72.9517 36.26 69.4167 49 69.4167C61.74 69.4167 72.6425 72.9517 77.175 77.9567V77.1167C77.175 66.115 67.7793 57.1667 56.2275 57.1667Z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow-1">
                      <h6>Average Sales Cycle</h6>
                      <h5>{averageSalesCycle} days</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="widget-card">
                  <div className="d-flex align-self-center">
                    <div className="widget-icon bg-light-primary">
                      <svg className="fill-primary" width="110" height="105" viewBox="0 0 110 105" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M56.4571 104.995C56.4571 100.722 56.4571 96.6523 56.4571 92.5829C56.4596 79.9804 56.4645 67.3755 56.4547 54.773C56.4547 54.0685 56.5307 53.5801 57.3208 53.1997C74.5917 44.9155 91.8454 36.5959 109.104 28.2835C109.318 28.1802 109.543 28.0956 109.914 27.9407C109.943 28.3938 109.985 28.7555 109.985 29.1171C109.987 45.479 109.982 61.8386 110.002 78.2005C110.002 78.9472 109.828 79.3746 109.067 79.7409C91.9092 87.9759 74.7708 96.2437 57.625 104.505C57.3036 104.655 56.9675 104.779 56.4571 104.995Z"></path>
                          <path d="M0.0819734 27.9477C0.543251 28.1426 0.911292 28.2788 1.26216 28.4479C7.06002 31.2375 12.8481 34.0482 18.6607 36.8096C19.4262 37.1736 19.7059 37.5822 19.6985 38.4087C19.6568 43.9645 19.6765 49.5202 19.6765 55.0759C19.6765 55.5033 19.6765 55.933 19.6765 56.5482C21.7645 56.5482 23.7936 56.6257 25.8154 56.52C27.0765 56.4543 27.9353 56.8511 28.799 57.7082C30.8821 59.7816 33.078 61.7494 35.3427 63.8674C35.3427 57.5391 35.3427 51.3095 35.3427 44.8967C36.3487 45.364 37.1878 45.7397 38.0147 46.1365C42.8655 48.4706 47.7089 50.814 52.567 53.1363C53.1927 53.4369 53.573 53.7234 53.573 54.5124C53.5411 71.0621 53.546 87.6119 53.5411 104.162C53.5411 104.387 53.5117 104.613 53.4822 104.998C51.3476 103.976 49.3111 103.011 47.282 102.032C31.8562 94.6 16.4377 87.1587 0.999622 79.7456C0.280715 79.4004 -0.00390273 79.0459 -0.00144913 78.2522C0.0255405 61.8198 0.0181797 45.3874 0.0206333 28.9551C0.0230869 28.6615 0.0574374 28.361 0.0819734 27.9477Z"></path>
                          <path d="M36.9977 42.4758C41.7184 40.0572 46.2846 37.7137 50.8507 35.3773C63.131 29.0936 75.4162 22.8194 87.6842 16.5146C88.4105 16.1412 88.965 16.1248 89.6986 16.484C95.5578 19.3371 101.437 22.1478 107.308 24.975C107.595 25.1135 107.86 25.2873 108.277 25.5244C107.531 25.9001 106.906 26.2265 106.268 26.5318C89.5661 34.5789 72.8596 42.619 56.1677 50.6849C55.3653 51.0723 54.747 51.1217 53.9128 50.7107C48.6866 48.1348 43.4261 45.6223 38.1779 43.0863C37.8245 42.9149 37.4786 42.7247 36.9977 42.4758Z"></path>
                          <path d="M1.65613 25.5056C5.03965 23.8736 8.20725 22.3426 11.3749 20.8163C25.5665 13.9785 39.7606 7.1454 53.94 0.28645C54.7129 -0.086906 55.3042 -0.100995 56.0795 0.279406C61.2763 2.8248 66.5024 5.31854 71.7163 7.83341C72.0697 8.00483 72.4083 8.20677 72.9162 8.4815C72.0868 8.9253 71.3949 9.3104 70.6883 9.67202C54.5509 17.9305 38.416 26.1889 22.264 34.4239C21.8223 34.6493 21.1083 34.8231 20.7182 34.6376C14.4198 31.6648 8.15573 28.6334 1.65613 25.5056Z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="flex-grow-1">
                      <h6>Open rate</h6>
                      <h5>{openRate}%</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="widget-card">
                  <div className="d-flex align-self-center">
                    <div className="widget-icon bg-light-danger">
                      <svg className="fill-danger" width="41" height="46" viewBox="0 0 41 46" xmlns="http://www.w3.org/2000/svg"><path d="M17.5245 23.3155C24.0019 23.3152 26.3325 16.8296 26.9426 11.5022C27.6941 4.93936 24.5906 0 17.5245 0C10.4593 0 7.35423 4.93899 8.10639 11.5022C8.71709 16.8296 11.047 23.316 17.5245 23.3155Z"></path><path d="M31.6878 26.0152C31.8962 26.0152 32.1033 26.0214 32.309 26.0328C32.0007 25.5931 31.6439 25.2053 31.2264 24.8935C29.9817 23.9646 28.3698 23.6598 26.9448 23.0998C26.2511 22.8273 25.6299 22.5567 25.0468 22.2485C23.0787 24.4068 20.5123 25.5359 17.5236 25.5362C14.536 25.5362 11.9697 24.4071 10.0019 22.2485C9.41877 22.5568 8.79747 22.8273 8.10393 23.0998C6.67891 23.6599 5.06703 23.9646 3.82233 24.8935C1.6698 26.5001 1.11351 30.1144 0.676438 32.5797C0.315729 34.6148 0.0734026 36.6917 0.00267388 38.7588C-0.0521202 40.36 0.738448 40.5846 2.07801 41.0679C3.75528 41.6728 5.48712 42.1219 7.23061 42.4901C10.5977 43.2011 14.0684 43.7475 17.5242 43.7719C19.1987 43.76 20.8766 43.6249 22.5446 43.4087C21.3095 41.6193 20.5852 39.4517 20.5852 37.1179C20.5853 30.9957 25.5658 26.0152 31.6878 26.0152Z"></path><path d="M31.6878 28.2357C26.7825 28.2357 22.8057 32.2126 22.8057 37.1179C22.8057 42.0232 26.7824 46 31.6878 46C36.5932 46 40.57 42.0232 40.57 37.1179C40.57 32.2125 36.5931 28.2357 31.6878 28.2357ZM35.5738 38.6417H33.2118V41.0037C33.2118 41.8453 32.5295 42.5277 31.6879 42.5277C30.8462 42.5277 30.1639 41.8453 30.1639 41.0037V38.6417H27.802C26.9603 38.6417 26.278 37.9595 26.278 37.1177C26.278 36.276 26.9602 35.5937 27.802 35.5937H30.1639V33.2318C30.1639 32.3901 30.8462 31.7078 31.6879 31.7078C32.5296 31.7078 33.2118 32.3901 33.2118 33.2318V35.5937H35.5738C36.4155 35.5937 37.0978 36.276 37.0978 37.1177C37.0977 37.9595 36.4155 38.6417 35.5738 38.6417Z"></path></svg>
                    </div>
                    <div className="flex-grow-1">
                      <h6>Conversion rate</h6>
                      <h5>{conversionRate}%</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderSdrPerformanceSection = () => {
    const primary = '#3e5fce';
    const secondary = '#ffce00';

    const optionsproductchart = {
      chart: {
        height: 320,
        type: "line",
      },
      stroke: {
        curve: "smooth",
      },

      series: [
        {
          name: "Total",
          type: "area",
          data: [Math.floor(meetingsBooked*0.1), Math.floor(meetingsBooked*0.12), Math.floor(meetingsBooked*0.23), Math.floor(meetingsBooked*0.55)],
        },
        {
          name: "Chris",
          type: "line",
          data: [Math.floor(meetingsBooked*0.1/2), Math.floor(meetingsBooked*0.12/2), Math.floor(meetingsBooked*0.23/2), Math.floor(meetingsBooked*0.55/2)],
        },
      ],
      fill: {
        colors: [primary, secondary],
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 0.9,
          opacityTo: 0.8,
          stops: [0, 100],
        },
      },

      colors: [primary, secondary],
      labels: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09 ",
        "10",
        "11",
        "12",
      ],
      markers: {
        size: 0,
      },
      yaxis: [
        {
          title: {
            text: "Meetings Booked",
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " meetings booked";
            }
            return y;
          },
        },
      },
    };

    return (
      <div className="col-xl-6 box-col-6">
        <div className="widget-joins card">
          <div className="card-header pb-0">
            <h5></h5>
          </div>
          <div className="card-body">
            <div class="card-header pb-0 pt-0">
              <h5>Meetings Booked</h5>
            </div>
            <div className="chart-container">
              <div className="row">
                <div className="col-12">
                  <Chart
                    options={optionsproductchart}
                    series={optionsproductchart.series}
                    width="600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageTitleSection
        title={`Hi ${gon.current_user.name}`}
        pagePath={[
        ]}
      />

      <div className="container-fluid basic_table">
        { renderSummarySection() }
        <div className="row">
          { renderDetailsSection() }
          { renderSdrPerformanceSection() }
        </div>
      </div>
    </>
  )
}
