// ATM Uygulaması

let yeniSatir = "\r\n";
let bakiye = 1000;
let metin =
  "1-Bakiye Görüntüleme" +
  yeniSatir +
  "2-Para Çekme" +
  yeniSatir +
  "3-Para Yatırma" +
  yeniSatir +
  "4-Çıkış" +
  yeniSatir +
  "Lütfen bir işlem seçiniz!";

let secim = prompt(metin);

switch (secim) {
  case "1":
    alert("Bakiyeniz : " + bakiye);
    break;
  case "2":
    let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz : "));
    if (cekilecekTutar < bakiye) {
      bakiye = bakiye - cekilecekTutar;
      alert("Kalan Bakiyeniz : " + bakiye);
    } else {
      alert(
        "Bakiyeniz bu tutarı çekmek için yetersizdir!" +
          yeniSatir +
          "Bakiyeniz : " +
          bakiye +
          " " +
          "Çekmek İstediğiniz Tutar: " +
          cekilecekTutar
      );
    }
    break;
  case "3":
    let yatirilacakTutar = Number(prompt("Yatırılacak Tutarı Giriniz : "));
    bakiye = yatirilacakTutar + bakiye;
    alert("Güncel Bakiyeniz : " + bakiye);
    break;
  case "4":
    console.log("Çıkış yapılmıştır.");
    break;
  default:
    console.log("Lütfen Geçerli Bir İşlem Seçiniz!");
    break;
}
