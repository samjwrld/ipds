import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServicePoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface AudienceCard {
  label: string;
  description: string;
}

export interface EducationItem {
  label: string;
  text: string;
}

export enum AnalysisStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}

export interface StrategicInsight {
  title: string;
  insight: string;
}