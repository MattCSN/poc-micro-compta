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
  const buttonClassName = `gustave-button ${className} ${disabled ? 'disabled' : ''} ${
    !label ? 'icon-only-button' : ''
  }`;

  return (
    <FlexBox>
      <button className={buttonClassName}>
        {iconComponent}
        {label}
      </button>
    </FlexBox>
  );
};

export default Button;
