import Header from "../components/header.js"
import Footer from "../components/footer.js"
import MenuItemPreview from "../components/menuItemPreview.js"

export default function Home() {

    const appetizers = [
        {
            "name": "Tamales",
            "image": "https://www.doeseatplace.com/images/menu1.jpg",
            "description": "This is where it all began. We make our all beef tamales from Doe's original recipe. Made the same way since 1941, they are a true taste of the Mississippi Delta. 1/2 dozen or dozen."
        },
        {
            "name": "Cesar Salad",
            "image": "https://www.doeseatplace.com/images/menu1.jpg",
            "description": "Salad description"
        }
    ];

    const dishes = [
        {
            "name": "Filet Mingon",
            "image": "https://www.doeseatplace.com/images/menu6.jpg",
            "description": "The most tender steak. Grilled to order."
        }
    ];

    const desserts = [
        {
            "name": "Cheese Cake",
            "image": "https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_CaramelAppleCheesecake.jpg",
            "description": `<p>
            Our Creamy Original Cheesecake Loaded with:
            </p><ul>
            <li>Caramel Apples</li>
            <li>Topped with More Caramel</li>
            <li>Graham Crust.</li>
            </ul>`
        }
    ];

    return (
        <>
        <Header></Header>
        
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Welcome to the Restaurant!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna est, scelerisque eget convallis in, blandit feugiat tortor. Cras sit amet turpis pretium, posuere orci varius, cursus purus. Sed bibendum turpis purus, quis accumsan urna dignissim eget. Nunc feugiat, sapien sed aliquet consectetur, dolor eros bibendum tellus, non pharetra massa odio sit amet tellus. Sed quis pellentesque nibh. Morbi id varius felis.
                    </p>
                </div>
                <div className="col-sm-12">

                    <h2>Appetizers</h2>
                    {appetizers.map((item) => {
                        return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>
                    })}

                    <h2>Main Dishes</h2>
                    {dishes.map((item) => {
                        return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>
                    })}

                    <h2>Desserts</h2>
                    {desserts.map((item) => {
                        return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>
                    })}
                </div>
            </div>
        </div>


        <Footer></Footer>
        </>
    )
}