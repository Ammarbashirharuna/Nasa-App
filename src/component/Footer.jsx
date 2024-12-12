export default function Footer(props) {
    const {showmodal, handleToggleModal, data} = props
    return (
        <footer>
            <div className="bg-gradient"></div>
            <div>
                <h2>APOD project</h2>
                <h1>{data?.title}</h1>
            </div>
            <button onClick={ handleToggleModal }>
            <i className="fa-sharp fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}