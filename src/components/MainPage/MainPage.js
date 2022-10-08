import './mainPage.css'
import './responsive.css'
import avatar from '../../images/avatar.png'
import vcard from '../../vcards/bundarchuk.vcf'
import menu_icon from '../../images/menu.svg'
import phone_icon from '../../images/phone.svg'
import download_icon from '../../images/download.svg'
import mail_icon from '../../images/mail.svg'
import web_icon from '../../images/web.svg'
import bg from '../../images/background_new.png'
import logo from '../../images/logo.svg'
import logoEn from '../../images/logoEn.svg'
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";


const MainPage = () => {
    const [currenLanguage, setCurrentLanguage] = useState('ru');

    const language = {
        ru:{
            name: "Бондарчук",
            secondName: "Алексей Владимирович",
            description: (
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 1.75,
                        duration: 0.5
                    }}
                >
                    Партнёр<br/>
                    Генеральный директор<br/>
                    СтройМонолитСервис
                </motion.p>
            ),
            call: "Позвонить",
            download: "Добавить в контакты",
            mail: "Написать на почту",
            web: "СтройМонолитСервис",
            logo: logo,
            close: 'Закрыть',
            about: 'Компания',
            services: 'Услуги',
            portfolio: "Объекты",
            cases: "Клиентский опыт",
            news: "Новости",
            address: (
                <p>
                    Пресненская набережная, 10,<br/>
                    Блок С, 43-й этаж
                </p>
            )
        },
        en:{
            name: "bondarchuk",
            secondName: "aleksey vladimirovich",
            description: (
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 1.75,
                        duration: 0.5
                    }}
                >
                    Partner<br/>
                    CEO StroyMonolitServis
                </motion.p>
            ),
            call: "Call",
            download: "Save to contacts",
            mail: "Write to e-mail",
            web: "StroyMonolitServis",
            logo: logoEn,
            close: 'Close',
            about: 'About',
            services: 'Services',
            portfolio: "Portfolio",
            cases: "Cases",
            news: "News",
            address: (
                <p>
                    Presnenskaya embankment, 10,
                    Block C, 43rd floor
                </p>
            )
        },
    }

    const links = [
        {
            href: "tel:+79262253555",
            text: language[currenLanguage].call,
            icon: phone_icon
        },
        {
            href: vcard,
            text: language[currenLanguage].download,
            icon: download_icon
        },
        {
            href: "mailto:aleksey.bondarchuk@orientir.ru",
            text: language[currenLanguage].mail,
            icon: mail_icon
        },
        {
            href: "https://o-sms.ru/",
            text: language[currenLanguage].web,
            icon: web_icon
        }
    ]

    const menuLinks = [
        {
            href: `https://orientir.ru/${currenLanguage==="en"?"en/":""}about`,
            text: language[currenLanguage].about
        },
        {
            href: `https://orientir.ru/${currenLanguage==="en"?"en/":""}services`,
            text: language[currenLanguage].services
        },
        {
            href: `https://orientir.ru/${currenLanguage==="en"?"en/":""}objects`,
            text: language[currenLanguage].portfolio
        },
        {
            href: `https://orientir.ru/${currenLanguage==="en"?"en/":""}cases`,
            text: language[currenLanguage].cases
        },
        {
            href: `https://orientir.ru/${currenLanguage==="en"?"en/":""}news`,
            text: language[currenLanguage].news
        },
    ]

    const [isMenu, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setIsMenuOpen(prevState => !prevState)
    }

    return (
        <motion.div
            style={{
                backgroundImage: `url(${bg})`
            }}
            className={'container'}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0
            }}
            transition={{
                duration: .5
            }}
        >
            <div className={'bg'} style={{backgroundImage: `url("${bg}")`}}/>
            <div className={'card'}>
                <AnimatePresence>
                    {!!isMenu && (
                        <motion.div
                            className={'menu'}
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            exit={{
                                opacity: 0
                            }}
                            transition={{
                                duration: .5,
                                delay: isMenu ? 0:.5
                            }}
                        >
                            <span onClick={handleMenuClick}>
                                {language[currenLanguage].close}
                            </span>
                            <ul>
                                {menuLinks.map((item, index)=>(
                                    <li key={index}><a target={"_blank"} href={item.href}>{item.text}</a></li>
                                ))}
                            </ul>
                            <div>
                                <p><a href="tel:84999401220">+7 499 940 12 20</a></p>
                                <p><a href="mailto:info@orientir.ru">info@orientir.ru</a></p>
                                <br/>
                                <p><a target={"_blank"} href="https://goo.gl/maps/HVAG3DTjWEAdFD7WA">
                                    Пресненская набережная, 10,<br/>
                                    Блок С, 43-й этаж
                                </a></p>
                            </div>
                            
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.header
                    initial={{
                        opacity: isMenu ? 1:0,
                        translateY: isMenu ? "0px":"calc(-100% - 50px)",
                    }}
                    animate={{
                        translateY: !isMenu ? "0px":"calc(-100% - 50px)",
                        opacity: !isMenu ? 1:0
                    }}
                    transition={{
                        duration: .5,
                        delay: isMenu ? 0:.25
                    }}
                >
                    <a target={"_blank"} href={`https://orientir.ru/${currenLanguage==="en"?"en/":""}`}>
                        <img src={language[currenLanguage].logo} alt="logo"/>
                    </a>
                    <div className={'btns'}>
                        <span className={'language-btn'}
                              onClick={() => setCurrentLanguage(currenLanguage === "ru" ? "en" : "ru")}>{currenLanguage === "ru" ? "en" : "ru"}</span>
                        <img className={'menu-btn'} onClick={handleMenuClick} src={menu_icon} alt="menu"/>
                    </div>
                </motion.header>

                <div className="card-container">
                    <motion.div
                        initial={{
                            transform: "scale(0)"
                        }}
                        animate={{
                            transform: "scale(1)"
                        }}
                        transition={{
                            delay: 0.8,
                            duration: .5
                        }}
                        className={'avatar'}
                        style={{backgroundImage: `url("${avatar}")`}}
                    />
                    <motion.h1
                        initial={{
                            opacity: 0,
                            translateY: "calc(-100% - 50px)",
                        }}
                        animate={{
                            translateY: "0px",
                            opacity: 1
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.5
                        }}
                    >
                        {language[currenLanguage].name}
                    </motion.h1>

                    <motion.h2
                        initial={{
                            opacity: 0,
                            translateY: "calc(-100% - 50px)",
                        }}
                        animate={{
                            translateY: "0px",
                            opacity: 1
                        }}
                        transition={{
                            delay: 1.25,
                            duration: 0.5
                        }}
                    >
                        {language[currenLanguage].secondName}
                    </motion.h2>

                    {language[currenLanguage].description}
                    <div className={'buttons'}>
                        {links.map((link, index) => (
                            <motion.a
                                key={index}
                                target={"_blank"}
                                href={link.href}
                                className={'btn'}
                                initial={{
                                    transform: "scale(0)"
                                }}
                                animate={{
                                    transform: "scale(1)"
                                }}
                                transition={{
                                    delay: 1.8+((index+1)*0.15),
                                    duration: .5
                                }}
                            >
                                <img src={link.icon} alt={link.text}/>
                                {link.text}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


export default MainPage