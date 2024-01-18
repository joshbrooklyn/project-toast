import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [showToast, setShowToast] = React.useState(false);

  const id = React.useId();

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
            id="message" 
            className={styles.messageInput} 
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
            {VARIANT_OPTIONS.map((option) => (
              <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                <label htmlFor={`variant-${option}`}>
                  <input
                    key={id}
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variant === option}
                    onChange={ event => {
                      setVariant(event.target.value)
                    }}
                  />
                  {option}
                </label>
              </div>
              ))
            }          
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => setShowToast(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
