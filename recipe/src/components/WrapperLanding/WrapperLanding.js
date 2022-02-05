
import React from "react";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import CardItem from "../CardItem/CardItem";

const WrapperLanding = () => {

  const resData = useInfiniteScroll()
  const { loading, error, total, results, isFetching } = resData
  return (<CardItem loading={loading} error={error} total={total} results={results} isFetching={isFetching} />);
}

export default WrapperLanding;
