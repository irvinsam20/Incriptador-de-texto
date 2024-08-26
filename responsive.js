document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const outputText = document.getElementById('outputText');
    const placeholderContent = document.getElementById('placeholderContent');
    const resultContent = document.getElementById('resultContent');
    const copyBtn = document.getElementById('copyBtn');

    function encrypt(text) {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function decrypt(text) {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    function updateOutput(text) {
        if (text.trim() === '') {
            placeholderContent.style.display = 'block';
            resultContent.style.display = 'none';
        } else {
            placeholderContent.style.display = 'none';
            resultContent.style.display = 'block';
            outputText.textContent = text;
        }
    }

    encryptBtn.addEventListener('click', () => {
        const encrypted = encrypt(inputText.value.toLowerCase());
        updateOutput(encrypted);
    });

    decryptBtn.addEventListener('click', () => {
        const decrypted = decrypt(inputText.value);
        updateOutput(decrypted);
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(outputText.textContent).then(() => {
            copyBtn.textContent = 'Copiado!';
            setTimeout(() => {
                copyBtn.textContent = 'Copiar';
            }, 2000);
        });
    });

    inputText.addEventListener('input', () => {
        if (inputText.value.trim() === '') {
            updateOutput('');
        }
    });
});