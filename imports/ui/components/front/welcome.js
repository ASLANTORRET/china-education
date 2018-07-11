import React from 'react'

const Welcome = () => {
  return (
    <div className="welcome-message module">
      <div className="row">

          <div className="medium-6 small-12 columns">
              <img src="http://www.alternate.kz/china/team.jpg" alt="Our Team" />
            </div>

            <div className="medium-6 small-12 columns">
              <h2>Добро пожаловать в <span>Tian Cai</span></h2>
                <h3>Алматинская школа китайского языка.</h3>
                <p className="welcomep">Китайские университеты с каждым годом привлекают все
больше абитуриентов из разных стран мира, в том числе и Казахстана. Есть только
одно серьезное препятствие на пути к качественному образованию – незнание
китайского языка.</p>

                <p className="welcomep">Для этого в КНР при вузах создают языковые курсы, на
которых большинство студентов-иностранцев обучаются не менее двух лет, затем их
допускают к сдаче HSK — международного квалификационного экзамена по китайскому
языку. И только после прохождения непростых этапов, молодых казахстанцев
допускают к получению высшего образования в Китае.</p>
                <a href="/ru/about" className="primary bordered-dark button">Далее</a>
            </div>

        </div>
    </div>
  )
}

export default Welcome
