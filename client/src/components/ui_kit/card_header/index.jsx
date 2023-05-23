import React from 'react';
import styles from './index.module.css';

export default function CardHeader({
  title,
  addObj,
  addObjOnClick,
  editObj,
  editObjOnClick,
  classNames
}) {
  return (
    <div className={`card-header ${styles.workflow_attribtues_header} ${classNames}`}>
      <h5 className="mb-0">{title}</h5>
      {
        addObj && <a className="f-w-600" href="javascript:void(0)" onClick={addObjOnClick}><i class={`fa fa-plus ${styles.icon}`}></i>Create {addObj}</a>
      }
      {
        editObj && <a className="f-w-600" href="javascript:void(0)" onClick={editObjOnClick}><i class={`fa fa-edit ${styles.icon}`}></i>Edit {editObj}</a>
      }
    </div>
  )
}
