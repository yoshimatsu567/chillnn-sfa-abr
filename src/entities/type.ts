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
  /** 営業側の担当者名 */
  chargeUserID?: Maybe<Scalars['ID']>;
  /** 会社名 */
  companyName?: Maybe<Scalars['String']>;
  /** 施設名 */
  accommodationName: Scalars['String'];
  /** 顧客の担当者名 */
  clientUserName?: Maybe<Scalars['String']>;
  /** 予想流通額 */
  expectedSalesAmount?: Maybe<Scalars['String']>;
  /** 施設所在地 */
  prefecture?: Maybe<Scalars['String']>;
  /** HPのポテンシャル */
  homePagePotential?: Maybe<Scalars['String']>;
  /** メールアドレス */
  clientEmail: Scalars['String'];
  /** 電話番号 */
  clientPhoneNumber?: Maybe<Scalars['String']>;
  /** 所要時間 */
  requiredTime?: Maybe<Scalars['String']>;
  /** Phaseの状態、だけど検討の余地あり */
  phaseStatus?: Maybe<Scalars['Int']>;
  /** Appointmentの状態、だけど検討の余地あり */
  appointmentStatus?: Maybe<Scalars['String']>;
  /** 過去ステータス */
  pastStatus?: Maybe<Scalars['String']>;
  /** 新規ステータス */
  newStatus?: Maybe<Scalars['String']>;
  /** status */
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
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
  phaseStatus?: Maybe<Scalars['Int']>;
  appointmentStatus?: Maybe<Scalars['String']>;
  pastStatus?: Maybe<Scalars['String']>;
  newStatus?: Maybe<Scalars['String']>;
  /** status */
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export enum ErrorCode {
  chillnnSFAError_401_notSignIn = 'chillnnSFAError_401_notSignIn',
  chillnnSFAError_404_resourceNotFound = 'chillnnSFAError_404_resourceNotFound',
  chillnnSFAError_500_systemError = 'chillnnSFAError_500_systemError'
}

export type EventMast = {
  eventID: Scalars['ID'];
  clientID?: Maybe<Scalars['ID']>;
  eventNumber: Scalars['Int'];
  /** このEventの編集者 */
  editedUserID?: Maybe<Scalars['ID']>;
  /** Eventの名前 */
  eventDetail: Scalars['String'];
  /** Eventのステータス、コンタクトとアクションのメモを想定、1st,2nd,3rd... */
  eventStatus: Scalars['String'];
  /** Eventのメモ内容 */
  eventMemo?: Maybe<Scalars['String']>;
  /** Eventの所属する期間、いる？ */
  eventTerm?: Maybe<Scalars['String']>;
  /** Eventの実施日 */
  eventDate?: Maybe<Scalars['String']>;
  /** status */
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type EventMastInput = {
  eventID: Scalars['ID'];
  clientID?: Maybe<Scalars['ID']>;
  eventNumber: Scalars['Int'];
  editedUserID?: Maybe<Scalars['ID']>;
  eventDetail: Scalars['String'];
  eventStatus: Scalars['String'];
  eventMemo?: Maybe<Scalars['String']>;
  eventTerm?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['String']>;
  /** status */
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export enum PHASE_STATUS {
  /** Phaseを見分ける用の Enum ,ステータス */
  TITLE = 'TITLE',
  DATA = 'DATA',
  DEAD = 'DEAD'
}

export type PhaseMast = {
  phaseID: Scalars['ID'];
  /** Phaseを所有するClientのID */
  clientID?: Maybe<Scalars['ID']>;
  /** Phase的に何番目のPhaseなのか */
  phaseNumber: Scalars['Int'];
  /** そのPhaseを編集した人のID */
  editedUserID?: Maybe<Scalars['ID']>;
  /** Phaseの名前、詳細 */
  phaseDetail: Scalars['String'];
  /** Phaseを見分ける用の Enum ,ステータス */
  phaseStatus: PHASE_STATUS;
  /** そのPhaseが所属する期間を入れる想定 */
  phaseTerm?: Maybe<Scalars['String']>;
  /** そのPhaseに移った日、想定 */
  phaseDate?: Maybe<Scalars['String']>;
  /** status */
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
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
  /** status */
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type UserMast = {
  userID: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  jobTitleName?: Maybe<Scalars['String']>;
  userStatus: Scalars['String'];
  /** status */
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type UserMastInput = {
  userID: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  jobTitleName?: Maybe<Scalars['String']>;
  userStatus: Scalars['String'];
  /** status */
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
