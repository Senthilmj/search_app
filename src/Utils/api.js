import axios from 'axios';

export default axios.create({
    baseURL: `https://www.blibli.com`
});


export const API_URLS = {
    'search': '/backend/search/products?searchTerm=<SEARCH_TERM>&start=<OFFSET>&itemPerPage=24',
    'suggestion': '/backend/search/autocomplete?searchTermPrefix=<SEARCH_TERM>'
}