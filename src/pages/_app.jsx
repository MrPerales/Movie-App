import Layout from "components/Layout"
import { ContextProvider } from "../context"
import 'tailwindcss/tailwind.css'

// (providers, themes, props, o cualquier cosa que necesitemos)
export default function App({ Component, pageProps }) {


    return (
        // agregar el context Provider
        <ContextProvider>
            <Layout />
            <Component {...pageProps} />

        </ContextProvider>
    )
}