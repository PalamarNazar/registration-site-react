import Header from '@/widgets/Header';
import { RegistrationProvider } from '@/features/registration/model/RegistrationContext';
import { Outlet } from 'react-router';


const MainLayout = () => {

    return (
        <>
            <Header />
            <RegistrationProvider>
                <main className='flex flex-col items-center pt-12 not-last:pb-12 md:w-114 md:mx-auto md:items-start xl:py-0 xl:-translate-y-9'>
                    <Outlet />
                </main>
            </RegistrationProvider>
        </>
    )
}

export default MainLayout;