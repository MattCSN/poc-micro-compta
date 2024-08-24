import React from 'react';
import { FlexBox } from '@/components/styled';
import './Button.scss';

interface ButtonProps {
  label?: string;
  iconComponent?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, iconComponent }) => {
  return (
    <FlexBox>
      <button className="gustave-button">
        {iconComponent}
        <span>{label}</span>
      </button>
    </FlexBox>
  );
};

export default Button;
