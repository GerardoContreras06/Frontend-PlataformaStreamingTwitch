import toast from "react-hot-toast";
import { followedChannel as followedChannelRequest } from "../../services";

export const useFollowChannel = () =>  {

    const followChannel = async (channelId, onSuccess) => {

        const responseData = await followedChannelRequest(channelId);

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'Ocurrio un error al seguir al canal'
            )
        }

        toast.success('Channel followed succesfully!')
        onSuccess(true)
    }

    return{
        followChannel
    }
}