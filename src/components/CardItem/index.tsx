import { timeframesType } from '../../types/timeframesType'
import { timeframeType } from '../../types/timeframeType';

import './styles.scss'

type Props = {
    title: string;
    timeframes: timeframesType;
    activeTimeframe: timeframeType;
}

export const CardItem = ({ title, timeframes, activeTimeframe }: Props) => {
    title = title.toLowerCase().replace(' ', '-')

    return (
        <div className={`card card--${title}`}>
            <div 
                className="card__bg" 
                style={{backgroundImage: `url(./images/icon-${title}.svg)`}}
            ></div>
            <div className="card__content">
                <div className="card__content__header">
                    <h4 className="card__content__header__title">{title}</h4>
                    <button className="card__content__header__btn">
                       <img src={'./images/icon-ellipsis.svg'} alt="Three points" />
                    </button>
                </div>
                <div className="card__content__detail">
                    <p className="card__content__detail__current">{timeframes[activeTimeframe].current}hrs</p>
                    <p className="card__content__detail__previous">Last week - {timeframes[activeTimeframe].previous}hrs</p>
                </div>
            </div>
        </div>
    )
}