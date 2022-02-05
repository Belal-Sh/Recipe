import axios from "axios"
import { ITEMS_PAGINATION } from "../utils/utils"

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
