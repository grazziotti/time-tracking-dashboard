import React, { useEffect, useState } from 'react';
import { timeframeType } from '../../types/timeframeType';

import './styles.scss'

type Props = {
    activeTimeframe: timeframeType;
    onTimeframeChange: (activeTimeframe: timeframeType) => void;
}

export const ProfileCard = ({ activeTimeframe, onTimeframeChange }: Props) => {
    const handleClickedLink = (e: React.MouseEvent) => {
        const selectedOption = e.currentTarget.getAttribute('data-option') as timeframeType
        onTimeframeChange(selectedOption)
    }

    const checkActiveTimeframe = (s: string) => activeTimeframe === s ? 'active' : ''

    const [animate, setAnimate] = useState('')

    const animation = () => {
        setTimeout(() => {
            setAnimate('animate')
        }, 1)
    }

    useEffect(() => {
        animation()
    }, [])
    
    return (
        <div className={`profile ${animate}`} data-anime="left">
            <div className="profile__intro"> 
                <div className="profile__intro__avatar">
                    <img src="./images/image-jeremy.png" alt="avatar" />
                </div>
                <div className="profile__intro__text">
                    <span className="profile__intro__span">Report for</span>
                    <h1 className="profile__intro__name">Jeremy Robson</h1>
                </div>
            </div>
            <nav className="profile__nav">
                <ul className="profile__nav__list">
                    <li className="profile__nav__item">
                        <a 
                            href="#" 
                            className={`profile__nav__link ${checkActiveTimeframe('daily')}`}
                            data-option="daily"
                            onClick={handleClickedLink}
                        >Daily</a>
                    </li>
                    <li className="profile__nav__item">
                        <a 
                            href="#" 
                            className={`profile__nav__link ${checkActiveTimeframe('weekly')}`}
                            data-option="weekly"
                            onClick={handleClickedLink}
                        >Weekly</a>
                    </li>
                    <li className="profile__nav__item">
                        <a 
                            href="#" 
                            className={`profile__nav__link ${checkActiveTimeframe('monthly')}`}
                            data-option="monthly"
                            onClick={handleClickedLink}
                        >Monthly</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}