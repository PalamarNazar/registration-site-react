import { Link } from "react-router"

const NotVerificateTel = () => {
    return (
            <div className="grid gap-y-2 justify-center w-full">
                <h2 className="font-bold text-center">You must registration your phone number</h2>
                <Link to={'/registration'} type="button" className="text-center border border-gray-57 rounded-lg py-2 px-4">Registration</Link>
            </div>
    )
}

export default NotVerificateTel;