import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import React, {FC, useEffect, useState} from 'react';

interface IEditorProps {
  name: string;
  value: string;
  toolbar?: string[];
  removeToolbarItem?: string[];
  onChange: (data: string) => void;
}

const defaultToolbar = [
  'heading',
  '|',
  'bold',
  'italic',
  'link',
  'bulletedList',
  'numberedList',
  '|',
  'outdent',
  'indent',
  '|',
  'uploadImage',
  'blockQuote',
  'insertTable',
  'mediaEmbed',
  'undo',
  'redo'
];

const Editor: FC<IEditorProps> = ({name, value, toolbar = defaultToolbar, onChange}) => {
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, [toolbar]);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          name={name}
          data={value}
          onChange={(_: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Editor;
