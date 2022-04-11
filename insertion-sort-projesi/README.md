# Insertion Sort

### Proje 1


### [22,27,16,2,18,6] -> Insertion Sort

### - Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

   - Insertion sort en küçük elemanı başa alıp onunla en baştaki elemanın yerini değiştirir ve bu işlemi sıralama bitene kadar devam ettirir.

   1. [2,27,16,22,18,6]
   2. [2,6,16,22,18,27]
   3. [2,6,16,18,22,27]
-----------------------------
### Big-O gösterimini yazınız.

  
  - Big-O Notation için n+(n-1)+(n-2)...buda n ardışık sayının toplamı formülünden n*(n+1)/2 bu formülü açtığımınzda (n^2+2n+1)/2 gelir bu formülde baskın olan n^2 olduğu için Big-o Notation n^2 oluyor.
   
--------------------------------------------------------------------------------------------
### Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
- Time Complexity: 
Average case: 16 
Worst case: 27 
Best case: 2

- 18 için worst case diyebiliriz.