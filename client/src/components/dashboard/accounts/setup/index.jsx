import React, { useState } from 'react'
import PageTitleSection from '../../page_title_section';
import ProductsForm from '../../products/form';
import styles from './index.module.css'

export default function AccountsSetup() {
  const [view, setView] = useState('product');
  const [product, setProduct] = useState();

  return (
    <>
      <PageTitleSection
        title={`Account Setup`}
        pagePath={[
          { href: '/accounts/setup', title: 'Account Setup' }
        ]}
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Describe the product or service your company provides</h5>
                <span>This helps us understand what your product or service does and the value it provides to its users. The more the tell us, the better we can perform our outreach</span>
              </div>
              <div className="card-body">
                <div className="stepwizard">
                  <div className="stepwizard-row setup-panel">
                    <div className="stepwizard-step"><a className={`btn ${view === 'product' ? 'btn-primary' : 'btn-light'}`}>1</a>
                      <p>Product</p>
                    </div>
                    <div className="stepwizard-step"><a className={`btn ${view === 'target-audience' ? 'btn-primary' : 'btn-light'}`}>2</a>
                      <p>Target Audience</p>
                    </div>
                    <div className="stepwizard-step"><a className={`btn ${view === 'connect' ? 'btn-primary' : 'btn-light'}`}>3</a>
                      <p>Connect Email/Linkedin</p>
                    </div>
                    <div className="stepwizard-step"><a className={`btn ${view === 'finalize' ? 'btn-primary' : 'btn-light'}`}>4</a>
                      <p>Finalize your cyber SDR</p>
                    </div>
                  </div>
                </div>
                {
                  view === 'product' &&
                  <ProductsForm
                    setProduct={(p) => {
                      setProduct(p);
                      setView('target-audience');
                    }}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
