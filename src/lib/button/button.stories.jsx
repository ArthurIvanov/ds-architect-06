import { Button } from "./button";


export default {
    title: "Компоненты/Button",
    component: Button,
    layout: "centered",
    parameters: {
        status: {
            // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            type: "stable"
        },
    },
    tags: ['autodocs']
}
export const SizeBase = {
    args: {

        size: "base"
    }
}

export const SizeSmall = {
    args: {

        size: "small"
    }
}



export const Primary = {
    args: {
        appearance: "primary",
        size: "base",
        text: "Hello Primary",
    }
}

export const Secondary = {
    args: {
        appearance: "secondary",
        size: "base",
        text: "Hello Secondary",
    }
}


export const Disabled = {
    args: {
        appearance: "secondary",
        size: "base",
        text: "Hello Disabled",
        disabled: true
    }
}