/* setTimeout(() => {
    console.log("teste")
}), 4000 */

for (let regressiva = 10; regressiva >= 0; regressiva--) {
    setTimeout(() => {
        console.log(regressiva)
            if (regressiva == 0) {
                console.log("Feliz ano novo")
            }
        }, (10 - regressiva) * 1000)
    }

