# Youtube Video Album

En el presente repositorio encontraras el backend del proyecto Youtube Video Album,
 el cual es a grandes razgos, HTTP API desarrollada en Node.js, desplegada en AWS Lambda y API Gateway usando Serverless Framework.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en tu máquina :grin:

## Pre-requisitos 📋
- [Node.JS](https://nodejs.org/es/)
- Cuenta configurada en [aws-cli](https://aws.amazon.com/es/cli/)
- [serverless](https://www.serverless.com/framework/docs/getting-started)

## Configuración 🔧

Agregar variables de entorno
```ini
DB_CONNECTION=#arn:aws:dynamodb:sa-east-1:xxxxxxxxxxxx:table/Videos
DB_TABLE_NAME=#Videos
```
## Instalación 🔧
```
$ npm install
```

### Despliegue 📦

```
$ serverless deploy
```
despues del despliegue, obtendras un mensaje por consola similar al siguiente:
```bash
Deploying aws-lambda-video-album to stage dev (sa-east-1)

✔ Service deployed to stack aws-lambda-video-album-dev (70s)

endpoints:
  POST - https://xxxxxxxxxx.execute-api.sa-east-1.amazonaws.com/videos
  GET - https://xxxxxxxxxx.execute-api.sa-east-1.amazonaws.com/videos
  GET - https://xxxxxxxxxx.execute-api.sa-east-1.amazonaws.com/videos/{id}
  DELETE - https://xxxxxxxxxx.execute-api.sa-east-1.amazonaws.com/videos/{id}
functions:
  addVideo: aws-lambda-video-album-dev-addVideo (25 MB)
  getVideos: aws-lambda-video-album-dev-getVideos (25 MB)
  getVideo: aws-lambda-video-album-dev-getVideo (25 MB)
  deleteVideo: aws-lambda-video-album-dev-deleteVideo (25 MB)

Monitor all your API routes with Serverless Console: run "serverless --console"
```


## Ejecutando las pruebas ⚙️

Para probar cada endpoint puedes realizar los siguientes pasos.
- Ejecutar las pruebas que se encuentran en el archivo ```test.http``` en la raiz del proyecto.
- O importar la siguiente coleccion de postman
```json
{
	"info": {
		"_postman_id": "c98a626a-0407-475d-87e6-ca3aadb4e040",
		"name": "Youtube Video Album",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "8902256"
	},
	"item": [
		{
			"name": "get Videos",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos",
					"protocol": "https",
					"host": [
						"g9y6jtrkh6",
						"execute-api",
						"sa-east-1",
						"amazonaws",
						"com"
					],
					"path": [
						"videos"
					]
				}
			},
			"response": []
		},
		{
			"name": "add Video",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n\"thumbnail\": \"https://i.ytimg.com/vi/04854XqcfCY/default.jpg\",\n\"title\": \"Queen - We Are The Champions (Official Video)\",\n\"description\": \"Taken from News Of The World, 1977 and Greatest Video Hits 1. \\n\\n#QueenTheGreatest #Queen #WeAreTheChampions\\n\\nClick here to buy the DVD with this video at the Official Queen Store:\\nhttp://www.queenonlinestore.com\\n\\nSubscribe to the official Queen channel Here https://Queen.lnk.to/Subscribe\\nWatch more: https://Queen.lnk.to/OfficialMusicVideos\\n\\nAbout Queen:\\nWelcome to the official Queen channel. Subscribe today for exclusive Queen videos, including live shows, interviews, music videos & much more.\\n\\nConnect with Queen Online:\\nVisit the official Queen Website: https://Queen.lnk.to/Official\\nFollow Queen on Instagram: https://Queen.lnk.to/Instagram\\nFollow Queen on TikTok: https://Queen.lnk.to/TikTokOfficial\\nFollow Queen on Twitter: https://Queen.lnk.to/Twitter\\n\\nQueen - We Are The Champions (Official Video)\\nhttps://www.youtube.com/user/queenofficial\",\n\"url\": \"https://www.youtube.com/watch?v=04854XqcfCY\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos",
					"protocol": "https",
					"host": [
						"g9y6jtrkh6",
						"execute-api",
						"sa-east-1",
						"amazonaws",
						"com"
					],
					"path": [
						"videos"
					]
				}
			},
			"response": []
		},
		{
			"name": "get one Video",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos/90485035-d098-4579-b900-7c9738d7104d",
					"protocol": "https",
					"host": [
						"g9y6jtrkh6",
						"execute-api",
						"sa-east-1",
						"amazonaws",
						"com"
					],
					"path": [
						"videos",
						"90485035-d098-4579-b900-7c9738d7104d"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete one Video",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos/90485035-d098-4579-b900-7c9738d7104d",
					"protocol": "https",
					"host": [
						"g9y6jtrkh6",
						"execute-api",
						"sa-east-1",
						"amazonaws",
						"com"
					],
					"path": [
						"videos",
						"90485035-d098-4579-b900-7c9738d7104d"
					]
				}
			},
			"response": []
		}
	]
}
```


## QA 🔩

```POST``` **agregar un video**
```bash
curl --location --request POST 'https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos' \
--header 'Content-Type: application/json' \
--data-raw '{
"thumbnail": "https://i.ytimg.com/vi/04854XqcfCY/default.jpg",
"title": "Queen - We Are The Champions (Official Video)",
"description": "Taken from News Of The World, 1977 and Greatest Video Hits 1. \n\n#QueenTheGreatest #Queen #WeAreTheChampions\n\nClick here to buy the DVD with this video at the Official Queen Store:\nhttp://www.queenonlinestore.com\n\nSubscribe to the official Queen channel Here https://Queen.lnk.to/Subscribe\nWatch more: https://Queen.lnk.to/OfficialMusicVideos\n\nAbout Queen:\nWelcome to the official Queen channel. Subscribe today for exclusive Queen videos, including live shows, interviews, music videos & much more.\n\nConnect with Queen Online:\nVisit the official Queen Website: https://Queen.lnk.to/Official\nFollow Queen on Instagram: https://Queen.lnk.to/Instagram\nFollow Queen on TikTok: https://Queen.lnk.to/TikTokOfficial\nFollow Queen on Twitter: https://Queen.lnk.to/Twitter\n\nQueen - We Are The Champions (Official Video)\nhttps://www.youtube.com/user/queenofficial",
"url": "https://www.youtube.com/watch?v=04854XqcfCY"
}'
```

Respuesta esperada
- éxito: status 200
```json
{
  "id": "3dff7ff9-4345-44a2-9a7c-5022cc9dcd9f",
  "title": "Queen - We Are The Champions (Official Video)",
  "description": "Taken from News Of The World, 1977 and Greatest Video Hits 1. \n\n#QueenTheGreatest #Queen #WeAreTheChampions\n\nClick here to buy the DVD with this video at the Official Queen Store:\nhttp://www.queenonlinestore.com\n\nSubscribe to the official Queen channel Here https://Queen.lnk.to/Subscribe\nWatch more: https://Queen.lnk.to/OfficialMusicVideos\n\nAbout Queen:\nWelcome to the official Queen channel. Subscribe today for exclusive Queen videos, including live shows, interviews, music videos & much more.\n\nConnect with Queen Online:\nVisit the official Queen Website: https://Queen.lnk.to/Official\nFollow Queen on Instagram: https://Queen.lnk.to/Instagram\nFollow Queen on TikTok: https://Queen.lnk.to/TikTokOfficial\nFollow Queen on Twitter: https://Queen.lnk.to/Twitter\n\nQueen - We Are The Champions (Official Video)\nhttps://www.youtube.com/user/queenofficial",
  "url": "https://www.youtube.com/watch?v=04854XqcfCY",
  "thumbnail": "https://i.ytimg.com/vi/04854XqcfCY/default.jpg",
  "createdAt": "2022-09-02T00:50:58.501Z"
}
```
- error: status 500
```json 
  "message": "mensaje de error" 
```

```GET``` **Obtener todos los videos**
```bash
curl --location --request GET 'https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos'
```

Respuesta esperada
- éxito: status 200
```json
[
  {
  "id": "3dff7ff9-4345-44a2-9a7c-5022cc9dcd9f",
  "title": "Queen - We Are The Champions (Official Video)",
  "description": "Taken from News Of The World, 1977 and Greatest Video Hits 1. \n\n#QueenTheGreatest #Queen #WeAreTheChampions\n\nClick here to buy the DVD with this video at the Official Queen Store:\nhttp://www.queenonlinestore.com\n\nSubscribe to the official Queen channel Here https://Queen.lnk.to/Subscribe\nWatch more: https://Queen.lnk.to/OfficialMusicVideos\n\nAbout Queen:\nWelcome to the official Queen channel. Subscribe today for exclusive Queen videos, including live shows, interviews, music videos & much more.\n\nConnect with Queen Online:\nVisit the official Queen Website: https://Queen.lnk.to/Official\nFollow Queen on Instagram: https://Queen.lnk.to/Instagram\nFollow Queen on TikTok: https://Queen.lnk.to/TikTokOfficial\nFollow Queen on Twitter: https://Queen.lnk.to/Twitter\n\nQueen - We Are The Champions (Official Video)\nhttps://www.youtube.com/user/queenofficial",
  "url": "https://www.youtube.com/watch?v=04854XqcfCY",
  "thumbnail": "https://i.ytimg.com/vi/04854XqcfCY/default.jpg",
  "createdAt": "2022-09-02T00:50:58.501Z"
  }
]
```
- éxito: status 200 **En el caso de no existir videos en la BBDD**
```json
[]
```

- error: status 500
```json  
  "message": "mensaje de error" 
```

```GET``` **Obtener un video**
```bash
curl --location --request GET 'https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos/3dff7ff9-4345-44a2-9a7c-5022cc9dcd9f'
```

Respuesta esperada
- éxito: status 200
``` json
{
  "id": "3dff7ff9-4345-44a2-9a7c-5022cc9dcd9f",
  "title": "Queen - We Are The Champions (Official Video)",
  "description": "Taken from News Of The World, 1977 and Greatest Video Hits 1. \n\n#QueenTheGreatest #Queen #WeAreTheChampions\n\nClick here to buy the DVD with this video at the Official Queen Store:\nhttp://www.queenonlinestore.com\n\nSubscribe to the official Queen channel Here https://Queen.lnk.to/Subscribe\nWatch more: https://Queen.lnk.to/OfficialMusicVideos\n\nAbout Queen:\nWelcome to the official Queen channel. Subscribe today for exclusive Queen videos, including live shows, interviews, music videos & much more.\n\nConnect with Queen Online:\nVisit the official Queen Website: https://Queen.lnk.to/Official\nFollow Queen on Instagram: https://Queen.lnk.to/Instagram\nFollow Queen on TikTok: https://Queen.lnk.to/TikTokOfficial\nFollow Queen on Twitter: https://Queen.lnk.to/Twitter\n\nQueen - We Are The Champions (Official Video)\nhttps://www.youtube.com/user/queenofficial",
  "url": "https://www.youtube.com/watch?v=04854XqcfCY",
  "thumbnail": "https://i.ytimg.com/vi/04854XqcfCY/default.jpg",
  "createdAt": "2022-09-02T01:08:45.873Z"
}
``` 

- error: status 404
```json
{   
  "message":"Video not found"
}
```
- error: status 500
```json  
 "mensaje de error" 
```

```DELETE``` **Eliminar un video**
```bash
curl --location --request DELETE 'https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos/3dff7ff9-4345-44a2-9a7c-5022cc9dcd9f'
```

Respuesta esperada
- éxito: status 200
```json
{
  "message":"Video deleted Successfuly"
}
```

- error: status 404
```json
{   
  "message":"Video not found"
}
```
- error: status 500
```json  
 "mensaje de error" 
```

## Construido con :heart:&:coffee:
- [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Node.JS](https://nodejs.org/es/)
- [aws-lambda](https://aws.amazon.com/es/lambda/)
- [DynamoDB](https://aws.amazon.com/es/dynamodb)
- [serverless](https://www.serverless.com/framework/docs/getting-started)
- [Middy](https://middy.js.org/)


## Versionado 📌

Por el momento no se encuentra versionado, pero se utilizara [samver](https://samver.org/). Para todas las versiones disponibles.

# Autores ✒️

Roberto Vega - Trabajo Inicial

Roberto Vega - Documentación

También puedes mirar la lista de todos los contribuyentes quiénes han participado en este proyecto.

## Licencia 📄

Este proyecto no se encuentra bajo ninguna Licencia.