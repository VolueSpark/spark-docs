// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
        [
            'redocusaurus',
            {
                // Plugin Options for loading OpenAPI files
                specs: [
                    {
                        spec: 'openapi/openapi.yaml',
                        route: '/api/',
                    },
                ],
                // Theme Options for modifying how redoc renders them
                theme: {
                    // Change with your site colors
                    primaryColor: '#000',
                },
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'light',
                disableSwitch: true,
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
                        label: 'Guides',
                    },
                    // { to: '/blog', label: 'Blog', position: 'left' },
                    // {
                    //   href: 'https://<swagger-link>',
                    //   label: 'OpenAPI',
                    //   position: 'right',
                    // },
                    // {
                    //   href: 'https://<Storybook link>',
                    //   label: 'Storybook',
                    //   position: 'right',
                    // },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Spark',
                        items: [
                            {
                                label: 'Dashboard',
                                to: 'https://spark-dashboard-volue-spark.vercel.app',
                            },
                        ],
                    },
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Getting Started',
                                to: '/docs/GettingStarted',
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
                // darkTheme: darkCodeTheme,
            },
        }),
}

module.exports = config
