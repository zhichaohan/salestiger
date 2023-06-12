import React, { useMemo } from 'react';
import ReactQuill,{ Quill } from 'react-quill';
import ImageUploader from "quill-image-uploader";
import 'react-quill/dist/quill.snow.css';
import S3 from 'react-aws-s3';
import uuid from 'react-uuid'
Quill.register("modules/imageUploader", ImageUploader);

export default function HtmlEditor({
  bodyHtml,
  setBodyHtml,
}) {
  const config = {
    bucketName: gon.s3_bucket_name,
    dirName: gon.s3_store_dir, /* optional */
    region: gon.s3_region,
    accessKeyId: gon.s3_key,
    secretAccessKey: gon.s3_secret,
  };
  const ReactS3Client = new S3(config);

  const modules = useMemo(() => {
    return {
     toolbar: [
       [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
       [{size: []}],
       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
       [{'list': 'ordered'}, {'list': 'bullet'},
        {'indent': '-1'}, {'indent': '+1'}],
       ['link', 'image', 'video'],
       ['clean']
     ],
     clipboard: {
       // toggle to add extra line breaks when pasting HTML:
       matchVisual: false,
     },
     imageUploader: {
       upload: (file) => {
         return new Promise((resolve, reject) => {
           ReactS3Client
             .uploadFile(file, `${uuid()}-${file.name}`)
             .then(data => {
               resolve(data.location);
             })
             .catch(err => console.error(err));
         });
       },
     }
   };
 }, []);

  const handleChange = (html) => {
    setBodyHtml(html);
  }

  return (
    <div className="testApp">
      <ReactQuill
       onChange={handleChange}
       value={bodyHtml}
       modules={modules}
       formats={[
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]}
       bounds={'.testApp'}
       placeholder={'Type your answer'}
      />
    </div>
  )
}
