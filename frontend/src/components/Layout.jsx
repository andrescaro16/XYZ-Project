import { Helmet, HelmetProvider } from 'react-helmet-async';


const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                
                <HelmetProvider>
                    <Helmet>
                        <title>XYZ</title>
                        {/*  <link rel="icon" href="" /> */}
                    </Helmet>
                </HelmetProvider>
                <main className="flex flex-col items-center justify-center w-full flex-1">
                    {children}
                </main>
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default Layout;