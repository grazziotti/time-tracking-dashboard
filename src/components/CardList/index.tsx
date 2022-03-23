import { dataType } from '../../types/dataType'
import { timeframeType } from '../../types/timeframeType';
import { CardItem } from '../CardItem'

import './styles.scss'

type Props = {
    data: dataType[];
    activeTimeframe: timeframeType;
}

export const CardList = ({ data, activeTimeframe }: Props) => {
    return (
        <div className="cards">
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