/* tslint:disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: string;
  AWSDateTime: string;
  AWSEmail: string;
  AWSIPAddress: string;
  AWSJSON: string;
  AWSPhone: string;
  AWSTime: string;
  AWSTimestamp: number;
  AWSURL: string;
};










export type ClientMast = {
  clientID: Scalars['ID'];
  chargeUserID?: Maybe<Scalars['ID']>;
  companyName?: Maybe<Scalars['String']>;
  accommodationName: Scalars['String'];
  clientUserName?: Maybe<Scalars['String']>;
  expectedSalesAmount?: Maybe<Scalars['String']>;
  prefecture?: Maybe<Scalars['String']>;
  homePagePotential?: Maybe<Scalars['String']>;
  clientEmail: Scalars['String'];
  clientPhoneNumber?: Maybe<Scalars['String']>;
  requiredTime?: Maybe<Scalars['String']>;
  phaseNumberStatus?: Maybe<Scalars['Int']>;
  phaseDetailStatus?: Maybe<Scalars['String']>;
  appointmentStatus?: Maybe<Scalars['String']>;
  pastStatus?: Maybe<Scalars['String']>;
  newStatus?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['Int']>;
};

export type ClientMastInput = {
  clientID: Scalars['ID'];
  chargeUserID?: Maybe<Scalars['ID']>;
  companyName?: Maybe<Scalars['String']>;
  accommodationName: Scalars['String'];
  clientUserName?: Maybe<Scalars['String']>;
  expectedSalesAmount?: Maybe<Scalars['String']>;
  prefecture?: Maybe<Scalars['String']>;
  homePagePotential?: Maybe<Scalars['String']>;
  clientEmail: Scalars['String'];
  clientPhoneNumber?: Maybe<Scalars['String']>;
  requiredTime?: Maybe<Scalars['String']>;
  phaseNumberStatus?: Maybe<Scalars['Int']>;
  phaseDetailStatus?: Maybe<Scalars['String']>;
  appointmentStatus?: Maybe<Scalars['String']>;
  pastStatus?: Maybe<Scalars['String']>;
  newStatus?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['Int']>;
};

export enum EVENT_STATUS {
  CONTACT = 'CONTACT',
  REACTION = 'REACTION',
  DEAD = 'DEAD'
}

export enum ErrorCode {
  chillnnSFAError_401_notSignIn = 'chillnnSFAError_401_notSignIn',
  chillnnSFAError_404_resourceNotFound = 'chillnnSFAError_404_resourceNotFound',
  chillnnSFAError_500_systemError = 'chillnnSFAError_500_systemError'
}

export type EventMast = {
  eventID: Scalars['ID'];
  clientID: Scalars['ID'];
  editedUserID?: Maybe<Scalars['ID']>;
  eventDetail: Scalars['String'];
  eventNumberStatus: Scalars['Int'];
  eventStatus: EVENT_STATUS;
  eventCountNumber: Scalars['Int'];
  eventMemo?: Maybe<Scalars['String']>;
  eventTerm?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['Int']>;
};

export type EventMastInput = {
  eventID: Scalars['ID'];
  clientID: Scalars['ID'];
  editedUserID?: Maybe<Scalars['ID']>;
  eventDetail: Scalars['String'];
  eventNumberStatus: Scalars['Int'];
  eventStatus: EVENT_STATUS;
  eventCountNumber: Scalars['Int'];
  eventMemo?: Maybe<Scalars['String']>;
  eventTerm?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['Int']>;
};

export type FetchClientsByPhaseInput = {
  phaseNumber: Scalars['Int'];
  phaseDetail: Scalars['String'];
  phaseStatus: Scalars['String'];
};

export enum PHASE_STATUS {
  TITLE = 'TITLE',
  DATA = 'DATA',
  DEAD = 'DEAD'
}

export type PhaseMast = {
  phaseID: Scalars['ID'];
  clientID?: Maybe<Scalars['ID']>;
  phaseNumber: Scalars['Int'];
  editedUserID?: Maybe<Scalars['ID']>;
  phaseDetail: Scalars['String'];
  phaseStatus: PHASE_STATUS;
  phaseTerm?: Maybe<Scalars['String']>;
  phaseDate?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['AWSTimestamp']>;
  updatedAt?: Maybe<Scalars['AWSTimestamp']>;
  deletedAt?: Maybe<Scalars['Int']>;
};

export type PhaseMastInput = {
  phaseID: Scalars['ID'];
  clientID?: Maybe<Scalars['ID']>;
  phaseNumber: Scalars['Int'];
  editedUserID?: Maybe<Scalars['ID']>;
  phaseDetail: Scalars['String'];
  phaseStatus: PHASE_STATUS;
  phaseTerm?: Maybe<Scalars['String']>;
  phaseDate?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['AWSTimestamp']>;
  updatedAt?: Maybe<Scalars['AWSTimestamp']>;
  deletedAt?: Maybe<Scalars['Int']>;
};

export type UserMast = {
  userID: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  jobTitleName?: Maybe<Scalars['String']>;
  userStatus: Scalars['String'];
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['Int']>;
};

export type UserMastInput = {
  userID: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  jobTitleName?: Maybe<Scalars['String']>;
  userStatus: Scalars['String'];
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['Int']>;
};
