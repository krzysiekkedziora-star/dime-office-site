import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'pl', 'uk'] as const;
export const defaultLocale = 'pl' as const;

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
