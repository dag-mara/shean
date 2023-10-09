import { useState, useEffect } from 'react';
import { ModalWindow } from '../ModalWindow';
import Modal from 'react-modal';
import sheep from './img/sheep.png';
import headerImage from './img/title.png';
import emailIcon from './img/email-icon.jpg';
import './style.css';

export const Main = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        document.querySelector('#email').style.backgroundImage = { emailIcon };
    }

    Modal.setAppElement('#app');

    const handleSubmit = (e) => {
        e.preventDefault();
        openModal();
    }

    useEffect(() => {
        setCode(Math.random().toString(36).substring(2, 10).toUpperCase());
    }, []);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        document.querySelector('#email').style.backgroundImage = 'none';
    }

    return (
        <>
            <div className="container">
                <div className="left">
                    <img className="header-image" src={headerImage} alt="Oslavte s námi narozeniny" role="banner" />
                    <p className='content' role="main"><strong>Slavíme 15 let! </strong>Vyzvedněte si od nás dárek, který vám vykouzlí úsměv na tváři. Po zadání e-mailu se vám ozveme a domluvíme se společně, jak váš dárek budete chtít využít.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">
                            Váš dárkový kód je
                            <input type="text" placeholder={code} name="code" id="code" />
                        </label>

                        <label htmlFor="">
                            Vyplňte e-mail
                            <input type="email" id="email" name="email" onChange={onEmailChange} required placeholder='vas@email.cz' />
                        </label>

                        <button type="submit" role="button">ZÍSKAT DÁREK</button>
                        <p className='gdpr-text'>Ochrana osobních údajů je pro nás prioritou.<br />
                            Více informací jak zacházíme s vašimi daty, najdete v <a href="https://www.shean.cz/zpracovani-osobnich-udaju/">tomto dokumentu</a>
                        </p>
                    </form>
                    <div className="sheep-wrapper">
                        <img className="sheep-small" src={sheep} alt="ovce" />
                    </div>
                </div>

                <div className="right">
                    <img className="sheep" src={sheep} alt="ovce" />
                </div>
            </div>

            <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal} email={email} code={code} />
        </>
    )
}