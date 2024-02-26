import {useState} from 'react';

import * as APIMedia from '@/modules/media/api/media.api';
import {MediaEntity} from '@/modules/media/entities/media.entity';

export default function useUpload() {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [indexItem, setIndexItem] = useState<string>();
  const [uploadDataElements, setUploadDataElements] = useState<{index: number; value: MediaEntity}>();
  const [uploadData, setUploadData] = useState<MediaEntity | undefined>();
  const [isUploaded, setIsUploaded] = useState<boolean | undefined>(false);

  const upload = async (file?: File | null, index?: number, id?: string) => {
    if (!file) {
      setIsUploaded(undefined);
      setUploadData?.(undefined);

      return;
    }
    if (indexItem === id || !index) setIsUploading(true);
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
