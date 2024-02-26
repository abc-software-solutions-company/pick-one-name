import {useState} from 'react';

import useToast from '@/core-ui/toast';

import * as APIMedia from '@/modules/media/api/media.api';
import {MediaEntity} from '@/modules/media/entities/media.entity';

import {MAX_FILE_IMAGE_SIZE, MAX_FILE_IMAGE_SIZE_TEXT, TYPE_FILE} from '../constants/file.constant';

export default function useUpload() {
  const toast = useToast();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [indexItem, setIndexItem] = useState<string>();
  const [uploadDataElements, setUploadDataElements] = useState<{index: number; value: MediaEntity}>();
  const [uploadData, setUploadData] = useState<MediaEntity | undefined>();
  const [isUploaded, setIsUploaded] = useState<boolean | undefined>(false);

  const upload = async (file?: File | null, index?: number, id?: string) => {
    const typeFile = file?.type.split('/')[0];

    if (!file) {
      setIsUploaded(undefined);
      setUploadData?.(undefined);

      return;
    }
    if (indexItem === id || !index) setIsUploading(true);
    if (typeFile === TYPE_FILE.IMAGE) {
      if (Math.floor(file.size / 1024) > MAX_FILE_IMAGE_SIZE) {
        toast.show({
          type: 'danger',
          title: '',
          content: `Kích thước file không được lớn hơn ${MAX_FILE_IMAGE_SIZE_TEXT}`
        });

        setIsUploading(false);

        return;
      }
    }
    try {
      const presignedResponse = await APIMedia.getPresignedUrl(file.name);
      const formData = new FormData();

      Object.keys(presignedResponse.fields).forEach(key => {
        formData.append(key, presignedResponse.fields[key]);
      });
      formData.append('file', file);
      const uploadResponse = await APIMedia.uploadToS3(presignedResponse.url, formData);

      if (uploadResponse.status === 204) {
        setIsUploading(false);
        setIsUploaded(true);
        if (index === undefined) {
          setUploadData?.(presignedResponse.file);
        } else {
          setUploadDataElements?.({index: index, value: presignedResponse.file});
        }

        return presignedResponse.file;
      }
    } catch (error) {
      //TODO: handle later
      // eslint-disable-next-line no-console
      console.error('Error uploading files:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    upload,
    setIndexItem,
    setUploadData,
    isUploading,
    uploadData,
    uploadDataElements,
    setIsUploaded,
    isUploaded
  };
}
