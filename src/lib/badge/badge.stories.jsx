import { Badge } from "./badge";
export default {
    title: "Компоненты/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
        status: {
            type: "stable", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        },
    },
    tags: ["autodocs"],
};


export const SizeBase = {
    args: {
        text: "Some text",
        size: "base",
        appearance: "pink"
    }
}