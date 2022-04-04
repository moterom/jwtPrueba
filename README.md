# jwtPrueba
Testing JsonWebToken validation in NodeJS


le asignamos a un usuario creado un Token con la funcion jwt.sign
localhost:3000/api/login

funcion verifyToken verifica que tengamos un token valido de lo contrario nos envia mensaje de error 403 "Forbidden"


//al correr esta api le pasamos la funcion verifyToken y si el token es correcto recibimos el mensaje de "Post fue creado"
localhost:3000/api/posts
