import React from 'react'

import Amazon from "../assets/amazon.png"
import Shopee from "../assets/shopee.png"
import Shopify from "../assets/shopify.png"
import AliBaba from "../assets/alibaba.png"
import Walmart from "../assets/walmart.png"
import Lazada from "../assets/lazada.png"
import Bukalapak from "../assets/bukalapak.png"
import Orami from "../assets/orami.png"

export default function Company() {
    let Data = [
        {
            img: Amazon,
        },
        {
            img: Shopee,
        },
        {
            img: Shopify,
        },
        {
            img: AliBaba,
        },
        {
            img: Walmart,
        },
        {
            img: Lazada
        },
        {
            img: Bukalapak
        },
        {
            img: Orami
        }
    ]
  return (
    <div className='container flex justify-between items-center flex-wrap'>
      
      {
        Data.map((item,index)=>{
            return(
                <div className="col-6 p-2 md:p-4" key={index}>
                    <img src={item.img} alt="img" className="w-[100%] rounded-lg" />
                </div>
            )
        })
      }

    </div>
  )
}
