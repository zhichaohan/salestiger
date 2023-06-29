import React, { useState } from 'react'
import styles from './index.module.css';
import { createProduct } from '../../../../api/products';
import { notifyError, arrayCompact } from '../../../../helpers';

export default function ProductsForm({
  setProduct
}) {
  const [name, setName] = useState();
  const [feature1, setFeature1] = useState();
  const [feature2, setFeature2] = useState();
  const [feature3, setFeature3] = useState();
  const [problemStat1, setProblemStat1] = useState();
  const [problemStat2, setProblemStat2] = useState();
  const [problemStat3, setProblemStat3] = useState();
  const [benefits1, setBenefits1] = useState();
  const [benefits2, setBenefits2] = useState();
  const [benefits3, setBenefits3] = useState();
  const [needPayoffStat1, setNeedPayoffStat1] = useState();
  const [needPayoffStat2, setNeedPayoffStat2] = useState();
  const [needPayoffStat3, setNeedPayoffStat3] = useState();
  const [submitDisabled, setSubmitDisabled] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitDisabled(true);
    if (!name) {
      notifyError('Please provide the name of your product or service');
      setSubmitDisabled(false);
      return;
    }

    if (!feature1 && !feature2 && !feature3) {
      notifyError('Please provide at least one feature of your product or service');
      setSubmitDisabled(false);
      return;
    }

    if (!problemStat1 && !problemStat2 && !problemStat3) {
      notifyError('Please provide at least one problematic statistic of your product or service solve');
      setSubmitDisabled(false);
      return;
    }

    if (!benefits1 && !benefits2 && !benefits3) {
      notifyError('Please provide at least one benefit of your product or service provides');
      setSubmitDisabled(false);
      return;
    }

    if (!needPayoffStat1 && !needPayoffStat2 && !needPayoffStat3) {
      notifyError('Please provide at least one measurable impact your product or service provides');
      setSubmitDisabled(false);
      return;
    }

    createProduct({
      name: name,
      features: arrayCompact([feature1, feature3, feature3]),
      problemStats: arrayCompact([problemStat1, problemStat2, problemStat3]),
      benefits: arrayCompact([benefits1, benefits2, benefits3]),
      needPayoffStats: arrayCompact([needPayoffStat1, needPayoffStat2, needPayoffStat3])
    }, (product) => {
      setProduct(product);
      setSubmitDisabled(false);
    })
  }

  return (
    <form>
      <div className="setup-content" id="step-1">
        <div className="col-xs-12">
          <div className="col-md-12">
            <div className="mb-3">
              <label className="control-label">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" type="text" placeholder="The name of product or service (ie: Cyber SDR)" required="required" />
            </div>
            <div className="mb-3">
              <label className="control-label">Describe some of the features of your product or service</label>
              <input value={feature1} onChange={(e) => setFeature1(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="AI-powered lead gen" required="required" />
              <input value={feature2} onChange={(e) => setFeature2(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="Combining decades of sales expertise with machine learning" required="required" />
              <input value={feature3} onChange={(e) => setFeature3(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="Appointment booking" required="required" />
            </div>
            <div className="mb-3">
              <label className="control-label">Describe some of the problematic statistics your product or service solve</label>
              <input value={problemStat1} onChange={(e) => setProblemStat1(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="Sales reps spend more than 450 hours every year on prospecting and lead gen activities" required="required" />
              <input value={problemStat2} onChange={(e) => setProblemStat2(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="Sales reps spend a quarter of their day trying to book new meetings with the right customer" required="required" />
              <input value={problemStat3} onChange={(e) => setProblemStat3(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="Sales reps will each spend 56 days this year trying to find more customers to connect with" required="required" />
            </div>
            <div className="mb-3">
              <label className="control-label">Describe some of the benefits your product or service provide</label>
              <input value={benefits1} onChange={(e) => setBenefits1(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="Increased conversion rates" required="required" />
              <input value={benefits2} onChange={(e) => setBenefits2(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="Sell more, faster" required="required" />
              <input value={benefits3} onChange={(e) => setBenefits3(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="Solution to your quota problem" required="required" />
            </div>
            <div className="mb-3">
              <label className="control-label">Describe any measurable impact your product or service provide</label>
              <input value={needPayoffStat1} onChange={(e) => setNeedPayoffStat1(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="Increase new qualified meetings by 48%" required="required" />
              <input value={needPayoffStat2} onChange={(e) => setNeedPayoffStat2(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="Increase average sales activity by 78%" required="required" />
              <input value={needPayoffStat3} onChange={(e) => setNeedPayoffStat3(e.target.value)} className={`form-control ${styles.multiline}`} type="text" placeholder="Increase revenue by 22%" required="required" />
            </div>
            <button onClick={onSubmit} disabled={submitDisabled} className="btn btn-primary nextBtn pull-right" type="button">Next</button>
          </div>
        </div>
      </div>
    </form>
  )
}
