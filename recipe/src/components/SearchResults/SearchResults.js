
import React from "react";
import { useParams } from "react-router-dom";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import CardItem from "../CardItem/CardItem";

const SearchResults = () => {
    const params = useParams();
    const resData = useInfiniteScroll(params)
    const { loading, error, total, results, isFetching } = resData
    return (<CardItem loading={loading} error={error} total={total} params={params} results={results} isFetching={isFetching} />);
}

export default SearchResults;
