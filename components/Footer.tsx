import { assets } from "@/Assets/assets"
import { ImageError } from "next/dist/server/image-optimizer"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
            <Image src={assets.logo_light} alt="LogoLight" width={120}/>
            <p className="text-sm text-white">
                All right reserved. Copyright @blogger
            </p>
            <div className="flex">
                <Image src={assets.facebook_icon} alt="FacebookIcon" width={40}/>
                <Image src={assets.twitter_icon} alt="TwitterIcon" width={40}/>
                <Image src={assets.googleplus_icon} alt="GooglePlusIcon" width={40}/>
            </div>
        </div>
    )
}