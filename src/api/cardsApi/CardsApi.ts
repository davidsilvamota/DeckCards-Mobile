import api from "../defaultApi/DefaultApi";

export function getDeck() {
    return api.get("/new/shuffle/?deck_count=1");
}