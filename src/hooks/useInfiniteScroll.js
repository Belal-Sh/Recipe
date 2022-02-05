import { useState, useEffect, useRef } from 'react';
import { getRecipeSerch } from '../api/services';
import { debounce, ITEMS_PAGINATION } from '../utils/utils';


const useInfiniteScroll = (params) => {
    const offset = useRef(0)
    const results = useRef([])
    const [total, setTotal] = useState(0)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(false);
    const [isChangeParam, setIsChangeParam] = useState("");

    const handleScroll = () => {
        // to detect scrolling to update resutls and hanlde.
        if (window.innerHeight + Math.round(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop) !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }


    useEffect(() => {
        (!params?.item) && fetchData();
        window.addEventListener('scroll', debounce(handleScroll, 500));
        return () => {
            setTotal(0);
            window.removeEventListener('scroll', debounce(handleScroll, 500))
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        if (!isFetching) return;
        if (total <= results?.current?.length) return
        (!params?.item) && fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFetching]);


    useEffect(() => {
        if (params?.item) {

            if ((params?.item !== isChangeParam)) {
                //when change search value should remove old item and empty the array
                offset.current = 0
                results.current = []
            }

            // when offset value more than total should not make any request
            if (total < offset.current) return

            (!results?.current.length || isFetching) && fetchData(params?.item);
            setIsChangeParam(params?.item)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params?.item, isFetching]);


    const fetchData = (query) => {

        !results?.current?.length && setLoading(true)
        getRecipeSerch({ query, offset: offset.current })
            .then((response) => {
                offset.current += ITEMS_PAGINATION
                setLoading(false)
                results.current = [...results?.current, ...response?.results]
                setTotal(response?.totalResults)
                setIsFetching(false)
            }).catch((err) => {
                setLoading(false)
                setError(err)
            })
    }

    return { results: results.current, total, error, loading, isFetching }
}

export default useInfiniteScroll
