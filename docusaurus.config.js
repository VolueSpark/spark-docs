// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Spark API Docs',
    tagline: 'We are making stuff',
    url: 'https://docs.voluespark.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'VolueSpark', // Usually your GitHub org/user name.
    projectName: 'spark-docs', // Usually your repo name.

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
                        'https://github.com/VolueSpark/spark-docs/tree/main',
                    routeBasePath: '/',
                },
                blog: false,
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
                title: 'Spark API',
                // logo: {
                //   alt: 'My Site Logo',
                //   src: 'img/logo.svg',
                // },
                items: [
                    {
                        type: 'doc',
                        docId: 'index',
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
                    {
                        href: 'https://api.voluespark.com/smart/v1/swagger/index.html',
                        label: 'Swagger',
                        position: 'right',
                        className: 'navbar__item',
                    },
                    {
                        href: 'https://storybook.voluespark.com',
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
                                label: 'Ladeassistent',
                                to: 'https://www.ladeassistent.no/en',
                            },
                            {
                                label: 'Swagger',
                                to: 'https://api.voluespark.com/smart/v1/swagger/index.html',
                            },
                            {
                                label: 'Storybook',
                                to: 'https://storybook.voluespark.com',
                            },
                        ],
                    },
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Getting Started',
                                to: '/GettingStarted',
                            },
                            {
                                label: 'Documentation',
                                to: '/documentation/Authentication',
                            },
                        ],
                    },
                    
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
}

module.exports = config
