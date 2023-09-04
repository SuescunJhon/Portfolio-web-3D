const Info = ({nombre, biografia}) => {
    return(
        <>
            <div className="informacion">
                <h2> {nombre} </h2>
                <p> {biografia} </p>
            </div>
        </>
    );
}

export default Info;