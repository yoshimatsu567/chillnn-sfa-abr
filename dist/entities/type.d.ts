export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
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
export declare type ClientMast = {
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
    createdAt: Scalars['AWSTimestamp'];
    updatedAt: Scalars['AWSTimestamp'];
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare type ClientMastInput = {
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
    createdAt: Scalars['AWSTimestamp'];
    updatedAt: Scalars['AWSTimestamp'];
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare enum ErrorCode {
    chillnnSFAError_401_notSignIn = "chillnnSFAError_401_notSignIn",
    chillnnSFAError_404_resourceNotFound = "chillnnSFAError_404_resourceNotFound",
    chillnnSFAError_500_systemError = "chillnnSFAError_500_systemError"
}
export declare type EventMast = {
    eventID: Scalars['ID'];
    clientID: Scalars['ID'];
    eventNumber: Scalars['Int'];
    editedUserID: Scalars['ID'];
    eventDetail: Scalars['String'];
    eventStatus: Scalars['String'];
    eventMemo?: Maybe<Scalars['String']>;
    eventTerm?: Maybe<Scalars['String']>;
    eventDate?: Maybe<Scalars['String']>;
    createdAt: Scalars['AWSTimestamp'];
    updatedAt: Scalars['AWSTimestamp'];
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare type EventMastInput = {
    eventID: Scalars['ID'];
    clientID: Scalars['ID'];
    eventNumber: Scalars['Int'];
    editedUserID: Scalars['ID'];
    eventDetail: Scalars['String'];
    eventStatus: Scalars['String'];
    eventMemo?: Maybe<Scalars['String']>;
    eventTerm?: Maybe<Scalars['String']>;
    eventDate?: Maybe<Scalars['String']>;
    createdAt: Scalars['AWSTimestamp'];
    updatedAt: Scalars['AWSTimestamp'];
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare type PhaseMast = {
    phaseID: Scalars['ID'];
    clientID: Scalars['ID'];
    phaseNumber: Scalars['Int'];
    editedUserID: Scalars['ID'];
    phaseDetail: Scalars['String'];
    phaseStatus?: Maybe<Scalars['String']>;
    phaseTerm?: Maybe<Scalars['String']>;
    phaseDate?: Maybe<Scalars['String']>;
    createdAt: Scalars['AWSTimestamp'];
    updatedAt: Scalars['AWSTimestamp'];
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare type PhaseMastInput = {
    phaseID: Scalars['ID'];
    clientID: Scalars['ID'];
    phaseNumber: Scalars['Int'];
    editedUserID: Scalars['ID'];
    phaseDetail: Scalars['String'];
    phaseStatus?: Maybe<Scalars['String']>;
    phaseTerm?: Maybe<Scalars['String']>;
    phaseDate?: Maybe<Scalars['String']>;
    createdAt: Scalars['AWSTimestamp'];
    updatedAt: Scalars['AWSTimestamp'];
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare type UserMast = {
    userID: Scalars['ID'];
    name: Scalars['String'];
    email: Scalars['String'];
    phoneNumber?: Maybe<Scalars['String']>;
    jobTitleName?: Maybe<Scalars['String']>;
    userStatus: Scalars['String'];
    createdAt: Scalars['AWSTimestamp'];
    updatedAt: Scalars['AWSTimestamp'];
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare type UserMastInput = {
    userID: Scalars['ID'];
    name: Scalars['String'];
    email: Scalars['String'];
    phoneNumber?: Maybe<Scalars['String']>;
    jobTitleName?: Maybe<Scalars['String']>;
    userStatus: Scalars['String'];
    createdAt: Scalars['AWSTimestamp'];
    updatedAt: Scalars['AWSTimestamp'];
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
