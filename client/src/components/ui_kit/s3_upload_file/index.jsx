import React, { useState } from 'react'
import styles from './index.module.css'
import S3 from 'react-aws-s3';
import uuid from 'react-uuid'
import LoadingScreen from '../loading_screen';

export default function S3UploadFile({
    onChange = (allFiles) => console.log(allFiles),
    multiple = true,
    cta = 'Add photos',
    type = 'button',
    bucketName = gon.s3_bucket_name,
    dirName = gon.s3_store_dir,
    accept = ".jpg,.jpeg,.png"
}) {
  const allFiles = [];
  const [loading, setLoading] = useState(false);

  const config = {
    bucketName: bucketName,
    dirName: dirName, /* optional */
    region: gon.s3_region,
    accessKeyId: gon.s3_key,
    secretAccessKey: gon.s3_secret,
  };
  const ReactS3Client = new S3(config);

  const s3UploadFile = (files, i) => {
    setLoading(true)
    if (files.length === i){
      setLoading(false)
    }
    const file = files[i];
    if (!file) {
      onChange(allFiles);
      return;
    }

    ReactS3Client
      .uploadFile(file, `${uuid()}-${file.name}`)
      .then(data => {
        allFiles.push(data.location);
        s3UploadFile(files, i+1);
      })
      .catch(err => console.error(err));
  }

  const onFileChange = (e) => {
    if (type === 'form-field') {
      e.preventDefault();
    }
    s3UploadFile(e.target.files, 0);
  }

  return (<>
      {type === 'button' && <div style={{display: 'flex'}}>
        <button className={styles.file_btn}>
          <label className={styles.btn_txt}>{cta} <span className={styles.helper_txt}>(25mb max)</span><img className={styles.icon} src="https://patientpartner-images.s3.us-west-1.amazonaws.com/website/Vector.svg"/><input onChange={onFileChange} type="file" style={{ display: 'none' }} name="image" multiple={multiple} accept=".jpg,.jpeg,.png"/></label>
        </button>
        {loading &&
        <div style={{margin:'10px 0px 0px 10px'}}>
          <LoadingScreen size={'22'}/>
        </div>
        }
      </div>}
      {type === 'icon' && <div style={{display: 'flex'}}>
        {!loading ?
        <button className={`${styles.attachment_btn}`}>
          <label><img className={styles.icon_btn} src="https://patientpartner-images.s3.us-west-1.amazonaws.com/website/platform/image.svg" /><input onChange={onFileChange} type="file" style={{ display: 'none' }} name="image" multiple  accept=".jpg,.jpeg,.png"/></label>
        </button>
        :
        <div style={{margin:'10px 0px 0px 10px'}}>
          <LoadingScreen size={'22'}/>
        </div>
        }
      </div>}
      {type === 'field' &&
        <button style={{position: 'relative'}} className={`${styles.drop_field}`}>
          <label><p><span style={{color: '#419DA5'}}>+ Add .csv, xlsx, xls file</span> or drop file here</p><input onChange={(e) => onFileChange(e)} type="file" name="file" accept=".csv,.xlsx.xls"/></label>
        </button>
      }
      {
        type === 'form-field' &&
          <input onChange={onFileChange} type="file" name="image" multiple={multiple} accept={accept}/>
      }
    </>
  )
}
