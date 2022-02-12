import { ReactNode } from "react";

export interface InputProps {
  label?: string;
  icon?: ReactNode;
  placeholder: string;
  className?: string;
  value?: string;
  toggleFunction: (value: string) => void;
}

export interface TipBadgeProps {
  label: string;
  value: string;
  toggleFunction: (value: string) => void;
}

export interface TipOptions {
  label: string;
  value: string;
}

export interface CountProps {
  title: string;
  value: number;
}

export interface LayoutProps {
  children: ReactNode;
}
