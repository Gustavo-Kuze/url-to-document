# What is It?

It's a simple NodeJs API that navigates to a given URL using Puppeteer, converts the website to a document format and downloads It to the client.

The API is [deployed to heroku](https://url-to-document.herokuapp.com) if you want to check It out!

# How to

Currently, you can get the current document formats:

| Format | HTTP Method | Endpoint |
| ------ | ----------- | -------- |
| PDF    | GET         | /pdf     |
| PNG    | GET         | /png     |

## Demo Usage example

Navigate to the following link using a browser:
[https://url-to-document.herokuapp.com/png?url=https://www.mercadolivre.com.br](https://url-to-document.herokuapp.com/png?url=https://www.mercadolivre.com.br)

the result should be a png download.
