import React from "react";

interface Props {
  onClick: () => void;
  className: string;
  disabled: boolean;
}

const Button: React.FC<Props> = ({ onClick, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`${className} disabled:opacity-10 disabled:cursor-not-allowed`}
      onClick={onClick}
    >
      <p>START</p>
    </button>
  );
};

export default Button;
