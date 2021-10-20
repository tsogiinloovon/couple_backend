import userModel from '../users/user.model'

export const getUser = async function (email: string) {
    try {
        console.log('email',email)
        const user = await userModel.findOne({ email: email })
        let messages = 'Системд амжилттай нэвтэрлээ'
        let isSuccess = true
        if (!user) {
            messages = "Системд нэвтэрч чадсангүй'"
            isSuccess = false
        }
        let response = {
            success: isSuccess,
            statusCode: 200,
            messageCode: 'LOGIN200',
            message: messages,
        }
        return response
    } catch (error) {
        throw error
    }
}

export const regUser = async function (model: any) {
    try {
        let messages = 'Системд амжилттай хадгаллаа'
        let isSuccess = true
        const user = await new userModel(model).save()
        if (!user) {
            messages = "Системд хадгалж чадсангүй'"
            isSuccess = false
        }
        let response = {
            success: isSuccess,
            statusCode: 200,
            messageCode: 'REGISTER200',
            message: messages,
        }
        return response
    } catch (error) {
        throw error
    }
}
