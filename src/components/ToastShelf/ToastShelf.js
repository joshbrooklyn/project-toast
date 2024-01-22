import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const {toastArray, closeAllToasts} = React.useContext(ToastContext);

  return (
    <ol 
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"      
    >
      {toastArray.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} message={toast.message} id={toast.id}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;