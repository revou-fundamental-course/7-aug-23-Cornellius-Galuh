function hitungluas(){
    const alas = document.getElementById('alas')
    const tinggi = document.getElementById('tinggi')
    const hitung = document.getElementById('hitung1')
    const output = document.getElementById('output1')
    hitung.addEventListener('click', function(){
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t
    output.innerHTML = `Luas segitiganya adalah ${l} cm^2`
})
}

function hitungkeliling(){
    const sisiA = document.getElementById('sisiA')
    const sisiB = document.getElementById('sisiB')
    const sisiC = document.getElementById('sisiC')
    const hitung = document.getElementById('hitung2')
    const output = document.getElementById('output2')
    hitung.addEventListener('click', function(){
    let A = sisiA.value
    let B = sisiB.value
    let C = sisiC.value
    let k = Number(sisiA.value)+Number(sisiB.value)+Number(sisiC.value)
    output.innerHTML = `Keliling segitiganya adalah ${k} cm`
})
}