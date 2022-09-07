import Image from 'next/image';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {useGetImageSrc} from '@/hooks/useGetImageSrc';
import {IImage} from '@/types';
import {getImageURL} from '@/utils/misc';

interface IProps {
  content: string;
  cover: IImage;
}

const PostContent: React.FC<React.PropsWithChildren<IProps>> = ({
  content,
  cover
}) => {
  const {url, width, height} = useGetImageSrc(cover);

  return (
    <article>
      <div className="image">
        <Image
          src={url}
          width={width}
          height={height}
          alt={cover.data.attributes.alternativeText}
          blurDataURL={cover.data.attributes.placeholder}
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        transformImageUri={uri =>
          uri.startsWith('http') ? uri : `${getImageURL(uri)}`
        }
        className="wysiwyg"
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
