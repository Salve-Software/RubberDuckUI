import type { ToasterType } from './ToasterType';

export interface IToasterRefProps {
  type: ToasterType;
  title: string;
  description?: string;
  duration?: number;
  loading?: boolean;
}
