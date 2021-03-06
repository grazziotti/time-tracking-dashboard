import { useEffect, useState } from 'react';
import { dataType } from '../../types/dataType'
import { timeframeType } from '../../types/timeframeType';
import { CardItem } from '../CardItem'

import './styles.scss'

type Props = {
    data: dataType[];
    activeTimeframe: timeframeType;
}

export const CardList = ({ data, activeTimeframe }: Props) => {
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
        <div className={`cards ${animate}`} data-anime="right">
            {data.map((d, index) => (
                <CardItem 
                    key={index}
                    title={d.title}  
                    timeframes={d.timeframes}
                    activeTimeframe={activeTimeframe} 
                />
             ))
            }
        </div>
    )
}