# Merge Sort

### Proje 2


### [16,21,11,8,12,22] -> Merge Sort

### - Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

   - Merge sort, her aşamada elemanları parçalara ayırıp tek bir eleman kalana kadar bu işleme devam eder. Daha sonra bizi  sıralı bir şekilde sonuca götürür.

   [16,21,11]         |      [8,12,22]
   [16]    [21,11]    |      [8]    [12,22]
   [16]    [21] [11]  |      [8]    [12] [22]
   [16]    [11] [21]  |      [8]    [12,22]
   [16]    [11,21]
   [11,16,21]         |      [8,12,22]
          [8,11,12,16,21,22]

-----------------------------
### Big-O gösterimini yazınız.

  
  - nlogn