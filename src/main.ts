import plugin from 'tailwindcss/plugin';
import type { TailwindPlugin, TailwindScreens } from './types.ts';

export const MaxVariantsPlugin = plugin(({ addVariant, theme }) => {
    const screens = theme("screens") as TailwindScreens;
    if (!screens) {
        throw new Error("Tailwind screens are not defined. Please ensure your Tailwind config includes a 'screens' definition.")
    };
    Object.entries(screens).forEach(([key, value]: [string, string]) => {
        addVariant(`max-${key}`, `@media not all and (min-width: ${value})`);
    });
}) as unknown as TailwindPlugin;