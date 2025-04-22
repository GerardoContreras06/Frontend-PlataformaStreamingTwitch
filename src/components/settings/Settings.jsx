import { useChannelSettings } from "../../shared/hooks";
import { ChannelSettings } from "../channel/ChannelSettings";
import { LoadingSpinner } from "../LoadingSpinner";
import { StreamKey } from "./StreamKey";
import { PasswordSettings } from "./PasswordSettings";

export const Settings = () => {
    
    const { channelSettings, isFetching, saveSettings } = useChannelSettings()

    if(isFetching){
        return <LoadingSpinner/>
    }

    return (
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings settings={channelSettings} saveSettings={saveSettings}/>
            <PasswordSettings/>
            <StreamKey streamKey={channelSettings.streamKey}/>
        </div>
    )
}