import React from 'react';
import './PrimaryButton.scss';
import Button from '@/components/DesignSystem/Buttons/Button/Button';

interface ButtonProps {
  label?: string;
  iconComponent?: React.ReactNode;
  disabled?: boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({ label, iconComponent, disabled }) => {
  return (
    <Button
      className="primary-button"
      label={label}
      iconComponent={iconComponent}
      disabled={disabled}
    />
  );
};

export default PrimaryButton;
