import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/twitch/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {
        const useUserDetails = localStorage.getItem('user')

        if(useUserDetails){
            const token = JSON.parse(useUserDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    (e) => {
        return Promise.reject(e)
    }
)

export const login = async(data) => {
    try {
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const register = async(data) => {
    try {
        return await apiClient.post('/auth/register', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const getChannels = async () => {
    try {
        return await apiClient.get('/channels')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getChannelsSettings = async () => {
    try {
        return await apiClient.get('/settings/channel')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const changePassword = async (data) => {
    try {
        return await apiClient.patch('/settings/password', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const updateChannelSettings = async (data) => {
    try {
        return await apiClient.put('/settings/channel', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const getFollowedChannels = async () => {
    try {
        return await apiClient.get('/channels/followed')
    } catch (error) {
        checkResponseStatus(e)
        return {
            error: true,
            e
        }
    }
}

const checkResponseStatus = (e) => {
    const responseStatus = e?.response.status

    if(responseStatus){
        (responseStatus === 401 || responseStatus === 403) && logout()
    }
}