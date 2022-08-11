export interface ChartPropTypes {
    barColor?: string
    animationDuration?: number
    barColorFunc?: string
    animationDelay?: number
    animationDelayFunc?: string

    dotColor?: string
    dotColorFunc?: string
    axesColor?: string
    axesColorFunc?: string
    axesLabelColor?: string
    axesLabelColorFunc?: string
    setTitle?: string
    setTitleFunc?: string

    lineColor?: string
    lineColorFunc?: string

    data: ({x: string, y: number}[] | {ages: number, count: number}[] | {x: number, y: number}[])
}

export interface DonutBundleProps {
    data: {ages: number, count: number}[]
    setTitle: string
    setTitleFund: string
    colorRange: string[]
}
