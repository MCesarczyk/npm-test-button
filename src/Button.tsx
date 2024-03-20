import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="rounded-lg border py-2 px-4 text-base font-medium bg-slate-950 cursor-pointer transition-colors hover:border-cyan-600 focus:outline-4 focus-visible:outline-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
