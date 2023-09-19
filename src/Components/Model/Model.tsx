import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import styles from "./model.module.css";

import { stateStatus} from "../../Redux/Slices/stateSlice";
import { useAppDispatch } from "../../Hooks/ReduxHook";
import { useNavigate } from 'react-router-dom';

export default function Model() {
  const navigate=useNavigate()
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState<boolean>(false);

    const showModal = () => {
      setOpen(true);
    };
  
  
    const handleCancel = () => {
      setOpen(false);
    };
  return <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        open={open}
        title={<p className={styles.textColor}>Signup as a</p>}
        onCancel={handleCancel}
        footer={null}
      >
       <div className={styles.ParentDivButtons}>
       <button className="w-75" name="student"  onClick={(event: React.MouseEvent<HTMLButtonElement>)=>{dispatch(stateStatus(event.currentTarget.getAttribute('name'))) ; navigate('/register')}}>
        Student
       </button>
       <button className="w-75" data-attribute="teacher" name="teacher"  onClick={(event: React.MouseEvent<HTMLButtonElement>)=>{dispatch(stateStatus(event.currentTarget.getAttribute('name'))) ;navigate('/register')}}>
       Teacher
       </button>
       </div>
      </Modal>
  </>
}
