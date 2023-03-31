import 
{Meta,Links, Outlet, Scripts, LiveReload} 
from '@remix-run/react';
import Header from '~/components/Header';
import styles from '~/styles/app.css';
// cargar head
export function meta(){
   return(
      {
         charset : 'utf-8',
         title : 'Remix',
         viewport : 'width=device-width,initial-scale-1'
      }
   )
}
// cargar link css
export function links(){
   return[
      {   
         rel :'stylesheet',
         href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
      },
      {
         rel : 'preconnect',
         href:'https://fonts.googleapis.com'
      },
      {
         rel: 'preconnect',
         href: 'https://fonts.gstatic.com',
         crossOrigin:'true'
      },
      {
         href:'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap',
         rel:'stylesheet'
      },
      {
         href:'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
         rel:'stylesheet'
      },
      {   
         rel :'stylesheet',
         href: styles
      }
   ]   
}

export default function App(){
   return(
      <Document>
         <Outlet/>
      </Document>
   )
}
function Document({children}){
   return(
      <html lang="es">
         <head>
            <Meta/>         
            <Links/>
         </head>
         <body>
            <Header/>
            {children}
            <Scripts/>
            <LiveReload/>
         </body>
      </html>
   )
}