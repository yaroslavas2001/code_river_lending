
import { useEffect, useRef } from "react"
import style from "./Line.module.css"
const Line = () => {
    let path: any = useRef()
    let pathLength = 2065

    useEffect(() => {
        if (path) {
            path.current.style.strokeDasharray = 0 + '' + pathLength
            path.current.style.strokeDashoffset = 0
            window.addEventListener('scroll', scroll)
        }
        return () => {
            window.removeEventListener('scroll', scroll);
        }
    }, [path])
    let scroll = () => {
        let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        let drawLengh = pathLength * scrollPercentage
        // path.current.style.strokeDashoffset = pathLength - drawLengh
        //  - lert-right + right-left
        path.current.style.strokeDashoffset = -drawLengh
    }
    return (
        // preserveAspectRatio="xMidYMax meet"
        <div className={style.container}>
            {/* <svg className={style.line} preserveAspectRatio="xMidYMax meet" viewBox="0 0 169 1796" fill="none" >
                <path ref={path} d="M3.5 0.5C3.5 409.7 3.5 512 3.5 512H165.5V767.5H3.5V1796" stroke="black" strokeWidth="6" />
            </svg> */}
            <svg className={style.line} preserveAspectRatio="xMidYMax meet" viewBox="0 0 1365 349"
                fill="none" >
                <path ref={path} d="M-152 182.966C-141.998 182.966 -122.94 198.142 -122.94 198.142C-107.619 204.762 -83.7083 215.094 -83.7083 215.094C-83.7083 215.094 -52.8058 227.298 -32.2069 232.369C-10.1537 237.798 25.2679 241.248 25.2679 241.248C98.651 247.066 170.343 261.713 211.254 210.574C218.413 201.625 221.166 185.872 205.442 185.872C189.586 185.872 182.421 189.718 169.116 196.043C146.303 206.889 124.942 223.371 121.328 239.634C116.413 261.753 111.913 302.171 126.979 321.003C149.659 349.353 240.314 345.543 240.314 345.543C240.314 345.543 332.302 343.21 389.813 331.82C414.519 326.927 452.454 316.482 452.454 316.482L530.917 286.938L627.072 247.5C627.072 247.5 657.513 231.592 677.072 221.5C706.096 206.524 751.572 183.5 751.572 183.5C751.572 183.5 789.041 166.71 813.072 156C843.587 142.399 891.265 121.294 891.265 121.294C891.265 121.294 935.835 105.191 958.104 97.2384C975.23 91.122 993.641 88.0635 1010.41 80.6095C1030.66 71.6103 1074.18 62.5275 1074.18 62.5275C1074.18 62.5275 1116.58 49.7304 1144.09 42.8311C1194.56 30.1743 1322.95 17.0417 1365.07 3" stroke="#647CE9" strokeWidth="4" strokeLinecap="round" />
            </svg>
        </div>
    )
}
export default Line;