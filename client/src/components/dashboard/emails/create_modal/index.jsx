import React, { useState, useEffect, useContext, useMemo } from 'react';
import Modal from "react-bootstrap/Modal";
import ReactQuill,{ Quill } from 'react-quill';
import ImageUploader from "quill-image-uploader";
import 'react-quill/dist/quill.snow.css';
import S3 from 'react-aws-s3';
import uuid from 'react-uuid'
Quill.register("modules/imageUploader", ImageUploader);

export default function EmailsCreateModal({
  showModal,
  setShowModal,
  teamMembers,
  recipient,
  onSubmit
}) {
  const [bodyHtml, setBodyHtml] = useState();
  const [subject, setSubject] = useState('');
  const [teamMember, setTeamMember] = useState(teamMembers[0].uuid)

  const teamMemberOnChange = (e) => {
    setTeamMember(e.target.value);
  }

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

  const onSubmitClick = () => {
    setShowModal(false);
    onSubmit({
      team_member_id: teamMember,
      subject: subject,
      body_html: bodyHtml,
    });
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <div className="modal-header">
        <h5 className="modal-title">New message</h5>
        <button onClick={() => setShowModal(false)} className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
        <div class="mb-3">
          <label class="form-label" for="createEmailTeamMemberSelect">From:</label>
            <select class="form-select digits" id="createEmailTeamMemberSelect" onChange={teamMemberOnChange}>
              <option value="" disabled="disabled">Select a team member</option>
            {
              teamMembers.map(tm => {
                return (
                  <option value={tm.uuid}>{tm.name}</option>
                )
              })
            }
            </select>
          </div>
          <div className="mb-3">
            <label className="col-form-label" for="recipient-name">Recipient:</label>
            <input className="form-control" type="text" value={recipient} disabled />
          </div>
          <div className="mb-3">
            <label className="col-form-label" for="recipient-name">Subject:</label>
            <input className="form-control" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="col-form-label" for="message-text">Message:</label>
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
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={() => setShowModal(false)} className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        <button onClick={onSubmitClick} className="btn btn-primary" type="button">Send message</button>
      </div>
    </Modal>
  )
}
