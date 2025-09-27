import React from "react";
import './DonatePage.css';

function DonatePage() {
    return (
        <div className="donate-container">
            <header className="donate-header">
                <div className="warning-box">
                    <h3>ВАЖНО!!! Прочитайте перед ознакомлением со списком!!!</h3>
                </div>
                <p>Мы рады видеть Вас на нашем сервере и хотим рассказать о том, как Вы можете помочь развитию нашего проекта!</p>
                <p className="highlight-text">Хочется подчеркнуть, что все ваши пожертвования осуществляются исключительно на добровольной основе, и администрация проекта не принуждает никого к материальной поддержке.</p>
                <p>Чтобы поддержать наш проект, Вы можете предложить финансовую помощь на свое усмотрение. Все пожертвования принимаются с благодарностью и используются исключительно в целях развития проекта.</p>
                <p>В свою очередь мы в ответ за Вашу щедрость дарим вам Бонусы, которые вы можете обменять на что-то из списка ниже!</p>
                <p>По вопросам поддержки проекта обращайтесь в личные сообщения в Discord сервер проекта к Создателю с никнеймом Призрак <strong>(na_pol_rublya)</strong></p>
                <a href="https://boosty.to/rockerlolpro" target="_blank" rel="noopener noreferrer" className="boosty-button">
                    Поддержать проект на Boosty
                </a>
            </header>

            <main className="donate-content">
                <section id="storage">
                    <h2>Личное хранилище</h2>
                    <div className="item-showcase">
                        <img src="/path/to/your/storage_box.jpg" alt="Личное хранилище" className="item-image" />
                        <div className="item-details">
                            <h3>Личное хранилище на Скадовске или Янове</h3>
                            <p>Персональное хранилище в разных вариациях:</p>
                            <ul>
                                <li>300 Литров</li>
                                <li>500 Литров</li>
                                <li>1000 Литров</li>
                                <li>+ Возможны атачменты под сет одежды и оружие!</li>
                            </ul>
                            <p className="note">По вопросам расширения пишите Создателю сервера или создайте Тикет!</p>
                        </div>
                    </div>
                </section>
                <section id="housing">
                    <h2>Жилище</h2>
                    <div className="item-showcase reverse">
                         <div className="item-details">
                            <h3>Дом с фурнитурой!</h3>
                            <p className="price">Цена: 3000 Бонусов (Аренда месяц)</p>
                            <p><strong>Расположение:</strong> Дом в районе Деревни или Скадовска.</p>
                            <ul>
                                <li>1 Ящик под оружие</li>
                                <li>1 Ящик на 300 слотов</li>
                                <li>1 Локер</li>
                            </ul>
                        </div>
                        <img src="/path/to/your/house_1.jpg" alt="Дом в деревне" className="item-image" />
                    </div>
                     <div className="item-showcase">
                        <img src="/path/to/your/house_2.jpg" alt="Дом в МБУ" className="item-image" />
                        <div className="item-details">
                            <h3>Дом с фурнитурой!</h3>
                            <p className="price">Цена: 5000 Бонусов (Аренда месяц)</p>
                            <p><strong>Расположение:</strong> Дом в районе МБУ или Янова.</p>
                            <ul>
                                <li>1 Большой Ящик под оружие</li>
                                <li>1 Ящик на 1000 слотов</li>
                                <li>1 Большой Локер</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="vehicles">
                    <h2>Машины</h2>
                    <div className="donate-grid">
                        <div className="donate-card">
                            <img src="/path/to/your/insurgent.jpg" alt="Insurgent SUV" className="card-image" />
                            <div className="card-content">
                                <h3>Insurgent Armored SUV</h3>
                                <p className="price">Цена: 5000 Бонусов</p>
                                <p>6 мест, 4 цвета и 1000 литров кузов!</p>
                            </div>
                        </div>
                        <div className="donate-card">
                            <img src="/path/to/your/btr80.jpg" alt="БТР-80" className="card-image" />
                            <div className="card-content">
                                <h3>БТР-80</h3>
                                <p className="price">Цена: 7000 Бонусов</p>
                                <p>4 места, 4 цвета и 800 литров кузов!</p>
                            </div>
                        </div>
                        <div className="donate-card">
                            <img src="/path/to/your/brdm2.jpg" alt="БРДМ-2" className="card-image" />
                            <div className="card-content">
                                <h3>БРДМ-2</h3>
                                <p className="price">Цена: 7000 Бонусов</p>
                                <p>4 места, 4 цвета и 800 литров кузов!</p>
                            </div>
                        </div>

                        <div className="donate-card">
                            <img src="/path/to/your/niva.jpg" alt="НИВА-2329" className="card-image" />
                            <div className="card-content">
                                <h3>НИВА-2329</h3>
                                <p className="price">Цена: 3000 Бонусов</p>
                                <p>2 места, 2 цвета и 600 литров кузов!</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="furniture">
                    <h2>Фурнитура</h2>
                    <div className="donate-grid">
                        <div className="donate-card">
                            <img src="/path/to/your/weapon_rack_1.jpg" alt="Оружейная стойка" className="card-image" />
                            <div className="card-content">
                                <h3>Оружейная стойка</h3>
                                <p className="price">Цена: 500 Бонусов</p>
                                <p>20 слотов под винтовки, 1 под пистолет + головной убор и рюкзак.</p>
                            </div>
                        </div>
                         <div className="donate-card">
                            <img src="/path/to/your/weapon_rack_2.jpg" alt="Оружейный стенд" className="card-image" />
                            <div className="card-content">
                                <h3>Оружейный стенд</h3>
                                <p className="price">Цена: 300 Бонусов</p>
                                <p>10 слотов под винтовки.</p>
                            </div>
                        </div>
                         <div className="donate-card">
                            <img src="/path/to/your/biggest_safe.jpg" alt="Огромный шкаф" className="card-image" />
                            <div className="card-content">
                                <h3>Огромный шкаф</h3>
                                <p className="price">Цена: 1500 Бонусов</p>
                                <p>20 слотов под винтовки, место для сета одежды, ящики, инструменты, еда и вода.</p>
                            </div>
                        </div>
                        <div className="donate-card">
                            <img src="/path/to/your/old_safe.jpg" alt="Старый шкаф" className="card-image" />
                            <div className="card-content">
                                <h3>Старый шкаф</h3>
                                <p className="price">Цена: 500 Бонусов</p>
                                <p>2 слотов под винтовки, место для сета одежды, место под ящики,100 литров.</p>
                            </div>
                        </div>
                        <div className="donate-card">
                            <img src="/path/to/your/big_safe.jpg" alt="Большой Шкаф" className="card-image" />
                            <div className="card-content">
                                <h3>Большой Шкаф</h3>
                                <p className="price">Цена: 800 Бонусов</p>
                                <p>2 слотов под винтовки, место для сета одежды, место под ящики, 300 литров.</p>
                            </div>
                        </div>
                        <div className="donate-card">
                            <img src="/path/to/your/divan.jpg" alt="Диван" className="card-image" />
                            <div className="card-content">
                                <h3>Диван</h3>
                                <p className="price">Цена: 400 Бонусов</p>
                                <p>3 слота под винтовки, место под еду, 300 литров. Восстанавливает  HP игрока пока тот лежит на нем.</p>
                            </div>
                        </div>
                        <div className="donate-card">
                            <img src="/path/to/your/stoika_bochki.jpg" alt="Стойка для бочек" className="card-image" />
                            <div className="card-content">
                                <h3>Стойка для бочек</h3>
                                <p className="price">Цена: 700 Бонусов</p>
                                <p>В коплекте 4 бочки  на 600 литров.</p>
                            </div>
                        </div>
                        <div className="donate-card">
                            <img src="/path/to/your/uvel_stoika_bochki.jpg" alt="Увеличеная стойка для бочек" className="card-image" />
                            <div className="card-content">
                                <h3>Увеличеная стойка для бочек</h3>
                                <p className="price">Цена: 900 Бонусов</p>
                                <p>В коплекте 4 бочки  на 900 литров.</p>
                            </div>
                        </div>
                        <div className="donate-card">
                            <img src="/path/to/your/case_mini.jpg" alt="Кейс" className="card-image" />
                            <div className="card-content">
                                <h3>Кейс</h3>
                                <p className="price">Цена: 400 Бонусов</p>
                                <p>3 слота под винтовки, 400 литров.</p>
                            </div>
                        </div>
                        <div className="donate-card">
                            <img src="/path/to/your/case_big.jpg" alt="Увеличенный кейс" className="card-image" />
                            <div className="card-content">
                                <h3>Увеличенный кейс</h3>
                                <p className="price">Цена: 1200 Бонусов</p>
                                <p>3 слота под винтовки, 1000 литров.</p>
                            </div>
                        </div>
                        <div className="donate-card">
                            <img src="/path/to/your/bochka.jpg" alt="Бочка" className="card-image" />
                            <div className="card-content">
                                <h3>Бочка</h3>
                                <p className="price">Цена: 400 Бонусов</p>
                                <p>500 литров.</p>
                            </div>
                        </div>
                        <div className="donate-card">
                            <img src="/path/to/your/big_bochka.jpg" alt="Большая бочка" className="card-image" />
                            <div className="card-content">
                                <h3>Большая бочка</h3>
                                <p className="price">Цена: 1000 Бонусов</p>
                                <p>1000 литров.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default DonatePage;