

/*function greeting(param){
    return `Hello ${param}`;
}

const sapaGalih = greeting('Galih');
const sapaAhmad = greeting('Ahmad');
console.log(sapaGalih,sapaAhmad)*/

/*function greeting1(param1,param2){
    return `Hallo ${param1},Hi ${param2}`
}

const sapaBudiJoni =greeting1("Budi","Joni");
console.log(sapaBudiJoni) 

function hitungDiskon(discount){
    const hargabaju = 250000;
     const hargadiskon = hargabaju * discount / 100;
    const totalHarga = hargabaju - hargadiskon
    return `Total harganya adalah ${totalHarga}`;
}

const januari = hitungDiskon(10)
console.log(januari);
const februari = hitungDiskon(20)
console.log(februari)*/


/*function hitungUsia(tahunLahir){
const hariIni = new Date()
const tahunIni = hariIni.getFullYear();
const usiaSkrg = tahunIni - tahunLahir 
return usiaSkrg;

}

const usiaGalih = hitungUsia(1997)
console.log(usiaGalih);*/


const perpangkatan = (angka,pangkat) => {
    const hitung = Math.pow(angka,pangkat);
    return hitung;
   }
   
   const tigaPangkatEmpat = perpangkatan(3,4)
   console.log(tigaPangkatEmpat);