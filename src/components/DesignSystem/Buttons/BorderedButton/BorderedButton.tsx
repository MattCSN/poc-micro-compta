import React from 'react';
import { FlexBox } from '@/components/styled';
import './BorderedButton.scss';

interface ButtonProps {
  label?: string;
  iconComponent?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  small?: boolean;
}

const BorderedButton: React.FC<ButtonProps> = ({
  label,
  iconComponent,
  disabled,
  className,
  small,
}) => {
  const buttonClassName = `gustave-button bordered-button
  ${className} 
  ${disabled ? 'disabled' : ''} 
  ${!label ? 'icon-only-button' : ''}
  ${small ? 'small-button' : ''}`;

  return (
    <FlexBox>
      <button className={buttonClassName}>
        {iconComponent}
        {label}
      </button>
    </FlexBox>
  );
};

export default BorderedButton;
