import apiClient from "./api-client";

class HttpService{
    endpoint : string;

    constructor(endpoint : string){
        this.endpoint = endpoint;
    }

    getCategory<T>(){
        const controller = new AbortController();
        const request = apiClient.get<T>(this.endpoint,{
            signal: controller.signal,
        });
        return { request,cancel: () => controller.abort() };
    }

    getCategoryQuestionCount<T>(id : number){
                const controller = new AbortController();

        const request = apiClient.get<T>(this.endpoint + id,{
            signal: controller.signal,
        });
        return { request, cancel: () => controller.abort() };
    }

    getQuestions<T>(count : number,category : number,difficulty : string){
                const controller = new AbortController();

        const TYPE = "multiple";
        let string;
        if(difficulty === "any")
            string = `amount=${count}&category=${category}&type=${TYPE}`
        else
            string = `amount=${count}&category=${category}&difficulty=${difficulty}&type=${TYPE}`


        const request = apiClient.get<T>(this.endpoint + string,{
            signal: controller.signal,
        })
        return { request, cancel: () => controller.abort() }
    }
}

function create(endpoint : string){
    return new HttpService(endpoint);
}

export default create;