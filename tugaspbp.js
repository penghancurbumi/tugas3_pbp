// percabangan 
function hitungtotalkalori (lari=0,pushup=0,plank=0){
    let totalkalori = 0;
    
    if(lari > 0){
        const kalorilari = 60;
        totalkalori += (lari / 5) * kalorilari;
    }
    if(pushup > 0){
        const kaloripush = 200;
        totalkalori += (pushup / 30) * kaloripush;
    }
    if(plank > 0){
        const kaloriplank = 5;
        totalkalori += (plank / 1) * kaloriplank;
    }
    return totalkalori
    }
    console.log(`total kalori ${hitungtotalkalori(10,25)}`)
    console.log(' ')
    
    //perulangan
    //membalikan kata
    let kalimat = "Universitas Nusa Putra"
    let membalikankata = ''
    for (let i = kalimat.length-1; i >= 0; i--) {
        membalikankata += `${kalimat[i]}`
    }
    console.log("Kalimat awal: " + kalimat)
    console.log("Kalimat dibalik: " + membalikankata)
    console.log(' ')
    
    // menghitung pangkat dari sebuah bilangan
    let angka = 8
    let Pangkat = angka
    for (let i = 1; i < angka; i++){
        Pangkat += angka
        
    }
    console.log("Angka: " + angka)
    console.log("dipangkat jadi : "+Pangkat)
    console.log(' ')
    
    //menghitung faktorial
    let angka1 = 15
    let faktorial = angka1
    for (let i = 1; i <= angka1; i++){
        Pangkat *= angka1
    }
    console.log("Angka: " + angka1)
    console.log("faktorial : "+faktorial)
    console.log(' ')
    
    // menghapus spasi dari sebuah kalimat
    kalimat = "hai perkenalkan nama saya Muhammad Al Fakhreza Dwi Putra"
    let spasidihilang = ''
    for (let i = 0; i < kalimat.length; i++) {
        if(kalimat[i] !== " "){
            spasidihilang += kalimat[i]
        }
    }
    console.log("Kalimat awal: " + kalimat)
    console.log("spasi dihilangkan: " + spasidihilang )
    console.log(' ')
    
    // mengecek email apakah valid atau tidak 
    let email = "m.alfakhreza@gmail.com"
    let cekvalid = false;
    let addSymbol = false;
    let titik = false
    for (let i = 0; i < email.length; i++) {
        let karakter = email[i]
        
        if(karakter === ' '){
            valid = false
            break;
        }
        if (karakter === '@'){
            addSymbol = true
        }
        if(addSymbol && karakter === '.'){
            titik = true
        }
        valid = addSymbol && titik
        
    }
    console.log("Email: " + email)
    console.log("Valid: " + valid)
    console.log(' ')
    
    
    // palindrome
    const kata = "Kamu punyA sendok"
    let isPalindrome = false;
    let kataDibalik = '';
    for (let i = kata.length-1; i >= 0; i--) {
      kataDibalik += `${kata[i]}`
    }
    if (kata.toLowerCase() === kataDibalik.toLowerCase()) {
      isPalindrome = true
    }
    console.log(`kata '${kata}' merupakan palindrome: ${isPalindrome}`)
    console.log(' ')
    
    function apakahPalindrome(num) {
      const str = num.toString()  
      return str === str.split('').reverse().join('')
    } 
    
    function mencariNextPalindrome(num) {
      num++;
      while(!apakahPalindrome(num)){
        num++
      }
      return num
    }
    num = 10
    console.log(`Angka terdekat dari ${num} adalah ${mencariNextPalindrome(num)}`)
    console.log(' ')
    
    // Array
    // array yang digunakan untuk menyimpan nilai pemrograman JAVA yang terdiri dari nama dan nilai
    let namanilai = [["rahmi", 88], ["akrom", 85], ["ayu", 91], ["regita", 80], ["reza", 75], ["husna", 87], ["kayla", 80]];
    let totalnilai = 0
    let Lulus = ''
    let TidakLulus = ''
    let nilaiTerbesar = ''
    for(let i = 0; i < namanilai.length; i++) {
        totalnilai += namanilai[i][1]
        if(namanilai[i][1] > 70){
            Lulus += `${namanilai[i][0]}, `
        } else {
            TidakLulus += `${namanilai[i][0]}, `
        }
    }
    let nilaitertinggi = namanilai[0][1]
    let namanilaitertinggi = ''
    for (let i = 1; i < namanilai.length; i++) {
        if(namanilai[i][1] > nilaitertinggi){
            nilaitertinggi = namanilai[i][1]
            namanilaiTertinggi = namanilai[i][0] 
        }
    }
    let ratarata = totalnilai/namanilai.length
    console.log("Nilai rata-rata: "+ratarata)
    console.log("Nama yang lulus: " + Lulus)
    console.log("Nama yang tidak lulus: " + TidakLulus)
    console.log(`Nilai tertinggi dipegang oleh ${nilaitertinggi} dengan nilai ${nilaitertinggi}`)
    console.log(" ")
    
    // Buatlah array yang digunakan untuk menyimpan nama mahasiswa
    // Buatlah array yang digunakan untuk menyimpan nama mahasiswa
    let namaMahasiswa = ["Maul", "Andi", "Hermawan", "Yusri", "Riski", "Aldi", "Alabasta", "Limbad"]
    let namaAwalHurufA = ''
    let namaTerpanjang = namaMahasiswa[0]
    let namaTerpendek = namaMahasiswa[0]
    
    for(let i = 0; i < namaMahasiswa.length; i++) {
        if(namaMahasiswa[i][0].toLowerCase() === 'a'){
            namaAwalHurufA += `${namaMahasiswa[i]}, `
        
        }
        
    }
    
    for (let i = 1; i < namaMahasiswa.length; i++) {
        if(namaMahasiswa[i].length > namaTerpanjang.length) {
            namaTerpanjang = namaMahasiswa[i]
        }
        if(namaMahasiswa[i].length < namaTerpendek.length){
            namaTerpendek = namaMahasiswa[i]
        }
    }
    console.log("Nama yang diawali huruf a: "+namaAwalHurufA)
    console.log("Nama paling panjang: " + namaTerpanjang)
    console.log("Nama terpendek: " + namaTerpendek)
    console.log(" ")
    
    // Buatlah simulasi pengecekan posisi skak (check) antara RAJA dan BENTENG 
    let papan = [
      ['.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.']
      ]
    let posisibarispadaraja =  2
    let posisikolompadaraja = 3
    let posisibarispadabenteng = 4
    let posisikolompadabenteng = 3
    
    
    const raja = papan[posisibarispadaraja][posisikolompadaraja] = 'R'
    const benteng = papan[posisibarispadabenteng][posisikolompadabenteng] = 'B'
    let skak = false
    console.log(papan)
    
    for(let i = 0; i < papan.length; i++) {
      if(papan[i][posisikolompadabenteng] === 'R') {
        skak = true
      } else if(papan[posisibarispadabenteng][i] === 'R'){
        skak = true
      }
    }
    console.log("Raja terkena skak: "+skak)