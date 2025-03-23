export interface TailwindPluginAPI {
    addVariant: (variant: string, value: string | string[]) => void;
    theme: <T>(path: string) => T;
}

export type TailwindScreens = Record<string, string> | undefined;

export type TailwindPlugin = (api: TailwindPluginAPI) => void;