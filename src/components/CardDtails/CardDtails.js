import React from "react";
import css from "./CardDtails.module.css"
import { Link } from "react-router-dom";
import ImageCopmonet from "../../utils/Image";
const CardDtails = (props) => {
    const { title, image, id } = props
    return (
        <>
            <Link to={`/recipe/${id}`} className={css.cardWrap}>
                <div className={css.cardItem}>
                    <div className={css.cardInner}>
                        <ImageCopmonet imgSrc={image} altImage={title} styles={css.imageContainer} />
                        <div className={css.generItem}>
                            <h2 className={css.recipeTitle}>{title}</h2>
                            <button className={css.buttonRedirect}>more details</button>
                        </div>

                    </div>
                </div>

            </Link>
        </>
    )
}

export default CardDtails
