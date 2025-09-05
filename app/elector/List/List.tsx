import styles from '../Elector.module.scss';

function List() {
    return (
        <>
        <h2 className="visually-hidden">Выборщик дом</h2>

        <div className="elector__container container">
            <div className="elector__wrapper elector__wrapper--apartment">
            <aside className="elector__aside">
                <div className="elector__controls">
                <a className="elector__control" href="elector-house.html">
                    <span>Схема</span>
                </a>
                <a className="elector__control is-active" href="elector-list.html">
                    <span>Список</span>
                </a>
                </div>
            </aside>

            <div className="elector__filter" data-elector="filter">
                {/* <!-- filter component --> */}
            </div>
            </div>

    <div className="elector__list apartments-list" data-elector="list"></div>

    {/* <template id="card-template">
      <div className="card">
        <div className="card__img" data-card="img"></div>
        <a className="card__link" href="#" data-card="link"></a>
        <div className="card__content">
          <button
            className="card__favorites"
            type="button"
            data-favorite-button
            aria-label="Избранное"
          >
            <svg className="icon icon-like">…</svg> 
            <svg className="icon icon-like-fill">…</svg> 
          </button>
          <p className="card__description" data-card="description"></p>
        </div>
      </div>
    </template> */}

    <div className="paragraph elector__empty" data-elector-list-empty>
      <div className="paragraph__header">
        <span className="paragraph__title">
          К сожалению, по выбранным параметрам ничего не найдено.
        </span>
      </div>
      <p className="paragraph__text">
        Попробуйте скорректировать критерии.
      </p>
    </div>
        </div>
        </>

    )
}

export default List;