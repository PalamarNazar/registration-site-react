import Section from '@/shared/ui/Section/Section';
import RegistrationContent from './ui/RegistrationContent';
import Stepper from '@/features/registration/ui/Stepper/Stepper';

const RegistrationPage = () => {
    return (
        <>
            <Stepper step='registration' />
            <Section>
                <RegistrationContent />
            </Section>
        </>
    )
}

export default RegistrationPage;