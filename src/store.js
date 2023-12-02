import {reactive} from "vue";

export const store = reactive ({
    BaseApiUrl: "https://api.themoviedb.org/3",
    ApiKey: "096570577eb21eaeac1a4912f0810d8c",
    MovieList: [],
    SeriesList: [],
    searchKey: "",
})