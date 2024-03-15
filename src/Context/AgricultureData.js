import React, { useState } from 'react'

export const AgriData = React.createContext()
function AgricultureData({children}) {
    let [data, setData] = useState([
        {
            name:"SAFFRON",
            img:"https://media.istockphoto.com/id/540601628/photo/raw-organic-red-saffron-spice.jpg?s=612x612&w=0&k=20&c=Ana18gJZs154u3ATgDMj_hmRw6kwLnPAiNtOtqL5Sbo=",
            description1:"Grade A1 Kashmir Saffron,The most aromatic, flavourful and potent saffron strain in the world from Pampore, Kashmir.",
            description2:"The most sought after and rarest grade of Malabari pepper. Extra-special, woody, citrusy and a lot more"
        },
        {
            name:"DRY FRUITS 'N' NUTS",
            img:"https://healthybuddha.in/image/catalog/Recentblogs/blogs/dryfruitsandnuts.jpg",
            description1:"Oil-rich and nutty delicious, our Mamras and Gurbandis from south Kashmir. Grown organically in India - not imported!",
            description2:"Crunchy, oil-rich and delicious, the original and organic walnuts from Kupwara, Kashmir."
        },
        {
            name:"SPICES POWDER",
            img:"https://c4.wallpaperflare.com/wallpaper/465/468/1016/walnut-bow-plates-pepper-wallpaper-preview.jpg",
            description1:"Grown, harvested and packed in-house. Freshly ground each weekend at the mill. Aromatic with an extraordinary colour release.",
            description2:"A hidden gem from the Himalayas. The superfood of choice for mountaineers. Amazing for the lungs and brilliant cancer fighting properties"
        },
        {
            name:"HERBS",
            img:"https://c4.wallpaperflare.com/wallpaper/283/936/963/food-herbs-and-spices-spices-hd-wallpaper-preview.jpg",
            description1:"Chefs consider it the most exotic mushroom.",
            description2:"Wild and organic harvest foraged from the upper Himalayan forests of Gurez near the India-Pak border."
        },
        {
            name:"HEALTH PRODUCTS",
            img:"https://e0.pxfuel.com/wallpapers/130/619/desktop-wallpaper-health-food-organic-food.jpg",
            description1:"Raw and bottled straight from the beehive. Light, fruity & exceptional.",
            description2:"Carefully crafted jams from local produce in Kashmir. Some amazing mulberry, blackberry, fig (anjeer) and quince!"
        },
        {
            name:"SILK",
            img:"https://blog.fabrics-store.com/wp-content/uploads/2019/03/silk-worm.png",
            description1:"Silk has a smooth, soft texture that is not slippery, unlike many synthetic fibers. ",
            description2:"Silk is one of the strongest natural fibers, but it loses up to 20% of its strength when wet."
        }
    ])
    return <>
    <AgriData.Provider value={{data,setData}}>{children}</AgriData.Provider>
    </>
}

export default AgricultureData