document.addEventListener("DOMContentLoaded", function () {
    // Cegah salin & tambahkan teks khusus
    document.addEventListener("copy", function (e) {
      e.preventDefault();
      const tambahan = "Dilarang keras menyalin konten ini tanpa izin. DG21 Movie - https://www.dg21movie.com";
      const clipboardData = e.clipboardData || window.clipboardData;
      if (clipboardData) {
        clipboardData.setData("text/plain", tambahan);
      }
    });

    // Blokir kombinasi tombol tertentu dan redirect
    document.addEventListener("keydown", function (e) {
      const isF12 = e.key === "F12" || e.keyCode === 123;
      const isCtrlU = e.ctrlKey && e.key.toLowerCase() === "u";
      const isCtrlShiftI = e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i";

      if (isF12 || isCtrlU || isCtrlShiftI) {
        window.location.href = "https://www.admto.online";
        e.preventDefault();
        return false;
      }
    });
  });
