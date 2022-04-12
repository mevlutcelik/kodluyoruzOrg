import java.util.Scanner;
public class Main {
    public static void main(String[] args) throws Exception {
        // Değişkenleri tanımlayalım
        int acilis = 10, km;
        double kmBasinaUcret = 2.20, tutar;

        // Scanner nesnesini çağıralım
        Scanner input = new Scanner(System.in);

        // Başlık yazalım
        System.out.println("###################");
        System.out.println("### TAKSİMETRE PROGRAMI ###");

        // Kullanıcıdan KM bilgisi alalım
        System.out.print("Mesafeyi KM cinsinden giriniz: ");
        km = input.nextInt();

        // Hesaplamaları yapalım
        tutar = km * kmBasinaUcret;
        tutar += acilis;

        // Tutar 20 den küçükse sonucu 20ye eşitle
        tutar = tutar < 20 ? 20 : tutar;

        // Ekrana yazdıralım
        System.out.println("###################");
        System.out.print("Ödemeniz gereken ücret: " + tutar);
    }
}
