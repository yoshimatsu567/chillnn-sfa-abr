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
    phaseNumberStatus?: Maybe<Scalars['Int']>;
    phaseDetailStatus?: Maybe<Scalars['String']>;
    appointmentStatus?: Maybe<Scalars['String']>;
    pastStatus?: Maybe<Scalars['String']>;
    newStatus?: Maybe<Scalars['String']>;
    createdAt: Scalars['AWSTimestamp'];
    updatedAt: Scalars['AWSTimestamp'];
    deletedAt?: Maybe<Scalars['Int']>;
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
    phaseNumberStatus?: Maybe<Scalars['Int']>;
    phaseDetailStatus?: Maybe<Scalars['String']>;
    appointmentStatus?: Maybe<Scalars['String']>;
    pastStatus?: Maybe<Scalars['String']>;
    newStatus?: Maybe<Scalars['String']>;
    createdAt: Scalars['AWSTimestamp'];
    updatedAt: Scalars['AWSTimestamp'];
    deletedAt?: Maybe<Scalars['Int']>;
};
export declare enum EVENT_STATUS {
    CONTACT = "CONTACT",
    REACTION = "REACTION",
    DEAD = "DEAD"
}
export declare enum ErrorCode {
    chillnnSFAError_401_notSignIn = "chillnnSFAError_401_notSignIn",
    chillnnSFAError_404_resourceNotFound = "chillnnSFAError_404_resourceNotFound",
    chillnnSFAError_500_systemError = "chillnnSFAError_500_systemError"
}
export declare type EventMast = {
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
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare type EventMastInput = {
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
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare type FetchClientsByPhaseInput = {
    phaseNumber: Scalars['Int'];
    phaseDetail: Scalars['String'];
    phaseStatus: Scalars['String'];
};
export declare enum PHASE_STATUS {
    TITLE = "TITLE",
    DATA = "DATA",
    DEAD = "DEAD"
}
export declare type PhaseMast = {
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
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare type PhaseMastInput = {
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
