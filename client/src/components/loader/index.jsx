import React, { Component, useState, useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import styles from './index.module.css';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, [])

  return (
    <div className={isLoading ? styles.fade_out : ''}>
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="text-center">
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
