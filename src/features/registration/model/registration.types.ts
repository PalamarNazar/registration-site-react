import type { Dispatch, SetStateAction } from "react";

type CallBackValue = () => void

export type Status = 'confirm' | 'unconfirm' 

export type AddTelDataTypes = (data: TelDataTypes, callBackTelValue: CallBackValue) => void

export type AddUserDataTypes = (email: string, password: string, callBackDataValues: CallBackValue) => void

export type NewCodeType = number | null

export type TelDataTypes = {
    telIndex: string,
    tel: string,
    status: Status,
}

// ================ interfaces ======================

export interface User {
    id: string, 
    tel: TelDataTypes
    email: string,
    password: string,
}

export interface RegisterContext {
    addTel: AddTelDataTypes;
    privacyOpen: boolean;
    setPrivacyOpen: Dispatch<SetStateAction<boolean>>;
    newCode: NewCodeType,
    resendCode: () => void
    addUserData: AddUserDataTypes;
    userTel: User['tel'];
    TelToggleConfirm: (status: Status) => void;
    userTelConfirm: Status;
}
