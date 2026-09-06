export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'guarding' | 'specialized' | 'facility';
  features: string[];
  iconName: string;
}

export interface TrainingArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TrainingStep {
  step: number;
  title: string;
  description: string;
  focus: string;
}

export interface CoreValue {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface StatutoryRecord {
  title: string;
  registrationNumber: string;
  authority: string;
  verified: boolean;
}

export interface SectorItem {
  name: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface ConsultationFormData {
  fullName: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  location: string;
  securityRequirement: string;
  personnelRequired: string;
  message: string;
}
