const DummyComponent1 = ({margin, padding}) => {

    return (
        <div className="bg-orange-200 rounded-md">
            <div>
                <div style={{...padding, ...margin}} className="rounded-md bg-blue-200 flex items-center justify-center">Dummy</div>
            </div>
        </div>
    )
}

export default DummyComponent1;