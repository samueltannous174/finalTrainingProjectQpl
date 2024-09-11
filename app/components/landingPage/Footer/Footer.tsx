import {useTheme} from "~/components/ThemeContext/ThemeContext";

export default function Footer() {
    const { theme } = useTheme();
    return (
        <main    className={`flex flex-col items-center mx-auto p-5 space-y-10 box-border ${
            theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-blue-50 text-gray-900'}`}>
        <div className={`${ theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-blue-50 text-gray-900'} flex flex-col items-center mx-auto p-5 space-y-10  box-border`}>
            <div className="flex justify-center items-center">
                <button className="bg-gray-500 text-white py-3 px-8 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
                    Get In Touch
                </button>
            </div>

            <p className="break-words text-[20px] max-w-[80%] sm:max-w-[50%]">
                What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
            </p>

            <div className="flex space-x-3">
                <svg className="mb-[5px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.3334 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7431 28.2848 28.4695 28.5358C28.1959 28.7868 27.8728 28.9779 27.5211 29.0969C27.1693 29.2159 26.7966 29.2601 26.4267 29.2266C22.3239 28.7808 18.3827 27.3788 14.9201 25.1333C11.6985 23.0862 8.96719 20.3549 6.92007 17.1333C4.66671 13.6549 3.2644 9.69463 2.82674 5.5733C2.79342 5.20459 2.83724 4.83298 2.95541 4.48213C3.07357 4.13128 3.2635 3.80889 3.51309 3.53546C3.76269 3.26204 4.06648 3.04358 4.40513 2.894C4.74378 2.74441 5.10986 2.66698 5.48007 2.66663H9.48007C10.1271 2.66026 10.7545 2.8894 11.2451 3.31134C11.7357 3.73328 12.0562 4.31923 12.1467 4.95997C12.3156 6.24006 12.6287 7.49694 13.0801 8.70663C13.2595 9.18387 13.2983 9.70252 13.1919 10.2011C13.0856 10.6998 12.8386 11.1574 12.4801 11.52L10.7867 13.2133C12.6848 16.5514 15.4487 19.3152 18.7867 21.2133L20.4801 19.52C20.8426 19.1615 21.3003 18.9144 21.7989 18.8081C22.2975 18.7018 22.8162 18.7406 23.2934 18.92C24.5031 19.3714 25.76 19.6845 27.0401 19.8533C27.6878 19.9447 28.2793 20.2709 28.7021 20.77C29.125 21.269 29.3496 21.9061 29.3334 22.56Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className=" text-[20px]">
                    0598349999
                </p>
            </div>

        </div>
        </main>
    );
}