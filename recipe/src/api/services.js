import axios from "axios"
import { ITEMS_PAGINATION } from "../utils/utils"
// const API="https://api.spoonacular.com/recipes/complexSearch"
// b8537ba88c564dc7bdad8d6041eb7194
// 9d541a9134164809ad18d4cbbfd945ec
// e992dd561b72434e94b7bb5a08d7c56e
// e642a4e32c874052a98bfadfbd43b2f1
//c6844c59c25b47629733e022c0dd1e95
// 88de2b04fbb2418b82226c2104d9e6c5
//a5e0857d9f4a4477887ddd88dd120b50

// fa9dd3bb4cc74cafa66a2c5cb837898a

// 6ac5f33351fd491d9b5b8b2d1842cecb
// 063831c094b44c8494731d019d8a5e2e
// ae329cd1610e4123942a13e3899d18c5
// b2dffa6aa9c84b668c140ddd3a446286
// 793ec6cf073941cebd8243e23660cca6
// f9b3666dd17344958bcadd47be82cc9c
// 78187328e57f4968bb46b04579756fcf
// e30d11cd59ee49f4a2047a603157a1f2
// d8d41c1074d24dd1880c90a690c11249

const API = "https://api.spoonacular.com/recipes"






export const getRecipeSerch = async ({ offset = 0, query }) => {
    const response = await axios.get(`${API}/complexSearch`, {
        params: {
            apiKey: process.env.REACT_APP_API_SECRET_KEY,
            query,
            offset,
            number: ITEMS_PAGINATION
        }
    })
    return response.data
}
export const getFullInfoRecipe = async (id) => {
    const response = await axios.get(`${API}/${id}/information`, {
        params: {
            apiKey: process.env.REACT_APP_API_SECRET_KEY,
        }
    })
    return response.data
}