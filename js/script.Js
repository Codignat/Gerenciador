const input = document.querySelector('#arquivo');
const preview = document.querySelector('#previw');
const btDownload = document.querySelector('#download');

input.addEventListener('change', function() {
    const arquivo = this.files[0];

    if (arquivo && arquivo.type === 'text/plain') {
        const leitor = new FileReader();

        leitor.onload = function(e) {
            preview.value = e.target.result; 
        };

        
        leitor.readAsText(arquivo);
    } else {
        alert("Por favor, selecione um arquivo .txt válido.");
    }
});

const download = function(conteudo, nomeArquivo) {
    const a = document.createElement('a');
    const blob = new Blob([conteudo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = nomeArquivo;
    a.click();
    URL.revokeObjectURL(url);
};

btDownload.addEventListener('click', function() {
    download(preview.value, 'sistema.txt');
});
