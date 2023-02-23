import { defineStore } from "pinia";
import { getList } from "../server";
export const useIndexStore = defineStore({
    id: 'index',
    state: () => {
        return {
            list:{},
        }
    },

    actions:{
        getApiList(){
            getList().then(res => {
                console.log(res)
            })
        }
    }
})