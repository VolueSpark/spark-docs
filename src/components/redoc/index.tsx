import React from 'react'
import { RedocStandalone } from 'redoc'
// import { useColorMode } from '@docusaurus/theme-common'
import Colors from '../../css/colors'

export default function Redoc() {
    // const { colorMode } = useColorMode()
    // const isDarkTheme = colorMode === 'dark'
    return (
        <div style={{ backgroundColor: Colors.bg.bgLight }}>
            <RedocStandalone
                specUrl="https://api.sandbox.voluespark.com/swagger/v1/swagger.json"
                options={{
                    nativeScrollbars: true,
                    theme: {
                        // colors: {
                        //     primary: {
                        //         main: isDarkTheme
                        //             ? Colors.primary.primaryDark
                        //             : Colors.primary.primaryLight,
                        //     },
                        //     text: {
                        //         primary: isDarkTheme
                        //             ? Colors.text.textLight
                        //             : Colors.text.textDark,
                        //         secondary: isDarkTheme
                        //             ? Colors.text.textLight
                        //             : Colors.text.textDark,
                        //     },
                        // },
                        typography: {
                            fontFamily: '"Nunito-Sans", sans-serif',
                            headings: {
                                fontFamily: '"Krub", sans-serif',
                            },
                            code: {
                                fontFamily:
                                    '"Source Code Pro", "Courier", monospace',
                            },
                        },
                    },
                }}
            />
        </div>
    )
}
