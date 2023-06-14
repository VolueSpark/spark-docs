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
        [
            'redocusaurus',
            {
                // Plugin Options for loading OpenAPI files
                specs: [
                    {
                        spec: 'https://api.voluespark.com/smart/v1/swagger/v1/swagger.yaml',
                        route: '/specification/',
                    },
                ],
                // Theme Options for modifying how redoc renders them
                theme: {
                    // Change with your site colors
                    primaryColor: '#1890ff',
                },
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            metadata: [
                {
                    name: 'keywords',
                    content:
                        'spark, volue, api, documentation, green transition, electric vehicle, ev, charging, smart charging, smart, charging, solar, charge, energy, price, forecast, grid aware',
                },
            ],
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
                    src: '/logo/spark-volue-logo.svg',
                },
                links: [
                    // {
                    //     title: "Support",
                    //     items: [
                    //         {
                    //             label: "FAQ",
                    //             to: "/"
                    //         },
                    //         {
                    //             label: "Dictionary",
                    //             to: "/"
                    //         },
                    //         {
                    //             label: "[Discord/Slack]",
                    //             to: "/"
                    //         }
                    //     ]
                    // },
                    {
                        title: 'Resources',
                        items: [
                            {
                                html: `
                                <a href="https://www.ladeassistent.no/en" target="_blank">
                                Demo app 
                                <img src="icons/external-link.svg" width="16" height="16" />
                                </a>`,
                            },
                            {
                                html: `
                                <a href="https://github.com/VolueSpark/ladeassistent.no" target="_blank">
                                Github 
                                <img src="icons/external-link.svg" width="16" height="16" />
                                </a>`,
                            },
                        ],
                    },
                    {
                        title: 'Other',
                        items: [
                            {
                                label: 'About Spark',
                                to: 'https://www.volue.com/spark',
                            },
                            {
                                html: `
                                <a href="pdf/spark-terms-and-conditions.pdf" target="_blank">
                                Terms and Conditions
                                <img src="icons/external-link.svg" width="16" height="16" />
                                </a>`,
                            },
                            // {
                            //     label: "Release notes",
                            //     to: "/"
                            // }
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
