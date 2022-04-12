import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        /* Değişkenleri yazalım
        a : 1. Dik kenar
        b : 2. Dik kenar
        h : Yükseklik
        s : Alan */
        int a,b,h;
        double s;

        // Başlık yazalım.
        System.out.println("######################");
        System.out.println("### ÜÇGENDE ALAN HESAPLAMA");

        // Scanner sınıfını çağıralım
        Scanner input = new Scanner(System.in);

        // Kullanıcıdan kenarları alalım
        System.out.print("1. Kenar uzunluğunu giriniz: ");
        a = input.nextInt();
        System.out.print("2. Kenar uzunluğunu giriniz: ");
        b = input.nextInt();
        System.out.print("Yüksekliği giriniz: ");
        h = input.nextInt();

        // Alanı hesaplayalım: (Formül: (Taban alanı * Yükseklik) / 2)
        s = (a*b*h) / 2;
        System.out.println("######################");
        System.out.print("Üçgenin alanı: " + s);
    }
}