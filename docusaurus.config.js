// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Spark Asset API Docs',
    tagline: 'We are making stuff',
    url: 'https://thankful-sea-0ddc91f03.2.azurestaticapps.net',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'VolueSpark', // Usually your GitHub org/user name.
    projectName: 'spark-asset-api-docs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    breadcrumbs: false,
                    editUrl:
                        'https://github.com/VolueSpark/spark-asset-api-docs/tree/main',
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'light',
                // disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            navbar: {
                title: 'Spark Asset API',
                // logo: {
                //   alt: 'My Site Logo',
                //   src: 'img/logo.svg',
                // },
                items: [
                    {
                        type: 'doc',
                        docId: 'GettingStarted',
                        position: 'left',
                        label: 'Documentation',
                        className: 'navbar__item',
                    },
                    {
                        to: '/specification',
                        label: 'API Specification',
                        position: 'left',
                        className: 'navbar__item',
                    },
                    {
                        type: 'doc',
                        docId: 'usecase/SmartCharging',
                        position: 'left',
                        label: 'Use Case',
                        className: 'navbar__item',
                    },
                    // { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://api.sandbox.voluespark.com/swagger/index.html',
                        label: 'Swagger',
                        position: 'right',
                        className: 'navbar__item',
                    },
                    {
                        href: 'https://storybook.sandbox.voluespark.com',
                        label: 'Storybook',
                        position: 'right',
                        className: 'navbar__item',
                    },
                ],
            },
            footer: {
                style: 'dark',
                logo: {
                    src: '/logo/spark.svg',
                },
                links: [
                    {
                        title: 'Spark',
                        items: [
                            {
                                label: 'Ladeassistenten',
                                to: 'https://www.ladeassistent.no/nb',
                            },
                            {
                                label: 'Swagger',
                                to: 'https://api.sandbox.voluespark.com/swagger/index.html',
                            },
                            {
                                label: 'Storybook',
                                to: 'https://storybook.sandbox.voluespark.com',
                            },
                        ],
                    },
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Getting Started',
                                to: '/docs/GettingStarted',
                            },
                            {
                                label: 'Documentation',
                                to: '/docs/documentation/Authentication',
                            },
                        ],
                    },
                    // {
                    //   title: "Other sites",
                    //   items: [
                    //     {
                    //       label: "Github",
                    //       href: "https://<github-link>",
                    //     },
                    //   ],
                    // },
                ],
                // copyright: `Copyright © ${new Date().getFullYear()} Spark`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
}

module.exports = config
