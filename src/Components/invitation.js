import React from 'react'
import Background from './background.png'
import Logo from './logo.png'
export default function invitation() {
    
    
        
  return (
    
      <div className='bg'>
        {/* <img src={Background} alt="" className='bg'/> */}
        <div className="container">
            <div className='wrapper'>
                <ul className='ul'>
                    <li>
                        <p className='first_text'>Дорогие</p>
                        <p className='person_text'>Коллеги</p>
                        <p className='invitation_text'>Приглашаем вас на корпоратив, посвященный празднованию нового года, который состоится</p>
                        <p className='date_text'>30 декабря</p>
                    </li>
                    <li className='list_element'>
                        <img src={Logo} className="logo" />
                    </li>
                    <li>
                        <input type="text" className='form' placeholder="Введите ваше ФИО" />
                    </li>
                    <li>
                        <input type="number" className='form' placeholder="Введите ваш номер" />
                    </li>
                    <li>
                        <button className='button'>Я буду!</button>
                    </li>
                </ul>
            
            </div>
        </div>
    </div>
  )
}
