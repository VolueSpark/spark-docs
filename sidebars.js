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
            type: 'doc',
            label: 'Introduction',
            id: 'index',
        },
        {
            type: 'category',
            label: 'Getting Started',
            collapsible: false,
            items: [
                { type: 'doc', id: 'getting-started/Requirements' },
                { type: 'doc', id: 'getting-started/Authentication' },
            ],
        },
        {
            type: 'category',
            label: 'Smart Charging',
            collapsible: false,
            items: [
                { type: 'doc', id: 'smart/SpotPrices' },
                { type: 'doc', id: 'smart/Forecast' },
            ],
        },
        {
            type: 'category',
            label: 'VTN',
            collapsible: false,
            items: [
                { type: 'doc', id: 'vtn/Introduction' },
                { type: 'doc', id: 'vtn/Events' },
                { type: 'doc', id: 'vtn/Reports' },
                // { type: 'doc', id: 'vtn/Resources' },
                // { type: 'doc', id: 'vtn/Subscriptions' },
            ],
        },
    ],
    usecaseSidebar: [
        { type: 'doc', id: 'usecase/SmartCharging' },
        {
            type: 'doc',
            id: 'usecase/Spotprices',
        },
        {
            type: 'doc',
            id: 'usecase/Forecasting',
        },
    ],
}

module.exports = sidebars
