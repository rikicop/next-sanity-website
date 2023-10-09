CURSO - https://www.youtube.com/watch?v=OcTPaUfay5I - KAPEHE

CUENTA SANITY.IO UTILIZADA

## Instalación y Configuración de Next y Sanity 00:00

0. Creación de un proyecto Sanity - 9:40

1. La cuenta de Sanity.io que estás usando para este proyecto en particular es
   la de github que tienes(rupe**\***@prot**\***com)

2. El Proyecto de sanity no se va a implementar en vercel por separado - 12:30
   va a estar inplemnetado en Next

3. El projectId que se encuentra en sanity.config.ts es muy importante y lo vas
   a utilizar en tu aplicación de Next.js - 13:40

4. Para abrir tu projecto desde manage.sanity.io, puedes buscar "Manage Project" en la foto de Perfil

5. CORS origins: Donde dice API al lado de Settings, minuto 16 del video. "Allow Credentials"

6. Embeding the Sanity Studio, 23:00

7. Definición de sanity.config.ts dentro de next-sanity-web

8. Se van a importar los plugins necesarios para poder correr sanity del lado del cliente - 26:24

   Tuve que instalar visionTool() aparte

9. La página admin de sanity se va a correr del lado del "CLIENTE". 29:08

''localhost:3000/admin''

## Creación de Schema para Sanity - 31:40

## Sanity Block type - 36:00

## Como agrupar todos los Schemas facilmente a medida que creo más - 37:32

## Displaying Data - 39:04

## Es en Sanity-utils donde voy a colocar las funciones necesarias para acceder a los datos - 40:57

## Creación de los Types de TypesScript - 50:45

Lo hace de una manera muy interesante, ya que mantiene todos los types
dentro de sanity-utils, quedando los componentes principales sin mostrar
directamente el uso de typescript, cuando de hecho si están tipados(Typed).

## Creación de "Grid cols..." para que quede como "tarjetas" 1:05:00

## Configuración de next.config.js para que acepte la imagen(cdn.sanity.io) - 1:10:00

## Como crear un Dynamic Route 1:14:00

Convención
Se puede crear un segmento dinámico encerrando el nombre de una carpeta
entre corchetes: [folderName]. Por ejemplo, [id] o [slug].

## noopener noreferrer - 1:23:45

## Instalación de @portabletext/react para ver feedback - 1:28:00

rel="noopener noreferrer" is often used when you want to open a link in a new tab or window while enhancing security and privacy by preventing access to the window.opener object and not sending a Referer header.

### github next-sanity-website

https://www.youtube.com/watch?v=2tQNI9NuBUo
