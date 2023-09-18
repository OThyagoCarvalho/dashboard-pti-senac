import React, { useState } from 'react';

function SimpleDialog({ buttonLabel, buttonType, dialogTitle, dialogContent}) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <button type={buttonType || 'button'} onClick={openDialog}>{buttonLabel}</button>

      {isOpen && (
        <div className="overlay">
          <div className="dialog">
            <h2>{dialogTitle}</h2>
            {dialogContent}
            <button className='closeButton' onClick={closeDialog}>X</button>
          </div>
        </div>
      )}

      <style>
        {`
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
          }

          .dialog {
            background-color: white;
            padding: 20px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            position: relative;

          .closeButton {
            position: absolute;
            top: 0;
            right: 0;
            border: none;
            background-color: transparent;
            padding: 10px;
            cursor: pointer;
            color: red;
            font-weight: bold;
          }  
          }
        `}
      </style>
    </section>
  );
}

export default SimpleDialog;
