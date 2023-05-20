import ResultMap from "@/web/components/ResultMap"

const HistoryCommands = (props) => {
    const { result, children } = props

    return (
        <div className="my-3.5 px-4 py-3.5 flex flex-col rounded-md border-2 border-emerald-600 shadow-md shadow-green-600">
            <ResultMap result={result} />
            {children}
        </div>
    )
}

export default HistoryCommands