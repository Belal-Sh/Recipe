import React from "react";
import ErrorComponent from "../../utils/ErrorComponent";
import CardDtails from "../CardDtails/CardDtails";
import Loader from "../Loader/Loader";

const CardItem = ({ loading, error, total, params = {}, results = [], isFetching }) => {

    const hasMoreItem = total <= results?.length
    if (loading) return <Loader />
    if (error) return <ErrorComponent />
    if (!results?.length && !loading) return <div>there is no results related to {params?.item}</div>

    return (
        <>
            <div className="wrapper">
                {results?.map(recipe => <CardDtails key={recipe.id} {...recipe} />)}
            </div>
            {isFetching && !hasMoreItem ? <Loader /> : null}

        </>
    )

}

export default CardItem