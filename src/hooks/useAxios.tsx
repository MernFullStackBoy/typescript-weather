import axios from "axios"
import { useEffect, useState } from "react"

function useAxios(url: string) {
    const [data, setData] = useState<object[]>([])

    const [loading, setLoading] = useState<boolean>(false)

    const getWeatherData = async () => {
        try {
            setLoading(true)
            const req = await axios.get(url)

            setLoading(false)
            const res: any = await req.data

            setData([res])


        } catch (err: any) {
            alert(err.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        getWeatherData()
    }, [url])

    return { data, loading }

}

export default useAxios