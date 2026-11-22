function CardComponent(props) {
    return (
        <div className="row g-4">
            <div className="card">
                {props.src ? <img src={props.src} className="card-img-top" alt="Пример изображения"/> : null}
                {props.children}
            </div>
        </div>
    );
}

export default CardComponent;
