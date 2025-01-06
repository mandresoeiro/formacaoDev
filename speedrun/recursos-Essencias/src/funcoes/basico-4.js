function ultima() {
    console.log('[inicio]Função ultima foi executada');
    console.log('[fim]Função ultima foi executada');
}

function terciaria() {
    console.log('[inicio]Função terciária foi executada');
    ultima();
    console.log('[fim]Função terciária foi executada');
}


function secundaria() {
    console.log('[inicio]Função secundária foi executada');
    terciaria();
    console.log('[fim]Função secundária foi executada');
}

function principal() {  
    console.log(`[inicio]Função principal foi executada`);
    secundaria(); // Chama a função corretamente
    console.log(`[fim]Função principal foi executada`);
}

// Executa a função principal
principal();
