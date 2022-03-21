import './styles.scss'
import profileImage from '../../assets/image-jeremy.png'

export const ProfileCard = () => {
    return (
        <div className="profile">
            <div className="profile__intro"> 
                <div className="profile__intro__avatar">
                    <img src={profileImage} alt="avatar" />
                </div>
                <div className="profile__intro__text">
                    <span className="profile__intro__span">Report for</span>
                    <h1 className="profile__intro__name">Jeremy Robson</h1>
                </div>
            </div>
            <nav className="profile__nav">
                <ul className="profile__nav__list">
                    <li className="profile__nav__item">
                        <a href="#" className="profile__nav__link">Daily</a>
                    </li>
                    <li className="profile__nav__item">
                        <a href="#" className="profile__nav__link active">Weekly</a>
                    </li>
                    <li className="profile__nav__item">
                        <a href="#" className="profile__nav__link">Monthly</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}