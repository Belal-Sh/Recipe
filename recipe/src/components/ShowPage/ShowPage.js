

import React, { useEffect, useState } from "react";
import { getFullInfoRecipe } from "../../api/services";
import { useParams } from "react-router-dom";
import css from "./showPage.module.css"
import ImageCopmonet from "../../utils/Image";
import Loader from "../Loader/Loader";
import ErrorComponent from "../../utils/ErrorComponent";
import Summary from "./Summary";
const ShowPage = () => {

    const [fullRecipeInFo, setFullRecipeInFo] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    let params = useParams();
    useEffect(() => {

        getFullInfoRecipe(params?.id)
            .then((res) => {
                setLoading(false)
                setFullRecipeInFo(res)
            }).catch((e) => {
                setLoading(false)
                setError(error)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params?.id])


    if (loading) return <Loader />
    if (error) return <ErrorComponent />
    return (
        <>
            <div className={css.showContainer}>
                <h1 className={css.mgBtm}> {fullRecipeInFo?.title} </h1>
                <ImageCopmonet imgSrc={fullRecipeInFo.image} altImage={fullRecipeInFo?.title} styles={`${css.mgBtm} ${css.imageContainer}`} />
                <Summary style={css} title={"Instructions:"} summary={fullRecipeInFo?.instructions} />
                <Summary style={css} title={"Summary:"} summary={fullRecipeInFo?.summary} />
            </div>

        </>

    )

}

export default ShowPage