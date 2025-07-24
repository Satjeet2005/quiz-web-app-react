import apiClient from "./api-client";

class HttpService{
    endpoint : string;

    constructor(endpoint : string){
        this.endpoint = endpoint;
    }

    getCategory<T>(){
        const request = apiClient.get<T>(this.endpoint);
        return { request };
    }

    getCategoryQuestionCount<T>(id : number){
        const request = apiClient.get<T>(this.endpoint + id);
        return { request };
    }
}

function create(endpoint : string){
    return new HttpService(endpoint);
}

export default create;