import "./info.css"

const Info = ({ name, biography }) => {
    
    return(
        <div className="container-info" >
            <div className="card-info">
                <h1 className="name">{name}</h1>
                <span className="biography"> {biography}</span>
            </div>
        </div>
    );
}

export default Info;