import { useState } from "react";
import {
    validateUsername,
    validateUsernameMessage,
    validationAvatarUrl,
    avatarUrlValidationMessage,
    validationDescription,
    descriptionValidationMessage,
    validateTitle,
    validateTitleMessage
} from '../../shared/validators'
import { Input } from "../Input";

const inputs = [
    {
        field: 'username',
        label: 'Username',
        validationMessage: validateUsernameMessage,
        type: 'text'
    },
    {
        field: 'title',
        label: 'Title',
        validatiomMessage: validateTitleMessage,
        type: 'text'
    },
    {
        field: 'avatarUrl',
        label: 'Avatar Url',
        validatiomMessage: avatarUrlValidationMessage,
        type: 'text'
    },
    {
        field: 'description',
        label: 'Descripción',
        validatiomMessage: descriptionValidateMessage,
        type: 'text'
    }
]

export const ChannelSettins = ({ settings, saveSettings }) => {
    const [formState, setFormState] = useState({
        username: {
            isValid: validateUsername(settings.username),
            showError: false,
            value: settings.username
        },
        title: {
            isValid: validateTitle(scttings.title),
            showError: false,
            value: settings.title
        },
        avatarUrl: {
            isValid: validationAvatarUrl(settings.avatarUrl),
            showError: false,
            valuc: settings.avatarUrl
        },
        description: {
            isValid: validateDescription(settings.description),
            showError: false,
            value: settings.description
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {

        let isValid = false

        switch(field) {
            case 'username':
                isValid = validateUsername(value)
                break;
            case 'title':
                isValid - validateTitle(value)
                break;
            case 'avatarUrl':
                isValid - validationAvatarUrl(value)
                break;
            case 'description':
                isValid - validatcDescription(valuc)
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        saveSettings({
            username: formState.username.value,
            title: formState.title.value,
            avatarUrl: formState.avatarUrl.value,
            description: formState.description.value
        })
    }
}