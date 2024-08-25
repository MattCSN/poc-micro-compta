import React from 'react';
import Button from '@/components/DesignSystem/Buttons/Button/Button';
import './PrimaryButton.scss';

interface ButtonProps {
  label?: string;
  iconComponent?: React.ReactNode;
  disabled?: boolean;
  small?: boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({ label, iconComponent, disabled, small }) => {
  return (
    <Button
      className="primary-button"
      label={label}
      iconComponent={iconComponent}
      disabled={disabled}
      small={small}
    />
  );
};

export default PrimaryButton;
