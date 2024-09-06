import { useTheme } from '~/components/ThemeContext/ThemeContext';

export default function AboutMePartTwo() {
    const { theme } = useTheme();

    return (
        <main
            className={`w-[80%] md:w-[60%] lg:w-[70%] flex flex-col gap-4 lg:items-start mx-auto ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <h1 className="w-full">
                Curious about me? Here you have it:
            </h1>
            <p className="text-[15px]">
                I'm a passionate,   <span className={`border-b-2 ${theme ==='dark' ? 'border-gray-100': " border-gray-700"}`}>self-proclaimed designer </span>
                who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </p>

            <p className="text-[15px] font-sans">
                I began my journey as a web developer in 2015, and since then,  I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p>
                I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            </p>
            <p>
                When I'm not in full-on developer mode, you can find me hovering around on Twitter or on Indie Hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on  <span className={`border-b-2 ${theme ==='dark' ? 'border-gray-100': " border-gray-700"}`}>GitHub </span>.
            </p>
            <p>
                Finally, some quick bits about me.
            </p>
            <ul className="grid grid-cols-2 space-x-10 mx-auto">
                <div>
                    <li>
                        B.E. in Computer Engineering
                    </li>
                    <li>
                        Full-time freelancer
                    </li>
                </div>
                <div>
                    <li>
                        Avid learner
                    </li>
                    <li>
                        Aspiring indie hacker
                    </li>
                </div>
            </ul>
            <p>
                One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
            </p>
        </main>
    );
}
