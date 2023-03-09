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
    documentationSidebar: [
        {
            type: 'category',
            label: 'Getting Started',
            items: [{ type: 'doc', id: 'GettingStarted' }],
        },
        {
            type: 'category',
            label: 'Documentation',
            items: [
                { type: 'doc', id: 'documentation/Authentication' },
                { type: 'doc', id: 'documentation/SpotPrices' },
                { type: 'doc', id: 'documentation/Forecast' },
            ],
        },
        {
            type: 'category',
            label: 'API',
            items: [{ type: 'doc', id: 'api/Requests' }],
        },
    ],
    usecaseSidebar: [
        {
            type: 'category',
            label: 'Use Case',
            items: [{ type: 'doc', id: 'usecase/First' }],
        },
    ],
}

module.exports = sidebars
