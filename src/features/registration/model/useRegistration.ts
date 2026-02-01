import { useCallback, useState } from "react"
import registrationApi from "@/shared/api/registrationApi";
import type { AddTelDataTypes, AddUserDataTypes, Status, User } from './registration.types';
import { v4 } from "uuid";

const USER_KEY = 'user'
const minCode = 1000;
const maxCode = 9999

const createNewUser = (): User => ({
    id: v4(),
    tel: {
        tel: '',
        telIndex: '',
        status: 'unconfirm'
    },
    email: '',
    password: '',
    })

export const useRegistration = () => {
    
    const [newUser, setNewUser] = useState<User>(() => {
        const user: User = registrationApi.getItem(USER_KEY);
        
        return user ?? createNewUser()
    })
    
    const [privacyOpen, setPrivacyOpen] = useState(true);
    const [newCode, setNewCode] = useState<number | null>(null)
    
    const userTel = newUser.tel
    const userTelConfirm = newUser.tel.status;

    const generataCode = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const resendCode = () => {
        setNewCode(generataCode(minCode, maxCode))
    }

    const toggleUserInfo = (updateUser: User) => {
        registrationApi.add(updateUser, USER_KEY);
    }

    const addTel: AddTelDataTypes = useCallback((data, callBackTelValue) => {
        
        setNewUser(prevUser => {
            const updateUser:User = {
                ...prevUser,
                tel: data
            } 

            toggleUserInfo(updateUser);
            return updateUser
        }
        )
        callBackTelValue()
        setNewCode(generataCode(minCode, maxCode))
    }, [])

    const TelToggleConfirm = useCallback((getStatus: Status) => {
        
        setNewUser(prevUser => {    
            const updateUser: User = {
                ...prevUser,
                tel: {
                    ...prevUser.tel,
                    status: getStatus,
                }
            }

            toggleUserInfo(updateUser);
            return updateUser;
        }
        )
    }, [])

    const addUserData: AddUserDataTypes = useCallback((email, password, callBackDataValues) => {
        
        setNewUser(prevUser => {
            const updateUser = {
                ...prevUser,
                email,
                password,
            }
            toggleUserInfo(updateUser);
            return updateUser
        }
        )
        callBackDataValues()
    }, [])

    return {
        addTel,
        privacyOpen, 
        setPrivacyOpen,
        newCode,
        resendCode,
        addUserData,
        userTel,
        TelToggleConfirm,
        userTelConfirm
    }
}