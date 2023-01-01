import axios from 'axios'
import { useContext } from "react";

export const BASE_API = import.meta.env.VITE_BASE_API;
export const API_KEY = import.meta.env.VITE_API_KEY;
export const IMG_URL = import.meta.env.VITE_IMG_URL;
import { ActorContext } from "../context/ActorContext";

export const API_ROUTES = {
    SINGLE_MOVIE:"/movie",
    POPULAR:"/popular",
    TRENDING: "/top_rated",
    LATEST:"/latest",
    TOP_RATED:"/top_rated",
    CREW:"/credits",
    VIDEO:"/videos",
    ACTOR:"/person",
    ACTOR_MOVIES:"/movie_credits",
    SEARCH:"/search"
}

export function getFetch(url, params = {}) {
    return axios({
        url,
        method: "GET",
        params: {
            ...params,
            language:"en-US",
            api_key: API_KEY
        }
    })
}

export function getSingleMovie(movieId = 1) {
    return getFetch(`${BASE_API}/${API_ROUTES.SINGLE_MOVIE}/${movieId}`);
}

export function getResourceBy(resourceType, resourcePath){
    if(resourcePath === "person") return getActorMovies();
    let requestPath = API_ROUTES.POPULAR;
    switch (resourcePath) {
        case "top rated":
            requestPath = API_ROUTES.TOP_RATED;
            break;
        case "popular":
            requestPath = API_ROUTES.POPULAR;
    }
    return getFetch(`${BASE_API}/${resourceType}/${requestPath}`,{
        adult:true
    });
}

export function getSingleResourceBy(resourceType,id) {
    return getFetch(`${BASE_API}/${resourceType}/${id}`);
}

export function getCast(resourceType, resourceId){
    return getFetch(`${BASE_API}/${resourceType}/${resourceId}/${API_ROUTES.CREW}`)
}

export function getVideosBy(resourceType, id){
    console.log(`${BASE_API}/${resourceType}/${id}${API_ROUTES.VIDEO}`);
    return getFetch(`${BASE_API}/${resourceType}/${id}${API_ROUTES.VIDEO}`);
}

export function getSingleActor(id){
    return getFetch(`${BASE_API}/${API_ROUTES.ACTOR}/${id}`);
}

export function getActorMovies(id){
    console.log(`${BASE_API}/${API_ROUTES.ACTOR}/${id}/${API_ROUTES.ACTOR_MOVIES}`);
    return getFetch(`${BASE_API}${API_ROUTES.ACTOR}/${id}${API_ROUTES.ACTOR_MOVIES}`);
}

export function searchResources(resource, query, page = 1){
    return getFetch(`${BASE_API}${API_ROUTES.SEARCH}/${resource}`,{query, page});
} 