function externo() {
    function interno() {
        console.log('Interno');
    }
    interno();
    console.log('Fim da função externa');
}

externo();