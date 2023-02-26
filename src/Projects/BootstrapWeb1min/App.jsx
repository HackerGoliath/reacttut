import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

{/* for left navbar <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> */ }

const App = () => {
    return (
        <>
            <h1 className="text-center text-danger text-capitalize my-5">Website In One Minute Home Page</h1>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;