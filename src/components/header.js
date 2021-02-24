import MainNav from "./mainnav.js"

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h1>Dickey's Grille</h1>
                    </div>
                    <div className="col-sm-6">
                        <MainNav></MainNav>
                    </div>
                </div>
            </div>
            <hr></hr>
        </header>
    )
}