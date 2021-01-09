import './nouv-card.css'

const NouvCard = (props) => {
    return (
        <div className={'nouv-card-container'}>
            <div className={'nouv-card-img-container'}>
                <img src={props.image} className={'nouv-card-img'}/>
            </div>
            <div className={'nouv-card-description-container'}>
                <span className={'nouv-card-description'}>
                    {props.title}
            </span>
            </div>
            <div className={'nouv-card-price-container'}>
                <span className={'nouv-card-price'}>{props.price}$</span>
            </div>
            <div className={'nou-card-actions'}>
                <div className={'nouv-card-btn'}>Details</div>
                <div className={'nouv-card-btn'}>Acheter</div>
            </div>
        </div>
    )
}


export default NouvCard
