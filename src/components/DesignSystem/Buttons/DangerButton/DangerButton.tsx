import React from 'react';
import Button from '@/components/DesignSystem/Buttons/Button/Button';
import './DangerButton.scss';

interface ButtonProps {
  label?: string;
  iconComponent?: React.ReactNode;
  disabled?: boolean;
  small?: boolean;
}

const DangerButton: React.FC<ButtonProps> = ({ label, iconComponent, disabled, small }) => {
  return (
    <Button
      className="danger-button"
      label={label}
      iconComponent={iconComponent}
      disabled={disabled}
      small={small}
    />
  );
};

export default DangerButton;
