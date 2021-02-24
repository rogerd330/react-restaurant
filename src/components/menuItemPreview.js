export default function MenuItemPreview(props) {
    return (
        <>
        <div className="row menu-item-preview">
			<div className="col-sm-4 col-md-6 col-lg-4">
				<img src={props.image} alt={props.name} />
			</div>
			<div className="col-sm-8 col-md-6 col-lg-8">
                <h3>{props.name}</h3>
				<p dangerouslySetInnerHTML={{ __html: props.description }}></p>
			</div>
		</div>
        </>
    )
}