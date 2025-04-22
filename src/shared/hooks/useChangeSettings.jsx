import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getChannelSettings, updateChannelSettings } from "../../services";

export const useChannelSettings = () => {

    const [ channelSettings, setChannelSettings ] = useState();

    const fetchChannelSettings = async () => {
        const response = await getChannelSettings();

        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al obtener la data del canal'
            )
        }

        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
            streamKey: response.data.streamKey
        })
    }

    const saveSettings = async (data) => {
        const response = await updateChannelSettings(data)

        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al actualizar la información del canal'
            )
        }

        toast.success('Información actualizada correctamente')
    }

    useEffect(() => {
        fetchChannelSettings()
    },[])

    return ({
        isFetching: !channelSettings,
        channelSettings,
        saveSettings
    })
}