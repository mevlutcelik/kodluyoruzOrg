import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        // Değişkenleri oluştur
        int matematik, fizik, kimya, turkce, tarih, muzik;
        // Ekrana başlık gösterdik
        System.out.println("###########################################");
        System.out.println("### NOT ORTALAMASINI HESAPLA ###");
        // Scanner sınıfını tanımladık
        Scanner input = new Scanner(System.in);
        // Kullanıcıdan değerleri al
        System.out.print("Matematik notunuzu giriniz: ");
        matematik = input.nextInt();
        System.out.print("Fizik notunuzu giriniz: ");
        fizik = input.nextInt();
        System.out.print("Kimya notunuzu giriniz: ");
        kimya = input.nextInt();
        System.out.print("Türkçe notunuzu giriniz: ");
        turkce = input.nextInt();
        System.out.print("Tarih notunuzu giriniz: ");
        tarih = input.nextInt();
        System.out.print("Müzik notunuzu giriniz: ");
        muzik = input.nextInt();
        int toplam = matematik + fizik + kimya + turkce + tarih + muzik;
        double sonuc = toplam / 6;
        System.out.println("###########################################");
        System.out.print("## Not ortalamanız: " + sonuc);
        System.out.print(sonuc >= 50 ? "Tebrikler, sınıfı geçtiniz!" : "Maalesef, sınıfta kaldınız!");
    }
}
