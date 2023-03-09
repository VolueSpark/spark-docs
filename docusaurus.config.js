// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Spark Asset API Docs',
    tagline: 'We are making stuff',
    url: 'https://github.com/VolueSpark/spark-asset-api-docs',
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
                    },
                    // {
                    //     type: 'doc',
                    //     docId: 'usecase/First',
                    //     position: 'left',
                    //     label: 'Use Case',
                    // },
                    {
                        to: '/specification',
                        label: 'API Specification',
                        position: 'left',
                    },
                    // { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: '/',
                        label: 'Swagger',
                        position: 'right',
                    },
                    {
                        href: '/',
                        label: 'Storybook',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Spark',
                        items: [
                            {
                                label: 'Ladeassistenten',
                                to: 'https://www.ladeassistenten.no',
                            },
                            {
                                label: 'Swagger',
                                to: 'https://sandbox-spark-smartcharging.azurewebsites.net/swagger/index.html',
                            },
                            {
                                label: 'Storybook',
                                to: '/',
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
