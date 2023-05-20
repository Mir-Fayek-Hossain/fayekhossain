const HomeLayout = ({ children }) => {
    return (
        <main className="relative">
            <div
                className="fixed top-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("/static/hero-bg.jpg")' }}
            >
                <div className="w-[90vw] relative h-[90vh]">
                    <h2 className="text-[200px] font-bold leading-tight">
                        Woftware Engineer
                    </h2>

                    <h2 className="absolute bottom-10 text-2xl right-0 w-[40vw]">
                        I’m Rokas Judickas, a UX designer and CRO specialist who
                        thrives in creating unique data-driven design approaches
                    </h2>
                </div>
            </div>
            {children}
        </main>
    );
};

export default HomeLayout;
