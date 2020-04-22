document.addEventListener('DOMContentLoaded', () => {
    const imgLigthBox = document.querySelectorAll('.materialbox');
    M.Materialbox.init(imgLigthBox, {
        inDuration: 500,
        outDuration: 600
    });
});