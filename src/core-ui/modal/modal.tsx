import React, {createContext, FC, ReactNode, useContext, useMemo} from 'react';
import cls from 'classnames';

import Backdrop from '../backdrop';

import Body, {IModalBodyProps} from './body';
import Footer, {IModalFooterProps} from './footer';
import Header, {IModalHeaderProps} from './header';

interface IModalComposition {
  Header: FC<IModalHeaderProps>;
  Body: FC<IModalBodyProps>;
  Footer: FC<IModalFooterProps>;
}

interface IModalContext {
  open: boolean;
  onClose: (value: boolean) => void;
}

interface IModalProps {
  className?: string;
  children?: ReactNode;
  open: boolean;
  backdrop?: boolean;
  transitionTime?: number;
  variant?: 'top' | 'center' | 'scrollable' | 'fullscreen';
  onClose: () => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

export const Modal: FC<IModalProps> & IModalComposition = ({
  className = 'max-w-xl',
  children,
  backdrop = true,
  variant = 'top',
  open = false,
  onClose
}) => {
  const memoizedContextValue = useMemo(() => ({open, onClose}), [open, onClose]);

  const getVariantClass = (currentVariant: string) => {
    let result = '';
    switch (currentVariant) {
      case 'center':
        result = 'abc-modal-center';
        break;
      case 'fullscreen':
        result = 'abc-modal-fullscreen';
        break;
      case 'scrollable':
        result = 'abc-modal-scrollable';
        break;
      default:
        result = 'abc-modal-top';
    }
    return result;
  };

  const dialogVariantClass = getVariantClass(variant);
  // const setBodyClass = (value: boolean) => {
  //   document.body.classList.toggle('no-scroll', value);
  //   document.body.classList.toggle(`${dialogVariantClass}-opened`, value);
  // };

  return (
    <ModalContext.Provider value={memoizedContextValue}>
      <div className={cls('abc-modal', 'scrollbar', `abc-modal-${variant}`)}>
        <div className={cls('abc-modal-dialog', className, dialogVariantClass)}>
          <div className="abc-modal-content">{children}</div>
        </div>
        <Backdrop open={backdrop && open} onClick={onClose} />
      </div>
    </ModalContext.Provider>
  );
};

export const useModal = (): IModalContext => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('This component must be used within a <Modal> component.');
  return context;
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

Modal.displayName = 'AIModal';
