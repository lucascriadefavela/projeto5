if (elemento && elemento.localName === 'audio') {
    elemento.play()
}
else {
    console.log('Elemento não encontrado ou seletor inválido');
}
