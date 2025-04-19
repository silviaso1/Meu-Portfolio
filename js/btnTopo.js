window.onscroll = function () {
    const botao = document.getElementById("btnTopo");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      botao.style.display = "block";
    } else {
      botao.style.display = "none";
    }
  };

  document.getElementById("btnTopo").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });