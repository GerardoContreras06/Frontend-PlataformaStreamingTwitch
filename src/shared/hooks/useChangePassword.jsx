import toast from "react-hot-toast";
import { changePassword as changePasswordRequest } from "../../services";

export const useChangePassword = () => {

    const changePassword = async (password, newPassword) => {
        const responseData = await changePasswordRequest({ password, newPassword });
        if (responseData.error) {
            return toast.error(
                responseData.e?.response?.data || 'No fue posible actualizar el password'
            );
        }
        toast.success('Password actualizada correctamente')
    }

    return {
        changePassword
    }
}