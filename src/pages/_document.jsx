import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en" className='bg-body'>
      <Head>
        {/* lo modificamos para  */}
        {/* Icon */}
        {/* fonts */}
        {/* script/js externos */}
        {/* styles externos */}
      </Head>
      <body className='bodyClass'>
        {/* para el footer podemos tenerlo dentro del Main */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
