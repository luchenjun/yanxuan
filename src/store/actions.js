import {reqTopicList,reqFocusList,reqCateList,reqTagList,reqPolicyDescList,reqCategory,reqCategoryList,reqShiWu} from '../api';
import {SETTOPICLIST,SETFOCUSLIST,SETCATELIST,SETTAGLIST,SETPOLICYDESCLIST,SETCATEGORY,SETCATEGORYLIST,SETSHIWU} from './mutations-type';
export default {
    async getFocusList({commit},cb){
        const result = await reqFocusList();
        if(!result.code){
            commit(SETFOCUSLIST,{focusList:result.data});
            typeof cb === "function" && cb();
        }
    },
    async getCateList({commit}){
        const result = await reqCateList();
        if(!result.code){
            commit(SETCATELIST,{cateList:result.data});
        }
    },
    async getTagList({commit}){
        const result = await reqTagList();
        if(!result.code){
            commit(SETTAGLIST,{tagList:result.data});
        }
    },
    async getPolicyDescList({commit}){
        const result = await reqPolicyDescList();
        if(!result.code){
            commit(SETPOLICYDESCLIST,{policyDescList:result.data});
        }
    },
    async getCategory({commit},cb){
        const result = await reqCategory();
        if(!result.code){
            commit(SETCATEGORY,{category:result.data});
            typeof cb=="function"&&cb();
        }
    },
    async getCategoryList({commit}){
        const result = await reqCategoryList();
        if(!result.code){
            commit(SETCATEGORYLIST,{categoryList:result.data});
        }
    },
    async getShiWu({commit},cb){
        const result = await reqShiWu();
        if(!result.code){
            commit(SETSHIWU,{shiwu:result.data});
            typeof cb=="function"&&cb();
        }
    },
}