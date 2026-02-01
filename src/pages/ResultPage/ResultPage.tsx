import registrationApi from "@/shared/api/registrationApi";
import type { User } from "@/features/registration/model/registration.types";
import NotVerificateTel from "@/shared/ui/NotVerificateTel/NotVerificateTel";
import { useNavigate } from "react-router";

const ResultPage = () => {
  const user: User = registrationApi.getItem("user");
  const navigate = useNavigate();

  const onBack = () => {
    navigate('/', {replace: true})
  }

  return (
    <>
      {user?.email && user?.password ? (
        <>
        <button onClick={onBack}
        className="border rounded-md border-gray-57 fixed top-5 left-5 py-2 px-3">Go to back</button>
        <div className="container mx-auto py-20 grid gap-y-2 justify-center">
          <p>Tel: {`${user.tel.telIndex} ${user.tel.tel}`}</p>
          <p>Tel status: {user.tel.status}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
        </div>
        </>
      ) : (
        <NotVerificateTel />
      )}
    </>
  );
};

export default ResultPage;
