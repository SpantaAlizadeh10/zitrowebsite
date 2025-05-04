import Image from "next/image";
import Company1 from "../../public/images/company1.svg"
import Company2 from "../../public/images/company2.svg"
import Company3 from "../../public/images/company3.svg"
import Company4 from "../../public/images/company4.svg"
import Company5 from "../../public/images/company5.svg"
import Company6 from "../../public/images/company6.svg"
import Company7 from "../../public/images/company7.svg"

const Company = () => {
    return (
        <div className="flex mx-auto flex-row items-center w-[90%] h-20 border border-zinc-300 rounded-xl overflow-hidden">
            <div className="flex-1 flex justify-center border-r border-zinc-300">
                <Image className="w-15 h-15" src={Company1} alt="shiaomi"/>
            </div>
            <div className="flex-1 flex justify-center border-r border-zinc-300">
                <Image className="w-15 h-15" src={Company2} alt="samsung"/>
            </div>
            <div className="flex-1 flex justify-center border-r border-zinc-300">
                <Image className="w-15 h-15" src={Company3} alt="apple"/>
            </div>
            <div className="flex-1 flex justify-center border-r border-zinc-300">
                <Image className="w-15 h-15" src={Company4} alt="huawei"/>
            </div>
            <div className="flex-1 flex justify-center border-r border-zinc-300">
                <Image className="w-15 h-15" src={Company5} alt="lg"/>
            </div>
            <div className="flex-1 flex justify-center border-r border-zinc-300">
                <Image className="w-15 h-15" src={Company6} alt="hp"/>
            </div>
            <div className="flex-1 flex justify-center  border-r border-zinc-300">
                <Image className="w-15 h-15" src={Company7} alt="acer"/>
            </div>
        </div>
    )
}

export default Company;