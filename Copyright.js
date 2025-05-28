

  $(document).ready(function () {
    // Fungsi saat teks dicopy
    document.oncopy = function () {
      var t = $(".jdl_dtl").text(),
        e = document.location.href,
        a = $("#editor").text(),
        i = $("#penulis").text(),
        n = "",
        o = "";
      a && (n = "<br />" + a);
      i && (o = "  |" + i);
      var r,
        l = n.concat(o),
        d = document.getElementsByTagName("body")[0],
        p =
          "Dilarang keras menyalin, memodifikasi, produksi ulang, menerbitkan ulang, upload ulang, serta mendistribusikan ulang semua konten Business Insight dalam bentuk apa pun tanpa izin tertulis terlebih dahulu dari Kontan. Semua konten dalam Business Insight adalah hak milik Kontan dan dilindungi oleh UU Hak Cipta.<br /><br />DG21 Movie<br />www.dg21movie.com",
        r = window.getSelection(),
        s = document.createElement("div");
      s.style.position = "absolute";
      s.style.left = "-99999px";
      d.appendChild(s);
      s.innerHTML = p;
      r.selectAllChildren(s);
      window.setTimeout(function () {
        d.removeChild(s);
      }, 0);
    };

    // Blokir F12, Ctrl+U, dan Ctrl+Shift+I lalu redirect
    document.addEventListener("keydown", function (e) {
      // F12
      if (e.key === "F12" || e.keyCode === 123) {
        window.location.href = "https://www.admto.online";
        e.preventDefault();
        return false;
      }

      // Ctrl+U
      if (e.ctrlKey && e.key.toLowerCase() === "u") {
        window.location.href = "https://www.admto.online";
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        window.location.href = "https://www.admto.online";
        e.preventDefault();
        return false;
      }
    });
  });

