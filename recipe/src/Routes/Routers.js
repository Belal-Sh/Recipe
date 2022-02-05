import React, { Suspense, lazy } from 'react';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import Loader from '../components/Loader/Loader';



const WrapperLanding = lazy(() => import('../components/WrapperLanding/WrapperLanding'));
const ShowPage = lazy(() => import('../components/ShowPage/ShowPage'));
const SearchResults = lazy(() => import('../components/SearchResults/SearchResults'));

export const RoutersRecipe = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<WrapperLanding />} />
                    <Route path="/search/:item" element={<SearchResults />} />
                    <Route path="/recipe/:id" element={<ShowPage />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                                <Link to="/">Back to Home</Link>
                            </main>
                        }
                    />

                </Routes>
            </Suspense>
        </>

    )
}