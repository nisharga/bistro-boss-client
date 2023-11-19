import { useEffect, useState } from "react"

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://bistro-boss-server-three-olive.vercel.app/api/v1/menu/getallmenu')
        .then(res => res.json())
        .then(data => {
            setMenu(data?.data)
            setLoading(false)
        })
        
    }, [])
    return [menu, loading]
}

export default useMenu;