import MainNav from "./mainnav.js"

export default function Footer() {
    return (
        <>
            <footer>
            <hr></hr>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <small>&copy; 2021</small>
                    </div>
                    <div className="col-sm-8">
                        <MainNav></MainNav>
                    </div>
                    <div className="col-sm-2">
                        [social icons]
                    </div>
                </div>
            </div>
            </footer>
        </>
    )
}