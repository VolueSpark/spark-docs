/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    sideBar: [
        {
            type: 'category',
            label: 'Getting Started',
            items: [{ type: 'doc', id: 'GettingStarted' }],
        },
        {
            type: 'category',
            label: 'Guides',
            items: [
                { type: 'doc', id: 'guides/Authorization' },
                { type: 'doc', id: 'guides/Forecast' },
                { type: 'doc', id: 'guides/Advice' },
                { type: 'doc', id: 'guides/SpotPrices' },
            ],
        },
        {
            type: 'category',
            label: 'API',
            items: [{ type: 'doc', id: 'api/Requests' }],
        },
    ],
}

module.exports = sidebars
