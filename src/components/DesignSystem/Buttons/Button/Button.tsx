import React from 'react';
import { FlexBox } from '@/components/styled';
import './Button.scss';

interface ButtonProps {
  label?: string;
  iconComponent?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, iconComponent, disabled, className }) => {
  return (
    <FlexBox>
      <button className={`gustave-button ${className} ${disabled ? 'disabled' : ''}`}>
        {iconComponent}
        {label}
      </button>
    </FlexBox>
  );
};

export default Button;
