// //封装分类数据业务相关的代码
import { ref } from "vue"
import { useRoute } from "vue-router"
import { getCategoryAPI } from "@/apis/category"
import { onMounted } from "vue"
import { onBeforeRouteUpdate } from "vue-router"

export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        console.log(res.result)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())

    // 目标：路由参数变化的时候，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        console.log('路由变化了')
        //存在一个问题：使用了最新的路由参数请求，但是该参数存在滞后性
        console.log(to)
        getCategory(to.params.id)
    })
    return { categoryData }
}