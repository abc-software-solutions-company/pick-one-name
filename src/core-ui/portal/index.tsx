import { FC, ReactNode, useEffect, useState } from 'react'; // Import ReactNode
import { createPortal } from 'react-dom';

import PortalAnchor from './anchor';

interface IPortalComposition {
  Anchor: any;
}
interface IPortalProps {
  children: ReactNode;
}

const Portal: FC<IPortalProps> & IPortalComposition = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector('#react-modal-root') as HTMLDivElement) : null;
};

Portal.Anchor = PortalAnchor;

Portal.displayName = 'ABCPortal';

export default Portal;
