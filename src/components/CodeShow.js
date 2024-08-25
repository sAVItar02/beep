const CodeShow = ({code}) => {
    return (
        <div className="max-w-[min(90%,500px)]">
            <code>
                {JSON.stringify(code, null, 4)}
            </code>
        </div>
    )
}

export default CodeShow;