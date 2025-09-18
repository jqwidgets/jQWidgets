import * as React from 'react'
import { useRef, useCallback, useEffect, useMemo } from 'react'
import './App.css'
import JqxToolbar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtoolbar'

const countries = ['Japan', 'UK', 'USA']
const JapaneseCities = ['Kobe', 'Kyoto', 'Tokyo']
const UKCities = ['Brighton', 'Glasgow', 'London']
const USACities = ['Boston', 'Los Angeles', 'Minneapolis']

const App = () => {
    const myComboBox1 = useRef<any>(null)
    const myComboBox1Min = useRef<any>(null)
    const myComboBox2 = useRef<any>(null)
    const myComboBox2Min = useRef<any>(null)

    const selectionHandler = useCallback((event: any) => {
        if (event.args) {
            const country = event.args.item.label
            let source
            if (country === 'Japan') {
                source = JapaneseCities
            } else if (country === 'UK') {
                source = UKCities
            } else {
                source = USACities
            }
            myComboBox2.current?.jqxComboBox({ source })
            myComboBox2Min.current?.jqxComboBox({ source })
        }
    }, [])

    const initTools = useCallback((type: any, index: number, tool: any, menuToolIninitialization: boolean) => {
        switch (index) {
            case 0:
                tool.jqxComboBox({
                    promptText: 'Select a country...',
                    selectedIndex: 0,
                    source: countries,
                    width: 150
                })
                if (menuToolIninitialization === false) {
                    myComboBox1.current = tool
                } else {
                    myComboBox1Min.current = tool
                }
                break
            case 1:
                tool.jqxComboBox({
                    promptText: 'Select a city...',
                    selectedIndex: 0,
                    source: JapaneseCities,
                    width: 150
                })
                if (menuToolIninitialization === false) {
                    myComboBox2.current = tool
                } else {
                    myComboBox2Min.current = tool
                }
                break
        }
    }, [])

    useEffect(() => {
        if (myComboBox1.current) {
            myComboBox1.current.add(myComboBox1.current).on('select', selectionHandler)
        }
        if (myComboBox1Min.current) {
            myComboBox1Min.current.add(myComboBox1Min.current).on('select', selectionHandler)
        }
    }, [selectionHandler])

    const tools = useMemo(() => 'combobox | combobox', [])

    return (
        <JqxToolbar
            width={370}
            height={35}
            tools={tools}
            initTools={initTools}
        />
    )
}

export default App