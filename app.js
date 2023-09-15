'use strict'

async function pegarImagens(){
  const endPoint = 'https://dog.ceo/api/breed/boxer/images'
  const response = await fetch(endPoint)
  const imagens = await response.json()
  return imagens.message
}

function criarTagImg(imagem){
    const galeria = document.getElementById('galeria')
    const tagImg = document.createElement('img')
    tagImg.src = imagem
    galeria.appendChild(tagImg)
}

async function carregarFotos(){
    const imagens = await pegarImagens()
    imagens.forEach(criarTagImg)
}

carregarFotos()