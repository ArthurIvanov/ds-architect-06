import test from "node:test";
import { Card } from "./card";


export default {
    title: "Компоненты/Card",
    component: Card,
    layout: "centered",
    parameters: {
        status: {
            // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            type: "stable"
        },
    },
    tags: ['autodocs']
}

export const TextSizeBase = {
    args: {
        textSize: "base",
        text: "Подразделение ветроэнергетического дивизиона Росатома и Кьези подписали соглашение на приобретение зеленых сертификатов I - REC"
    }
}

export const TextSizeLarge = {
    args: {
        textSize: "large",
        text: "Подразделение ветроэнергетического дивизиона Росатома и Кьези подписали соглашение на приобретение зеленых сертификатов I - REC"
    }
}

export const Appearance = {
    args: {
        apperance: "blue",
        text: "Подразделение ветроэнергетического дивизиона Росатома и Кьези подписали соглашение на приобретение зеленых сертификатов I - REC"
    }
}