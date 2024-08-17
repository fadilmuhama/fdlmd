document.getElementById('khodamForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nama = document.getElementById('namaLengkap').value;
    const khodam = generateKhodam(nama);
    document.getElementById('hasil').innerHTML = `<p>Khodam untuk nama ${nama} adalah ${khodam}</p>`;
    document.getElementById('namaLengkap').value = "";
})

function generateKhodam(nama){
    const khodams = [
       'Wewe Gombel',
        'Monyet bego',
        'Babi Ngepet',
        'Buaya Darat',
        'Jurig Seblak Level 11',
        'Kunti bogel',
        'Siluman oyo',
        'Tuyul mager',
        'Tuyul molet',
        'Tuyul moshing',
        'Undur-Undur',
        'Singa Intropert', 
        'Macan Nolep',
        'Bekicot Magetang',
        'Tongo',
        'Tidak ada khodam', 
        'Beruk',
        'Tikus Kantor',
        'Toke Lieur',
        'Seblak', 
        'Nyai ronggeng',
        'Ayam Kampus',
        'Curut',
        'Babi',
        'Bebek carok',
        'Kadal Gurun',
        
    ];

    const index = nama.length % khodams.length;
    return khodams[index];
}