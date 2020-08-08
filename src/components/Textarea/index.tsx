import React, { TextareaHTMLAttributes } from 'react';

import { TextareaBlock } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({name, label, ...rest}) => {
  return (
    <TextareaBlock className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </TextareaBlock>
  );
}

export default Textarea;