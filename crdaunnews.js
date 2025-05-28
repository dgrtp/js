$(document).ready(function () {
    // Fungsi saat teks dicopy
    document.oncopy = function () {
      var tambahanInfo = "Dilarang keras menyalin, memodifikasi, produksi ulang, menerbitkan ulang, upload ulang, serta mendistribusikan ulang semua konten Business Insight tanpa izin tertulis terlebih dahulu dari Kontan. Semua konten dalam Business Insight adalah hak milik Kontan dan dilindungi oleh UU Hak Cipta.<br /><br />DaunNews<br />www.dgjackpot.site";

      var body = document.getElementsByTagName("body")[0];
      var selection = window.getSelection();
      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.left = "-99999px";
      body.appendChild(div);
      div.innerHTML = tambahanInfo;
      selection.selectAllChildren(div);

      setTimeout(function () {
        body.removeChild(div);
      }, 0);
    };

    // Blokir F12, Ctrl+U, Ctrl+Shift+I lalu redirect
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "F12" || e.keyCode === 123 ||
        (e.ctrlKey && e.key.toLowerCase() === "u") ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i")
      ) {
        window.location.href = "https://www.admto.online";
        e.preventDefault();
        return false;
      }
    });
  });
