import React, {useState} from 'react';
import './search.css'
import srh from '../../assets/images/noun_Search_860389.svg'
import logo from '../../assets/images/logo-1502891216.jpg'
import panier from '../../assets/images/panier.svg'
import down from '../../assets/images/left-arrow.svg'

const Search = () => {
    const [degree, setDegree] = useState('rotate(-90deg)');
    const changeRetation = () => {
        if (degree === 'rotate(-90deg)') {
            setDegree('rotate(90deg)')
        }
        if (degree === 'rotate(90deg)') {
            setDegree('rotate(-90deg)')
        }
    }
    const reset = () => {
        setDegree('rotate(-90deg)')
    }

    return (
        <div className={'search-container'}>
            <div className={'search-part1'}>
                <img className={'search-logo'} src={logo}/>
            </div>
            <div className={'search-part2'}>
                <input type={'search'} placeholder={'Rechercher'}
                       className={'search-input'}/>
                <div className={'search-icon-container'}>
                    <img src={srh} className={'search-img'}/>
                </div>
            </div>
            <div className={'search-part3'}>
                <div className={'left-search'}>
                    <img src={panier} className={'img-panel'}/>
                    <span>Panier <small>(vide)</small></span>
                </div>
                <div className={'right-search'}>
                    <img style={{transform: degree}}
                         onMouseOver={changeRetation}
                         onMouseLeave={reset}
                         src={down}
                         className={'search-down'}/>
                </div>
            </div>
        </div>
    )
}
export default Search;
