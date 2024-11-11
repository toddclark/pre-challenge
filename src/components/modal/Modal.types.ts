import { ReactNode } from 'react';

export interface ModalProps {
  actions?: Array<ModalAction>,
  content: ReactNode,
  icon?: ReactNode,
  onClose: () => void,
  open: boolean,
  title: ReactNode,
}

export interface ModalAction {
  autoFocus?: boolean,
  className?: string,
  handler: () => void,
  label: string
}
