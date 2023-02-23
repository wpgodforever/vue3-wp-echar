import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'
const app: Express = express()
app.use('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
const router: Router = express.Router()

app.use('/api', router)

router.get('/list', async (req: Request, res: Response) => {
    // 疫情结束，该接口已不支持使用，自己造数据吧
    // const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf')
    res.json({
        code:200,
        msg:'成功'
    })
})

app.listen(3334,()=>{

    console.log('success server http://localhost:3334')
})