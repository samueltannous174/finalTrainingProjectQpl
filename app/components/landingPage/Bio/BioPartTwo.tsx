import {useTheme} from "~/components/ThemeContext/ThemeContext";

export default function BioPartTwo() {
    const {theme}=useTheme()

    return (
        <>
            <main   >
                <div className=" flex items-center justify-center ">
                    <img
                        src="https://scontent.fjrs4-1.fna.fbcdn.net/v/t39.30808-6/342849858_769379387980558_1898589403332030529_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=a2NNJtWaTRQQ7kNvgFJuPYS&_nc_ht=scontent.fjrs4-1.fna&oh=00_AYBgw8odylKVQjZie1rO9xwMag-YgH_cWwlesv0gPP0lqw&oe=66DE0DC7"
                        alt="myPic"
                        className={` ${theme === 'dark'? 'md:boxShadowSm': 'md: box-shadow-black ' } sm:w-1/2 w-3/4 lg:w-[40%]  shadow-gray-300 box-shadow`}
                    />
                </div>
            </main>


        </>
    )
}
