export const RegistrationStep = {
    Regestration: "registration",
    Confirm: "confirm",
    SetPassword: "setpassword",
} as const


export type StepperStepsType = typeof RegistrationStep[keyof typeof RegistrationStep];