import {useTheme} from "~/components/ThemeContext/ThemeContext";

export default function AboutMePartOne() {
    const {theme} = useTheme()

    return (
        <>
            <main   >
                <div className=" box-border flex flex-col items-center lg:items-start  md:pl-[90px] pt-[27px]  h-full mx-auto ">
                    <img
                        src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="myPic"
                        className={` ${theme === 'dark' ?  'box-shadow-about-me':'box-shadow-about-me-Black' }  box-shadow-about-me lg:h-1/3 xl:h-[400px] xl:w-[370px]  lg:w-[300px] shadow-gray-300 w-3/4 h-[400px]  `}
                    />
                </div>
            </main>


        </>
    )
}
