'use client';
import Header from "../components/header";
import Footer from "../components/footer";
import CustomSlider from "../components/custome-slider";


const TimeCapsulePage = () => {

    const clickHandler = () => {
        // redirect to /time-capsules
        
    }

    return (
        <>
            <Header />
            <div className="container mt-4 text-center w-50">
                <h1 className="text-left ">タイムカプセルのタイトル</h1>
                <div className="flex justify-center items-center">
                    <CustomSlider />
                </div>
                <p className='fs-4 mt-4 text-left'>タイムカプセル投稿の説明文です</p>
            </div>
        </>
    )
}

export default TimeCapsulePage;