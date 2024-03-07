import {FC} from 'react';

import Icon from '@/core-ui/icon';
import useToast from '@/core-ui/toast';

interface ICopyProps {
  value: string;
}

const Copy: FC<ICopyProps> = ({value = ''}) => {
  const toast = useToast();
  function copyToClipboard() {
    navigator?.clipboard?.writeText(value);
    toast.show({type: 'success', title: 'Sao chép liên kết!', content: 'Sao chép liên kết thành công'});
  }

  return <Icon name="ico-copy" onClick={copyToClipboard} className="cursor-pointer" />;
};

export default Copy;
