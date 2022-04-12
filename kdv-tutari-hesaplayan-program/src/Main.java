import java.util.Scanner;
public class Main {
    public static void main(String[] args){
        double tutar, kdvOran;
        Scanner input = new Scanner(System.in);
        System.out.println("##############################################");
        System.out.println("### KDV TUTARI HESAPLAMA ###");
        System.out.print("Ucret tutarini giriniz: ");
        tutar = input.nextDouble();
        tutar = tutar < 0 ? 0 : tutar; // Eğer girilen tutar negatif bir değerse tutarı 0'a eşitle.
        // Eğer tutar 0 ile 1000 arasında ise kdv oranını %18 al 1000 den büyükse %8 al
        kdvOran = (tutar >= 0 && tutar < 1000) ? 0.18 : 0.08;
        double kdvTutar = tutar * kdvOran;
        double kdvliTutar = tutar + kdvTutar;
        System.out.println("##############################################");
        System.out.print(tutar == 0 ? "KDV Tutarini hesaplayabilmek icin lutfen 0'dan farkli bir sayi giriniz!\n" : "");
        System.out.println("KDV Orani: " + kdvOran);
        System.out.println("KDV Tutariniz: " + kdvTutar);
        System.out.print("KDV'li Tutar: " + kdvliTutar);
    }
}
