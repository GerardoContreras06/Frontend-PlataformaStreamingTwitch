import { Route, Routes } from 'react-router-dom';
import { Channels } from '../channel/Channels'
import { Settings } from '../settings/Settings';
import { ChannelView } from '../channel/ChannelView';

export const Content = ({ channels }) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path='channels' element={<Channels channels={channels}/>}/>
                <Route path='settings' element={<Settings/>}/>
                <Route path='channel/:id' element={<ChannelView getChannels={getChannels}/>}/>
            </Routes>
        </div>
    )
}