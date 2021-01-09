import './list-nouv-card.css'
import NouvCard from "../nouv-card/nouv-card";
import im1 from '../../assets/images/img/im1.jpg'
import im2 from '../../assets/images/img/im2.jpg'
import im3 from '../../assets/images/img/im3.jpg'
import im4 from '../../assets/images/img/im4.jpg'
import im5 from '../../assets/images/img/im5.jpg'
import im6 from '../../assets/images/img/im6.jpg'
import im7 from '../../assets/images/img/im7.jpg'
import im8 from '../../assets/images/img/im8.jpg'

const cards = [
    {
        price: 900,
        title: 'this is title text 1',
        img: im1
    },
    {
        price: 200,
        title: 'this is title text 2',
        img: im2
    },
    {
        price: 800,
        title: 'this is title text 3',
        img: im3
    },
    {
        price: 500,
        title: 'this is title text 4',
        img: im4
    },
    {
        price: 3231,
        title: 'this is title text 5',
        img: im5
    },
    {
        price: 3231,
        title: 'this is title text 5',
        img: im6
    }, {
        price: 3231,
        title: 'this is title text 5',
        img: im7
    }, {
        price: 3231,
        title: 'this is title text 5',
        img: im8
    },

]
const ListNouvCard = () => {
    return (
        <div className={'list-nouv-card'}>
            {cards.map((card) =>
                <NouvCard
                    title={card.title}
                    price={card.price}
                    image={card.img}
                />
            )}
        </div>
    )
}

export default ListNouvCard;
