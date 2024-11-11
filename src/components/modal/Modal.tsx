import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';

import type { ModalProps } from './Modal.types.ts';
import './Modal.css';

import CloseIcon from '../../assets/CloseIcon.tsx';

export default function Modal({
  actions,
  content,
  icon,
  onClose,
  open,
  title
}: ModalProps) {
  if (!open) return (<></>);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (event?.key === 'Escape') {
      onClose();
    }
  }

  return (
    <>
      {createPortal(
        <div className="backdrop"></div>,
        document.body
      )}
      {createPortal(
        <FocusTrap>
          <div
            aria-describedby={`${content}`}
            aria-label={`${title}`}
            aria-modal="true"
            className="challenge-modal"
            role="dialog"
            onKeyDown={handleKeyDown}
          >
            <header>
              {icon}
              <h1>{title}</h1>
              <button
                aria-label="Close dialog"
                autoFocus={true}
                className="icon-button"
                onClick={onClose}
              ><CloseIcon/></button>
            </header>
            <div className="content" tabIndex={0}>{/* tabIndex of 0 for a11y kb control */}
              <p>{content}</p>
            </div>
            {
              actions?.length ?
              <footer>
                { actions.map(({ autoFocus, className, handler, label }, index) => {
                  // force tabIndex of 1 for first focus overriding within the dialog - in a prod env, i would find another solution
                  return (
                    <button
                      aria-label={`${label}`}
                      className={className}
                      key={`ModalAction_${index}`}
                      tabIndex={autoFocus ? 1 : 0}
                      onClick={() => handler()}
                    >{label}</button>);
                }) }
              </footer> :
              ''
            }
          </div>
        </FocusTrap>,
        document.body
      )}
    </>
  );
}
