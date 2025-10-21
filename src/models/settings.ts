export const ALL_LANGUAGES = ['en', 'ja', 'vi', 'id'] as const;
export type Language = (typeof ALL_LANGUAGES)[number];
