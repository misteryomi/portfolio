import { Chrome, Palette, Zap, Copy, Highlighter } from 'lucide-react';

const Feature = ({ icon, title, description }: { icon: any, title: any, description: any }) => (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-md">
        {icon}
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-300 text-center">{description}</p>
    </div>
);

const LandingPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between text-sm text-center">
                <header className="py-6">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl font-bold ">Google Chrome Color Usage Analyzer</h1>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-12">
                    <section className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-300 mb-4">
                            Unlock the Colors of the Web
                        </h2>

                        <p className="text-xl text-gray-500 mb-8">
                            Analyze, extract, and use colors from any website with ease.
                        </p>

                        <a
                            href="https://chromewebstore.google.com/detail/website-color-usage-analy/lhnlagaajddijcflcgkfebnhonnpaakg?hl=en"
                            className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
                        >
                            Add to Chrome - It&apos;s Free!
                        </a>
                    </section>

                    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Feature
                            icon={<Palette size={48} className="text-blue-500" />}
                            title="Color Breakdown"
                            description="Get a comprehensive analysis of colors used on any webpage."
                        />
                        <Feature
                            icon={<Zap size={48} className="text-yellow-500" />}
                            title="Instant Results"
                            description="See color information in both RGB and HEX formats with a single click."
                        />
                        <Feature
                            icon={<Copy size={48} className="text-green-500" />}
                            title="Easy Copying"
                            description="Copy color codes to your clipboard instantly for use in your projects."
                        />
                        <Feature
                            icon={<Highlighter size={48} className="text-purple-500" />}
                            title="Visual Highlighting"
                            description="Easily see where each color is used on the webpage."
                        />
                        <Feature
                            icon={<Chrome size={48} className="text-red-500" />}
                            title="Browser Integration"
                            description="Seamlessly integrated into your Chrome browser for quick access."
                        />
                    </section>
                </main>

            
            </div>
        </main>
    );
};

export default LandingPage;