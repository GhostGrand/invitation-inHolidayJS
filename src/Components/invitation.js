import React, { useState } from "react";
import Background from './background.png'
import Logo from './logo.png'

let url = 'http://45.15.159.0/api/guest';
let idInvitation = 1;

export default function Invitation() {
    
    const [formValue, setFormValue] = useState({ name: "", phoneNumber: "", idInvitation: idInvitation })

    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        console.log(formValue);
        fetch(url, {
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            name : formValue.name == "" ? null : formValue.name,
            phoneNumber: formValue.phoneNumber == "" ? null : formValue.phoneNumber,
            idInvitation: formValue.idInvitation
        })
        })
        .then(response => {
        if(response.status == 400) {
            setIsError(true)
            setError("Данные не прошли валидацию или приглашения с таким ID не существует")
        }
        else if(response.status == 409) {
            setIsError(true)
            setError("Гость с таким номером телефона уже принял данное приглашение")
        }
        else if(response.status == 500) {
            setIsError(true)
            setError("Что-то не так с серваком (500)")
        }
        else {
            setIsError(false)
        }
        })
        .then(response => console.log(JSON.stringify(response)))
    }

    function handleInput(event) {
        const {name, value} = event.target;
        setFormValue({...formValue, [name]:value});
        console.log(event.target.value);
    }
        
    return (
    
      <div className='bg'>
        {/* <img src={Background} alt="" className='bg'/> */}
        <div className="container">
            <div className='wrapper'>
                <form onSubmit={onSubmit}>
                    <ul className='ul'>
                        <li>
                            <p className='first_text'>Дорогие</p>
                            <p className='person_text'>Коллеги</p>
                            <p className='invitation_text'>Приглашаем вас на корпоратив, посвященное празднованию нового года, которое состоится</p>
                            <p className='date_text'>30 декабря</p>
                        </li>
                        <li className='list_element'>
                            <img src={Logo} className="logo" />
                        </li>
                        <li>
                            <input 
                                type="text" 
                                className='form' 
                                placeholder="Введите ваше ФИО" 
                                name="name" 
                                value={formValue.name.value}
                                onChange={handleInput}
                            />
                        </li>
                        <li>
                            <input 
                                type="number" 
                                className='form' 
                                placeholder="Введите ваш номер" 
                                name="phoneNumber"
                                value={formValue.phoneNumber}
                                onChange={handleInput}
                            />
                        </li>

                        <li>
                            <div className="container" style={{display: isError ? 'block' : 'none' }}>
                                <div className="main-wrap">
                                    <div className="error_div">
                                        Ошибка: {error}.
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <button className='button' type="submit">Я буду!</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
  )
}
