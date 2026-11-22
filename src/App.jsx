import { useState } from 'react'
import './App.css'
import CardComponent from './CardComponent/CardComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container py-5">  
        <h1 className="mb-5 text-center">Примеры Bootstrap 5 карточек</h1>
        <div className="row g-4">
              <div className="col-md-4">
                <CardComponent src="https://via.placeholder.com/300x200/0d6efd/ffffff?text=Card+Image">
                    <div className="card-body">
                        <h5 className="card-title">Заголовок карточки</h5>
                        <p className="card-text">Это пример текста карточки. Здесь можно разместить описание или любую другую информацию.</p>
                        <a href="#" className="btn btn-primary">Перейти</a>
                    </div>
                </CardComponent>
                
                <CardComponent >
                    <div className="card-body">
                        <h5 className="card-title">Текстовая карточка</h5>
                        <p className="card-text">Пример карточки без изображения, содержащей только текстовое содержимое.</p>
                        <a href="#" className="btn btn-outline-primary">Подробнее</a>
                    </div>

                </CardComponent>
            </div>

        </div>
      </div>
    </>
  )
}

export default App
